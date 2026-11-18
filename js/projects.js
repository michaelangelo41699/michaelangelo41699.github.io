// js/projects.js
// Every project shown in the Projects deck and its case-study page.
// To add a project, add one entry to PROJECTS. Order here is the order on screen.
//
// region: where the project lights up on the brain, as fractions of the brain's
// size from its center (x, y, z each between -0.5 and 0.5).

export const PROJECTS = [
    {
        id: 'FORGE',
        title: 'F.O.R.G.E. Filament Winder',
        kicker: 'Team project · Software Lead',
        hook: 'A student team building a carbon fiber filament winder from scratch. I lead the software team.',
        accent: '#F5A623',
        region: [0.0, 0.3, 0.0],
        cover: 'covers/forge.jpg',
        coverAlt: 'Winding Simulator: fiber wrapping a spinning mandrel in 3D',
        tags: ['Three.js', 'JavaScript', 'GitHub Pages', 'Team leadership'],
        facts: [
            ['Role', 'Software Lead, 2 developers'],
            ['Team', '4 engineering teams'],
            ['Built with', 'Three.js, JavaScript, GitHub Pages'],
            ['Status', 'In progress'],
        ],
        intro: 'F.O.R.G.E. is a student team of mechanical, electrical, materials and software engineers designing a machine that wraps resin-soaked carbon fiber into strong, lightweight tubes. I lead the software side: the code that will plan and run each wind, and the tools that help four teams design one machine together.',
        sections: [
            {
                heading: 'What I built',
                items: [
                    'Project website: a live site for the whole team, with pages for each team and two interactive 3D tools.',
                    'Parts Explorer: a Three.js viewer that loads the team\'s CAD exports, with click-to-inspect info cards, an exploded view, and a parts list teams can update without touching the viewer code.',
                    'Winding Simulator: a real-time 3D animation of fiber winding onto the mandrel that calculates circuits, coverage, carriage feed and tow payout from the winding angle and mandrel size.',
                    'Code review: audited Cyclone, the open-source winding software we build on, and found issues including one that silently skips a whole layer.',
                    'Team setup: GitHub organization, cross-team task tracking with dependencies, and onboarding for the software developers.',
                ],
            },
            {
                heading: 'Next',
                text: 'Fixing Cyclone\'s planner, building a desktop app for planning winds, and running the first test winds with jute twine before moving to carbon fiber.',
            },
        ],
        gallery: [
            { src: 'covers/forge/sim-page.jpg', alt: 'Winding Simulator with angle, speed and live readouts' },
            { src: 'covers/forge/parts.jpg', alt: 'Parts Explorer with the NEMA 23 stepper motor selected' },
            { src: 'covers/forge/home.jpg', alt: 'F.O.R.G.E. website home page' },
        ],
        links: [
            { label: 'Visit the live site', href: 'https://tamu-forge.github.io/forge-website/', primary: true },
            { label: 'View source code', href: 'https://github.com/tamu-forge/forge-website' },
        ],
    },
    {
        id: 'NEUROMORPHIC',
        title: 'Neuromorphic Memory',
        kicker: 'Research · 2026 to present',
        hook: 'A brain-inspired spiking network that learns new tasks without overwriting old ones.',
        accent: '#33ff99',
        region: [0.0, 0.16, -0.26],
        cover: 'covers/neuromorphic.jpg',
        coverAlt: 'Diagram of the spiking network with astrocyte gates and cascade synapses',
        tags: ['PyTorch', 'Spiking networks', 'e-prop', 'Google Colab'],
        facts: [
            ['Role', 'Independent researcher'],
            ['Since', '2026'],
            ['Built with', 'PyTorch, Google Colab GPUs'],
            ['Status', 'Research in progress'],
        ],
        intro: 'Teach today\'s AI something new and it tends to overwrite what it already knew. This is called catastrophic forgetting. Brains don\'t do this, partly because a synapse isn\'t a single number: memories settle in over several stages. My research asks whether brain-like mechanisms can give a spiking neural network the same ability, using only learning rules that a neuromorphic chip could run locally.',
        sections: [
            {
                heading: 'The question',
                text: 'Can an astrocyte-style gate, which decides when a synapse may change, combined with multi-timescale cascade synapses, which decide how long a change lasts, reduce forgetting in a spiking network? The network learns with a local rule and is never told which task it\'s on.',
            },
            {
                heading: 'What I built',
                items: [
                    'Spiking network and data: a leaky integrate-and-fire network trained on N-MNIST, real event-camera recordings (2,312 inputs over 25 time steps), split into 5 tasks learned one after another.',
                    'Local learning, by hand: e-prop written without autograd, so each synapse learns only from information it can see. Verified against backpropagation through time, with an exact match in the reference case.',
                    'Astrocyte gate: rebuilt astrocyte-modulated plasticity (AGMP; Dong & He, 2026) from its published equations, since no code was released.',
                    'Cascade synapses: each weight becomes a chain of coupled variables (Benna & Fusi, 2016). Verified that a single memory fades as a power law (log-log slope −0.50) instead of exponentially.',
                    'Experiment pipeline: GPU training on Google Colab with multi-seed sweeps, two scoring modes, and reproducibility logging.',
                ],
            },
            {
                heading: 'Results so far',
                items: [
                    'A plain spiking network forgets almost completely: about 19% final accuracy across 10 digits, the textbook catastrophic-forgetting result.',
                    'A homeostatic rule that keeps neurons from going silent cut idle neurons from about half the layer to under 10%, and raised per-task accuracy from 0.87 to 0.95 over 3 seeds.',
                    'Next: re-testing the gate and cascade synapses on this stronger baseline, then longer task sequences, where a power-law memory should matter most.',
                ],
            },
        ],
        gallery: [
            { src: 'neuromorphic/network.jpg', alt: 'Diagram of the spiking network: event inputs, synapses, spiking neurons with astrocytes, readout, and error feedback' },
            { src: 'neuromorphic/brain.jpg', alt: 'Schematic brain showing which regions each part of the network stands in for' },
            { src: 'neuromorphic/cascade_decay.png', alt: 'Forgetting curves of one cascade synapse' },
        ],
        links: [
            { label: 'Explore the interactive brain map', href: 'neuromorphic/anatomy.html', primary: true },
        ],
        note: 'Research in progress. The code is private for now.',
    },
    {
        id: 'JOY',
        title: 'Joy',
        kicker: 'AI companion · Lead Developer',
        hook: 'An assistant that remembers context, tracks goals and identity drift, and can act for you by voice.',
        accent: '#ff7eb6',
        region: [0.0, 0.18, 0.27],
        cover: 'covers/joy.jpg',
        coverAlt: 'Joy\'s Desk: inbox of awareness items and generated reports',
        tags: ['Electron', 'React', 'React Native', 'Cloudflare Workers', 'Rust'],
        facts: [
            ['Role', 'Lead Developer'],
            ['Platforms', 'Desktop, mobile, browser'],
            ['Built with', 'Electron, React, Cloudflare Workers, Rust'],
            ['Grew out of', 'Shield-AI'],
        ],
        intro: 'Joy grew out of Shield-AI. It\'s a desktop-first assistant that pays attention to what you\'re working on, remembers context, and points out when you\'re drifting from the person you said you want to be. It can also act for you through voice, the browser, phone calls, and smart devices, across desktop, mobile, and the cloud from a single backend.',
        sections: [
            {
                heading: 'What I built',
                items: [
                    'Multi-client architecture: Electron + React desktop app, React Native (Expo) mobile app, and a browser extension, all synced through a Cloudflare Workers backend with Durable Objects (one per user) and a D1 database.',
                    'Long-term memory: a categorized memory (preferences, habits, people, goals) built from conversation and observed behavior, with search, manual editing, and cloud sync.',
                    'Goals and identity drift: detects objectives mentioned in conversation for one-click promotion, and tracks identity goals on an aligned-to-drifting scale with 6-week trend lines.',
                    'Roadmaps: multi-month plans broken into dependent tasks that unlock as earlier steps are completed.',
                    'Voice and agentic control: a real-time voice pipeline, a computer-use agent for desktop control, phone calls to saved contacts, and smart device control.',
                    'Native performance: a Rust (NAPI-RS) module for low-latency audio playback and image hashing inside Electron.',
                ],
            },
        ],
        gallery: [
            { src: 'joyScreenshots/Screenshot%202026-10-05%20215859.png', alt: 'Joy\'s Desk inbox and generated reports' },
            { src: 'joyScreenshots/Screenshot%202026-10-05%20215455.png', alt: 'Goals noticed in conversation' },
            { src: 'joyScreenshots/Screenshot%202026-10-05%20215357.png', alt: 'Identity tracking with drift detection' },
            { src: 'joyScreenshots/Screenshot%202026-10-05%20215548.png', alt: 'Roadmaps overview' },
            { src: 'joyScreenshots/Screenshot%202026-10-05%20215653.png', alt: 'Roadmap progress and next tasks' },
            { src: 'joyScreenshots/Screenshot%202026-10-05%20215938.png', alt: 'Joy\'s memory' },
            { src: 'joyScreenshots/Screenshot%202026-10-05%20220018.png', alt: 'Fuel suggestions from browser activity' },
            { src: 'joyScreenshots/Screenshot%202026-10-05%20220103.png', alt: 'Phone book and device control' },
        ],
        links: [],
    },
    {
        id: 'GUARDIAN',
        title: 'Shield-AI',
        kicker: 'Behavioral awareness · Lead Developer',
        hook: 'A privacy-first app that helps people notice patterns and emotional drift in their own behavior.',
        accent: '#66ccff',
        region: [0.0, -0.04, 0.3],
        cover: 'covers/shield.jpg',
        coverAlt: 'Three Shield-AI app screens: sign in, onboarding, and daily insight report',
        tags: ['Kotlin', 'Java', 'Room', 'Firebase', 'TensorFlow', 'PyTorch'],
        facts: [
            ['Role', 'Lead Developer'],
            ['Data', '14 sources, 56 tables'],
            ['Built with', 'Kotlin, Room, Firebase, TensorFlow, PyTorch'],
            ['Platform', 'Android'],
        ],
        intro: 'A privacy-first app that looks at how someone actually uses their phone (notifications, app usage, time of day) to surface patterns, emotional drift, and gaps between their goals and their behavior, without asking them to log anything.',
        sections: [
            {
                heading: 'What I built',
                items: [
                    'Privacy-preserving logging: a dual-pipeline logging system (on-device + background processing) capturing notifications, app usage, and temporal behavior signals while minimizing data exposure.',
                    'Custom ML inference: fine-tuned language models combined with rule-based reasoning to classify emotional states, influence tactics, and behavioral patterns in real time.',
                    'Domain-specific classifiers: trained on curated and synthetic datasets (emotion, persuasion techniques, misinformation signals), including label schema design and evaluation loops.',
                    'Data isolation: on-device storage and analysis with strict separation between raw signals and derived insights.',
                    'Coaching layer: turns model outputs into human-readable insights and actionable interventions.',
                    'Backend deployment: services for inference, aggregation, and daily learning jobs, with health checks, logging, and failure handling.',
                ],
            },
        ],
        gallery: [
            { src: 'ShieldAI_screenshot/ShieldAIapp.png', alt: 'Shield-AI sign in', portrait: true },
            { src: 'ShieldAI_screenshot/ShieldAIapp2.png', alt: 'Shield-AI onboarding', portrait: true },
            { src: 'ShieldAI_screenshot/ShieldAIapp3.png', alt: 'Shield-AI home', portrait: true },
            { src: 'ShieldAI_screenshot/ShieldAIapp4.png', alt: 'Shield-AI goals', portrait: true },
            { src: 'ShieldAI_screenshot/ShieldAIapp5.png', alt: 'Shield-AI analyzer', portrait: true },
        ],
        links: [
            { label: 'View source code', href: 'https://github.com/michaelangelo41699/shield-ai', primary: true },
        ],
    },
    {
        id: 'ALEXANDRIA',
        title: 'Alexandria',
        kicker: 'AI study platform · Full-Stack Developer',
        hook: 'Turns raw class materials into personalized quizzes and study tools.',
        accent: '#ffd166',
        region: [0.0, -0.04, -0.3],
        cover: 'covers/alexandria.jpg',
        coverAlt: 'Three Alexandria app screens: home, features, and flashcard studio',
        tags: ['React Native', 'Tamagui', 'FastAPI', 'Redis', 'Tesseract OCR', 'AWS'],
        facts: [
            ['Role', 'Full-Stack Developer'],
            ['Platform', 'iOS and Android'],
            ['Built with', 'React Native, FastAPI, Redis, AWS, Render'],
            ['Status', 'Deployed'],
        ],
        intro: 'A learning platform that turns raw class materials into personalized quizzes and study tools. I designed and deployed it end to end, working across backend reliability, applied machine learning, and mobile UX.',
        sections: [
            {
                heading: 'What I built',
                items: [
                    'Full-stack architecture: a React Native mobile app and a FastAPI backend.',
                    'Scalable AI workflow: background workers and Redis queues handle long-running AI tasks (OCR extraction, quiz generation) without blocking the user.',
                    'Data pipeline integrity: parses unstructured class content into structured questions (multiple choice, true/false, open-ended) with validation to prevent malformed output.',
                    'Production deployment: API services, workers, storage, and queues in the cloud, with monitoring, timeout handling, and performance tuning.',
                    'Mobile UX: clear feedback loops, retakes, and progress tracking.',
                ],
            },
        ],
        gallery: [
            { src: 'alexandria_screenshot/screenshot1.jpg', alt: 'Alexandria home dashboard', portrait: true },
            { src: 'alexandria_screenshot/screenshot2.jpg', alt: 'Alexandria features', portrait: true },
            { src: 'alexandria_screenshot/screenshot3.jpg', alt: 'Alexandria flashcard studio', portrait: true },
            { src: 'alexandria_screenshot/screenshot4.jpg', alt: 'Ask Alexandria', portrait: true },
        ],
        links: [
            { label: 'View source code', href: 'https://github.com/Alexandria-Learning-Ai/alexandria-frontend', primary: true },
        ],
    },
    {
        id: 'PORTFOLIO',
        title: 'This 3D Portfolio',
        kicker: 'This site · Three.js',
        hook: 'The site you\'re exploring right now, built around a 3D brain.',
        accent: '#b388ff',
        region: [0.0, -0.32, 0.0],
        cover: 'covers/portfolio.jpg',
        coverAlt: 'The portfolio\'s 3D brain',
        tags: ['Three.js', 'CSS2DRenderer', 'ES modules'],
        facts: [
            ['Role', 'Designer and developer'],
            ['Built with', 'Three.js, CSS2DRenderer, ES modules'],
            ['Hosting', 'GitHub Pages'],
        ],
        intro: 'A portfolio built around a 3D brain you can explore. Each section is a camera position, and the projects light up regions of the brain as you browse them.',
        sections: [
            {
                heading: 'How it works',
                items: [
                    'Camera navigation: a custom render loop with smooth camera transitions between sections.',
                    'Real text in 3D: section cards are HTML placed in 3D space with CSS2DRenderer, so they stay readable and searchable.',
                    'Data-driven content: projects live in one module, so adding a project means adding one entry.',
                    'Brain highlights: each project has a glow and a light inside the brain model that fades in when you hover it.',
                ],
            },
        ],
        gallery: [],
        links: [
            { label: 'View source code', href: 'https://github.com/michaelangelo41699/michaelangelo41699.github.io', primary: true },
        ],
        note: 'Brain model: <a href="https://sketchfab.com/3d-models/cyber-brain-ai-5c8bf975736b457eacf9b4b2212f63db" target="_blank" rel="noopener">"Cyber brain AI"</a> by <a href="https://sketchfab.com/3dUVpro" target="_blank" rel="noopener">3dUVpro</a>, licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.',
    },
];

function esc(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export function getProject(id) {
    return PROJECTS.find((p) => p.id === id);
}

// The grid of project cards shown in the Projects section
export function renderDeck() {
    const cards = PROJECTS.map((p) => `
        <button type="button" class="project-card" data-id="${p.id}" style="--accent: ${p.accent}">
            <span class="card-cover"><img src="${p.cover}" alt="" loading="lazy" decoding="async"></span>
            <span class="card-body">
                <span class="card-kicker">${esc(p.kicker)}</span>
                <span class="card-title">${esc(p.title)}</span>
                <span class="card-hook">${esc(p.hook)}</span>
                <span class="card-tags">${p.tags.slice(0, 4).map((t) => `<span>${esc(t)}</span>`).join('')}</span>
                <span class="card-cta">Dive in <span aria-hidden="true">→</span></span>
            </span>
        </button>`).join('');

    return `
        <header class="deck-head">
            <p class="deck-eyebrow">Projects</p>
            <h2 id="deck-title">Things I've built, and the questions behind them</h2>
            <p class="deck-sub">Hover a project to light it up in the brain. Select one to dive in.</p>
        </header>
        <div class="deck-grid">${cards}</div>`;
}

// The full case-study page for one project
export function renderCaseStudy(p) {
    const facts = p.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');

    const sections = p.sections.map((s) => `
        <section>
            <h3>${esc(s.heading)}</h3>
            ${s.text ? `<p>${esc(s.text)}</p>` : ''}
            ${s.items ? `<ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}
        </section>`).join('');

    const gallery = p.gallery.length ? `
        <section class="case-gallery-wrap">
            <h3>Gallery</h3>
            <div class="case-gallery">
                ${p.gallery.map((g) => `
                    <button type="button" class="case-shot${g.portrait ? ' portrait' : ''}" data-full="${g.src}" data-alt="${esc(g.alt)}">
                        <img src="${g.src}" alt="${esc(g.alt)}" loading="lazy" decoding="async">
                    </button>`).join('')}
            </div>
        </section>` : '';

    const links = p.links.length ? `
        <div class="case-links">
            ${p.links.map((l) => `<a class="case-btn${l.primary ? ' primary' : ''}" href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} <span aria-hidden="true">↗</span></a>`).join('')}
        </div>` : '';

    return `
        <article class="case" style="--accent: ${p.accent}">
            <header class="case-hero">
                <img class="case-cover" src="${p.cover}" alt="${esc(p.coverAlt)}">
                <div class="case-hero-text">
                    <p class="case-kicker">${esc(p.kicker)}</p>
                    <h2>${esc(p.title)}</h2>
                    <p class="case-hook">${esc(p.hook)}</p>
                </div>
            </header>
            <dl class="case-facts">${facts}</dl>
            <div class="case-body">
                <p class="case-intro">${esc(p.intro)}</p>
                ${sections}
                ${gallery}
                ${links}
                ${p.note ? `<p class="case-note">${p.note}</p>` : ''}
            </div>
        </article>`;
}
