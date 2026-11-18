// js/loader.js
// The loading screen: a small neural network that wires itself together as the
// brain model downloads. Plain canvas, so it starts before the 3D engine loads.
// The main script calls SiteLoader.setProgress(0..1) and SiteLoader.finish().

(function () {
    const screen = document.getElementById('loading-screen');
    const canvas = document.getElementById('loader-canvas');
    const pctEl = document.getElementById('loader-pct');
    const lineEl = document.getElementById('loader-line');
    if (!screen || !canvas) return;

    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const COLORS = ['#99ccff', '#66e0ff', '#b388ff'];

    let W = 0, H = 0, dpr = 1;
    let nodes = [], edges = [], pulses = [];
    let target = 0, shown = 0, finishing = false, finishedAt = 0, running = true;
    let last = performance.now();

    // Nodes fill a soft brain-like oval, revealed from the back of the head forward
    function build() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        W = rect.width; H = rect.height;
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const count = W < 400 ? 54 : 72;
        const rx = W * 0.42, ry = H * 0.36, cx = W / 2, cy = H * 0.5;
        nodes = [];
        let seed = 7;
        const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
        while (nodes.length < count) {
            const x = (rand() * 2 - 1), y = (rand() * 2 - 1);
            if (x * x + y * y > 1) continue;
            const px = cx + x * rx, py = cy + y * ry * (1 - 0.15 * Math.max(0, x));
            nodes.push({ x: px, y: py, order: (x + 1) / 2 + rand() * 0.35, glow: 0, color: COLORS[nodes.length % 3] });
        }
        nodes.sort((a, b) => a.order - b.order);
        nodes.forEach((n, i) => { n.reveal = (i + 1) / nodes.length; });

        edges = [];
        nodes.forEach((a, i) => {
            const near = nodes
                .map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
                .filter((o) => o.j !== i)
                .sort((p, q) => p.d - q.d)
                .slice(0, 3);
            near.forEach((o) => {
                if (!edges.some((e) => (e.a === o.j && e.b === i))) edges.push({ a: i, b: o.j, len: o.d });
            });
        });
    }

    function visible(i, p) { return nodes[i].reveal <= p; }

    function spawnPulse(p) {
        const live = edges.filter((e) => visible(e.a, p) && visible(e.b, p));
        if (!live.length) return;
        const e = live[Math.floor(Math.random() * live.length)];
        const flip = Math.random() < 0.5;
        pulses.push({ from: flip ? e.b : e.a, to: flip ? e.a : e.b, t: 0, dur: 0.35 + e.len / 260 });
    }

    function draw(now) {
        if (!running) return;
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;

        // Ease the shown progress toward the real progress so it climbs smoothly
        shown += (target - shown) * (reduceMotion ? 1 : Math.min(1, dt * 6));
        if (finishing) shown = Math.max(shown, 1);
        const p = Math.min(1, shown);

        ctx.clearRect(0, 0, W, H);

        // Connections
        edges.forEach((e) => {
            if (!visible(e.a, p) || !visible(e.b, p)) return;
            const a = nodes[e.a], b = nodes[e.b];
            const g = Math.max(a.glow, b.glow);
            ctx.strokeStyle = `rgba(153, 204, 255, ${0.14 + g * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
        });

        // Signals travelling along connections
        if (!reduceMotion) {
            if (Math.random() < dt * (finishing ? 30 : 7)) spawnPulse(p);
            pulses = pulses.filter((s) => {
                s.t += dt / s.dur;
                const a = nodes[s.from], b = nodes[s.to];
                if (s.t >= 1) { b.glow = 1; return false; }
                const x = a.x + (b.x - a.x) * s.t, y = a.y + (b.y - a.y) * s.t;
                const grd = ctx.createRadialGradient(x, y, 0, x, y, 7);
                grd.addColorStop(0, 'rgba(255,255,255,0.95)');
                grd.addColorStop(1, 'rgba(153,204,255,0)');
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(x, y, 7, 0, Math.PI * 2);
                ctx.fill();
                return true;
            });
        }

        // Neurons
        nodes.forEach((n, i) => {
            if (!visible(i, p)) return;
            n.glow = Math.max(0, n.glow - dt * 1.6);
            const born = Math.min(1, (p - n.reveal) * 25 + 0.2);
            const r = 2.2 + n.glow * 2.5;
            ctx.globalAlpha = born;
            if (n.glow > 0.02) {
                const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 16);
                grd.addColorStop(0, n.color);
                grd.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.globalAlpha = born * n.glow;
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(n.x, n.y, 16, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = born;
            }
            ctx.fillStyle = n.color;
            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        });

        if (pctEl) pctEl.textContent = Math.round(p * 100) + '%';

        // Once loaded, let the network fire for a moment, then fade out
        if (finishing && now - finishedAt > (reduceMotion ? 0 : 450)) {
            screen.classList.add('done');
            setTimeout(() => { screen.style.display = 'none'; running = false; }, reduceMotion ? 0 : 650);
        }
        requestAnimationFrame(draw);
    }

    window.SiteLoader = {
        setProgress(f) { if (!finishing) target = Math.max(target, Math.min(0.99, f)); },
        setLine(text) { if (lineEl) lineEl.textContent = text; },
        finish() {
            if (finishing) return;
            finishing = true;
            finishedAt = performance.now();
            target = 1;
            if (lineEl) lineEl.textContent = 'Ready';
            nodes.forEach((n) => { n.glow = 1; });
        }
    };

    build();
    window.addEventListener('resize', build);
    requestAnimationFrame(draw);
})();
