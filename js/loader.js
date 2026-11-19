// js/loader.js
// A small neural network drawn on a canvas that wires itself together as
// progress climbs. Used by the first-visit loading screen and by the short
// transition shown while the camera moves between pages.
// Plain script (not a module), so the loading screen starts before the 3D engine loads.

(function () {
    const COLORS = ['#99ccff', '#66e0ff', '#b388ff'];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Returns { setProgress(0..1), finish(), reset(seed), stop() }
    function NeuralSketch(canvas, opts) {
        const o = Object.assign({ count: 72, small: 54, seed: 7, onFrame: null }, opts || {});
        const ctx = canvas.getContext('2d');
        let W = 0, H = 0;
        let nodes = [], edges = [], pulses = [];
        let target = 0, shown = 0, finishing = false, running = true, seed = o.seed;
        let last = performance.now();

        function rand() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

        // Nodes fill a soft brain-like oval and are revealed from back to front
        function build() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.getBoundingClientRect();
            W = rect.width; H = rect.height;
            if (!W || !H) return;
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = W < 400 ? o.small : o.count;
            const rx = W * 0.42, ry = H * 0.36, cx = W / 2, cy = H * 0.5;
            nodes = [];
            while (nodes.length < count) {
                const x = rand() * 2 - 1, y = rand() * 2 - 1;
                if (x * x + y * y > 1) continue;
                nodes.push({
                    x: cx + x * rx, y: cy + y * ry * (1 - 0.15 * Math.max(0, x)),
                    order: (x + 1) / 2 + rand() * 0.35, glow: 0, color: COLORS[nodes.length % 3]
                });
            }
            nodes.sort((a, b) => a.order - b.order);
            nodes.forEach((n, i) => { n.reveal = (i + 1) / nodes.length; });

            edges = [];
            const seen = new Set();
            nodes.forEach((a, i) => {
                nodes.map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
                    .filter((q) => q.j !== i)
                    .sort((p, q) => p.d - q.d)
                    .slice(0, 3)
                    .forEach((q) => {
                        const key = Math.min(i, q.j) + ':' + Math.max(i, q.j);
                        if (!seen.has(key)) { seen.add(key); edges.push({ a: i, b: q.j, len: q.d }); }
                    });
            });
        }

        const visible = (i, p) => nodes[i].reveal <= p;

        function spawnPulse(p) {
            const live = edges.filter((e) => visible(e.a, p) && visible(e.b, p));
            if (!live.length) return;
            const e = live[Math.floor(Math.random() * live.length)];
            const flip = Math.random() < 0.5;
            pulses.push({ from: flip ? e.b : e.a, to: flip ? e.a : e.b, t: 0, dur: 0.3 + e.len / 260 });
        }

        function draw(now) {
            if (!running) return;
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            shown += (target - shown) * (reduceMotion ? 1 : Math.min(1, dt * 7));
            if (finishing) shown = Math.max(shown, 1);
            const p = Math.min(1, shown);

            ctx.clearRect(0, 0, W, H);

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

            if (!reduceMotion) {
                if (Math.random() < dt * (finishing ? 30 : 8)) spawnPulse(p);
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

            nodes.forEach((n, i) => {
                if (!visible(i, p)) return;
                n.glow = Math.max(0, n.glow - dt * 1.6);
                const born = Math.min(1, (p - n.reveal) * 25 + 0.2);
                if (n.glow > 0.02) {
                    const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 16);
                    grd.addColorStop(0, n.color);
                    grd.addColorStop(1, 'rgba(0,0,0,0)');
                    ctx.globalAlpha = born * n.glow;
                    ctx.fillStyle = grd;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, 16, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = born;
                ctx.fillStyle = n.color;
                ctx.beginPath();
                ctx.arc(n.x, n.y, 2.2 + n.glow * 2.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            if (o.onFrame) o.onFrame(p, finishing, now);
            requestAnimationFrame(draw);
        }

        build();
        window.addEventListener('resize', build);
        requestAnimationFrame(draw);

        return {
            setProgress(f) { if (!finishing) target = Math.max(target, Math.min(0.99, f)); },
            finish() {
                if (finishing) return;
                finishing = true;
                target = 1;
                nodes.forEach((n) => { n.glow = 1; });
            },
            // Start again with a freshly shaped network
            reset(newSeed) {
                seed = newSeed || Math.floor(Math.random() * 1e9) + 1;
                target = shown = 0;
                finishing = false;
                pulses = [];
                build();
                if (!running) { running = true; last = performance.now(); requestAnimationFrame(draw); }
            },
            stop() { running = false; }
        };
    }
    window.NeuralSketch = NeuralSketch;

    // --- First-visit loading screen ---
    const screen = document.getElementById('loading-screen');
    const canvas = document.getElementById('loader-canvas');
    if (!screen || !canvas) return;
    const pctEl = document.getElementById('loader-pct');
    const lineEl = document.getElementById('loader-line');
    let finishedAt = 0;

    const sketch = NeuralSketch(canvas, {
        onFrame(p, finishing, now) {
            if (pctEl) pctEl.textContent = Math.round(p * 100) + '%';
            // Once loaded, let the network fire for a moment, then fade out
            if (finishing && !screen.classList.contains('done') && now - finishedAt > (reduceMotion ? 0 : 450)) {
                screen.classList.add('done');
                setTimeout(() => { screen.style.display = 'none'; sketch.stop(); }, reduceMotion ? 0 : 650);
            }
        }
    });

    window.SiteLoader = {
        setProgress: (f) => sketch.setProgress(f),
        setLine(text) { if (lineEl) lineEl.textContent = text; },
        finish() {
            finishedAt = performance.now();
            if (lineEl) lineEl.textContent = 'Ready';
            sketch.finish();
        }
    };
})();
