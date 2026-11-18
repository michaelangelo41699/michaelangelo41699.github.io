// js/neural-field.js
// The background: a network of neurons around the brain. Signals travel along
// the connections; when one arrives, the neuron flashes and may fire on to its
// neighbours, so activity ripples through the network in small cascades.
// When a project is lit on the brain, the network fires faster in its color.

import * as THREE from 'three';

function glowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, 'rgba(255,255,255,1)');
    r.addColorStop(0.25, 'rgba(255,255,255,0.7)');
    r.addColorStop(0.6, 'rgba(255,255,255,0.12)');
    r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r;
    g.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
}

export function createNeuralField(scene, { phone = false, reduceMotion = false } = {}) {
    const N = phone ? 240 : 420;          // neurons
    const K = 3;                          // connections per neuron
    const MAX_SPIKES = phone ? 90 : 160;  // signals in flight at once
    const SPEED = 3.2;                    // units per second
    const REFRACTORY = 0.7;               // seconds a neuron rests after firing

    const palette = [new THREE.Color('#66ccff'), new THREE.Color('#99ccff'), new THREE.Color('#b388ff'), new THREE.Color('#5ee6ff')];
    const group = new THREE.Group();
    scene.add(group);
    const tex = glowTexture();

    // --- Neurons, grouped into loose clusters so it reads as tissue, not noise ---
    const pos = [];
    const base = [];
    const clusters = [];
    for (let i = 0; i < 14; i++) {
        const v = new THREE.Vector3().randomDirection().multiplyScalar(THREE.MathUtils.randFloat(6.5, 14));
        clusters.push(v);
    }
    const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 1.6;
    while (pos.length < N) {
        const c = clusters[pos.length % clusters.length];
        const p = new THREE.Vector3(c.x + gauss() * 1.7, c.y + gauss() * 1.7, c.z + gauss() * 1.7);
        if (p.length() < 5) continue;     // keep clear of the brain and the camera
        pos.push(p);
        base.push(palette[pos.length % palette.length]);
    }

    // --- Connections: each neuron to its nearest neighbours ---
    const edges = [];
    const nbrs = pos.map(() => []);
    const seen = new Set();
    pos.forEach((a, i) => {
        pos.map((b, j) => ({ j, d: a.distanceToSquared(b) }))
            .filter((o) => o.j !== i)
            .sort((x, y) => x.d - y.d)
            .slice(0, K)
            .forEach(({ j, d }) => {
                const key = i < j ? i + ':' + j : j + ':' + i;
                if (seen.has(key) || d > 30) return;
                seen.add(key);
                const e = edges.length;
                edges.push({ a: i, b: j, len: Math.sqrt(d), heat: 0 });
                nbrs[i].push({ n: j, e });
                nbrs[j].push({ n: i, e });
            });
    });

    // Lines
    const linePos = new Float32Array(edges.length * 6);
    const lineCol = new Float32Array(edges.length * 6);
    edges.forEach((e, k) => {
        pos[e.a].toArray(linePos, k * 6);
        pos[e.b].toArray(linePos, k * 6 + 3);
    });
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineCol, 3));
    const lines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({
        vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    group.add(lines);

    // Neuron cores
    const corePos = new Float32Array(N * 3);
    const coreCol = new Float32Array(N * 3);
    pos.forEach((p, i) => p.toArray(corePos, i * 3));
    const coreGeo = new THREE.BufferGeometry();
    coreGeo.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
    coreGeo.setAttribute('color', new THREE.BufferAttribute(coreCol, 3));
    const cores = new THREE.Points(coreGeo, new THREE.PointsMaterial({
        size: 0.22, map: tex, vertexColors: true, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false
    }));
    group.add(cores);

    // Halos: a larger soft flash around a neuron that just fired
    const haloCol = new Float32Array(N * 3);
    const haloGeo = new THREE.BufferGeometry();
    haloGeo.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
    haloGeo.setAttribute('color', new THREE.BufferAttribute(haloCol, 3));
    const halos = new THREE.Points(haloGeo, new THREE.PointsMaterial({
        size: 1.1, map: tex, vertexColors: true, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false
    }));
    group.add(halos);

    // Signals in flight
    const spikePos = new Float32Array(MAX_SPIKES * 3);
    const spikeCol = new Float32Array(MAX_SPIKES * 3);
    const spikeGeo = new THREE.BufferGeometry();
    spikeGeo.setAttribute('position', new THREE.BufferAttribute(spikePos, 3));
    spikeGeo.setAttribute('color', new THREE.BufferAttribute(spikeCol, 3));
    const spikesMesh = new THREE.Points(spikeGeo, new THREE.PointsMaterial({
        size: 0.42, map: tex, vertexColors: true, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false
    }));
    group.add(spikesMesh);

    // Faint distant dust for depth
    const dust = [];
    for (let i = 0; i < (phone ? 1200 : 2200); i++) {
        dust.push(...new THREE.Vector3().randomDirection().multiplyScalar(THREE.MathUtils.randFloat(22, 45)).toArray());
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.Float32BufferAttribute(dust, 3));
    scene.add(new THREE.Points(dustGeo, new THREE.PointsMaterial({
        size: 0.09, color: 0x52627a, transparent: true, opacity: 0.8, depthWrite: false, fog: false
    })));

    const flash = new Float32Array(N);
    const flashColor = pos.map((_, i) => base[i].clone());
    const lastFire = new Float32Array(N).fill(-10);
    const spikes = [];
    const queue = [];   // delayed firings: { at, n, from, color }
    let clock = 0;

    function fire(n, from, color) {
        if (clock - lastFire[n] < REFRACTORY) return;
        lastFire[n] = clock;
        flash[n] = 1;
        flashColor[n].copy(color);
        const out = nbrs[n].filter((o) => o.n !== from);
        // Fire along one or two connections; fewer when the network is busy, so it never runs away
        const busy = spikes.length / MAX_SPIKES;
        const count = Math.random() < 0.45 * (1 - busy) ? 2 : 1;
        for (let i = 0; i < count && out.length; i++) {
            const pick = out.splice(Math.floor(Math.random() * out.length), 1)[0];
            if (spikes.length >= MAX_SPIKES) break;
            const e = edges[pick.e];
            spikes.push({ from: n, to: pick.n, e: pick.e, t: 0, dur: e.len / SPEED, color: color.clone() });
        }
    }

    const white = new THREE.Color(1, 1, 1);
    const tmp = new THREE.Color();
    const tmp2 = new THREE.Color();
    let spontaneous = 0;

    // tint: a THREE.Color while a project is lit on the brain, otherwise null
    function update(dt, tint) {
        dt = Math.min(dt, 0.05);
        clock += dt;
        if (!reduceMotion) group.rotation.y += dt * 0.012;

        if (!reduceMotion) {
            // Spontaneous firing; faster, and in the project's color, while something is lit
            const rate = tint ? 5 : 1.4;
            spontaneous += dt * rate;
            while (spontaneous >= 1) {
                spontaneous -= 1;
                const n = Math.floor(Math.random() * N);
                fire(n, -1, tint || base[n]);
            }

            // Move signals; on arrival the target neuron may fire on (a cascade)
            for (let i = spikes.length - 1; i >= 0; i--) {
                const s = spikes[i];
                s.t += dt / s.dur;
                edges[s.e].heat = 1;
                if (s.t >= 1) {
                    spikes.splice(i, 1);
                    flash[s.to] = Math.max(flash[s.to], 0.8);
                    flashColor[s.to].copy(s.color);
                    if (Math.random() < 0.62) queue.push({ at: clock + 0.05 + Math.random() * 0.12, n: s.to, from: s.from, color: s.color });
                }
            }
            for (let i = queue.length - 1; i >= 0; i--) {
                if (queue[i].at <= clock) {
                    const q = queue.splice(i, 1)[0];
                    fire(q.n, q.from, q.color);
                }
            }
        }

        // Neurons: dim resting glow plus a fading flash
        for (let n = 0; n < N; n++) {
            flash[n] = Math.max(0, flash[n] - dt * 1.8);
            const f = flash[n];
            tmp.copy(base[n]).multiplyScalar(0.32).lerp(white, f * 0.6).add(tmp2.copy(flashColor[n]).multiplyScalar(f));
            tmp.toArray(coreCol, n * 3);
            tmp.copy(flashColor[n]).multiplyScalar(f * 0.55).toArray(haloCol, n * 3);
        }
        coreGeo.attributes.color.needsUpdate = true;
        haloGeo.attributes.color.needsUpdate = true;

        // Connections: faint at rest, bright while a signal crosses
        edges.forEach((e, k) => {
            e.heat = Math.max(0, e.heat - dt * 1.4);
            const b = 0.07 + e.heat * 0.45;
            const ca = base[e.a], cb = base[e.b];
            lineCol[k * 6] = ca.r * b; lineCol[k * 6 + 1] = ca.g * b; lineCol[k * 6 + 2] = ca.b * b;
            lineCol[k * 6 + 3] = cb.r * b; lineCol[k * 6 + 4] = cb.g * b; lineCol[k * 6 + 5] = cb.b * b;
        });
        lineGeo.attributes.color.needsUpdate = true;

        // Signals
        for (let i = 0; i < MAX_SPIKES; i++) {
            const s = spikes[i];
            if (!s) { spikeCol[i * 3] = spikeCol[i * 3 + 1] = spikeCol[i * 3 + 2] = 0; continue; }
            const a = pos[s.from], b = pos[s.to];
            spikePos[i * 3] = a.x + (b.x - a.x) * s.t;
            spikePos[i * 3 + 1] = a.y + (b.y - a.y) * s.t;
            spikePos[i * 3 + 2] = a.z + (b.z - a.z) * s.t;
            tmp.copy(s.color).lerp(white, 0.35).toArray(spikeCol, i * 3);
        }
        spikeGeo.attributes.position.needsUpdate = true;
        spikeGeo.attributes.color.needsUpdate = true;
    }

    // A first wave so the network is already alive when the page appears
    if (!reduceMotion) for (let i = 0; i < 10; i++) fire(Math.floor(Math.random() * N), -1, base[i % base.length]);

    return { update, group };
}
