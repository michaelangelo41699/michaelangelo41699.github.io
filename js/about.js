// js/about.js
// Content for the About page. Edit the text here.
//
// Timeline entries light up the brain as they scroll into view.
// "glow" is a project id from js/projects.js, or an id from EXTRA_REGIONS below.
// "project" (optional) adds a button that opens that project's page.

export const EXTRA_REGIONS = [
    // Parts of your story that are not a project in the deck
    { id: 'MASTERCRAFT', accent: '#ff6b6b', region: [0.0, -0.2, -0.12] }
];

export const ABOUT = {
    quote: 'I’m curious about why people do what they do, and whether technology can help us see ourselves more clearly instead of just capturing our attention.',
    quoteTail: 'That question shapes most of what I build.',
    intro: 'Lately it has led me to the brain itself. I’m researching how spiking neural networks can learn new things without overwriting old memories, with the goal of running that work on neuromorphic hardware.',

    timeline: [
        {
            when: '2015 – 2017',
            title: 'Founded MasterCraftCode',
            role: 'Founder',
            text: 'A drag-and-drop tool that generated mobile apps for non-technical clients. I led development, testing and deployment, and delivered it to 100+ clients.',
            glow: 'MASTERCRAFT'
        },
        {
            when: '2022',
            title: 'Shield-AI',
            role: 'Lead Developer \u00b7 Behavioral awareness',
            text: 'A privacy-first app that helps people notice patterns and emotional drift in their own behavior.',
            glow: 'GUARDIAN',
            project: 'GUARDIAN'
        },
        {
            when: '2024',
            title: 'Joy',
            role: 'Lead Developer \u00b7 Grew out of Shield-AI',
            text: 'An assistant that remembers context, tracks goals and identity drift, and can act for you by voice.',
            glow: 'JOY',
            project: 'JOY'
        },
        {
            when: '2026 – present',
            title: 'Neuromorphic memory research',
            role: 'Independent research',
            text: 'A brain-inspired spiking network that learns new tasks without overwriting old ones.',
            glow: 'NEUROMORPHIC',
            project: 'NEUROMORPHIC'
        },
        {
            when: 'Now',
            title: 'F.O.R.G.E. filament winder',
            role: 'Software Lead',
            text: 'A student team building a carbon fiber filament winder from scratch. I lead the software team.',
            glow: 'FORGE',
            project: 'FORGE'
        }
    ],

    // "projects" lists which project pages use the tool; clicking the chip lights them up
    skills: [
        {
            group: 'AI & ML',
            items: [
                { name: 'TensorFlow', projects: ['GUARDIAN'] },
                { name: 'PyTorch', projects: ['NEUROMORPHIC', 'GUARDIAN'] },
                { name: 'snnTorch', projects: [] },
                { name: 'Spiking neural networks', projects: ['NEUROMORPHIC'] },
                { name: 'NLP', projects: ['GUARDIAN'] },
                { name: 'Behavioral pattern recognition', projects: ['GUARDIAN'] }
            ]
        },
        {
            group: 'Languages',
            items: [
                { name: 'Python', projects: ['NEUROMORPHIC', 'ALEXANDRIA'] },
                { name: 'Java', projects: ['GUARDIAN'] },
                { name: 'JavaScript', projects: ['FORGE', 'PORTFOLIO'] },
                { name: 'TypeScript', projects: [] },
                { name: 'SQL', projects: [] }
            ]
        },
        {
            group: 'Apps & web',
            items: [
                { name: 'React Native', projects: ['JOY', 'ALEXANDRIA'] },
                { name: 'Android', projects: ['GUARDIAN'] },
                { name: 'React', projects: ['JOY'] },
                { name: 'Three.js', projects: ['FORGE', 'PORTFOLIO'] }
            ]
        },
        {
            group: 'Cloud',
            items: [
                { name: 'AWS', projects: ['ALEXANDRIA'] },
                { name: 'Firebase', projects: ['GUARDIAN'] },
                { name: 'FastAPI', projects: ['ALEXANDRIA'] },
                { name: 'Redis', projects: ['ALEXANDRIA'] }
            ]
        }
    ]
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function renderAbout(projectTitle) {
    const timeline = ABOUT.timeline.map((t, i) => `
        <li class="tl-item" data-glow="${esc(t.glow)}" data-index="${i}">
            <span class="tl-dot" aria-hidden="true"></span>
            <p class="tl-when">${esc(t.when)}</p>
            <h3 class="tl-title">${esc(t.title)}</h3>
            <p class="tl-role">${esc(t.role)}</p>
            <p class="tl-text">${esc(t.text)}</p>
            ${t.project ? `<button type="button" class="tl-open" data-project="${esc(t.project)}">Open project &rarr;</button>` : ''}
        </li>`).join('');

    const skills = ABOUT.skills.map((g) => `
        <div class="skill-group">
            <h4>${esc(g.group)}</h4>
            <div class="skill-chips">
                ${g.items.map((s) => `<button type="button" class="skill-chip${s.projects.length ? '' : ' plain'}" data-projects="${esc(s.projects.join(','))}" aria-pressed="false">${esc(s.name)}</button>`).join('')}
            </div>
        </div>`).join('');

    return `
        <div class="about-inner">
            <h2 id="about-title" class="about-heading">About me</h2>
            <blockquote class="about-quote">
                <p>${esc(ABOUT.quote)}</p>
                <footer>${esc(ABOUT.quoteTail)}</footer>
            </blockquote>
            <p class="about-intro">${esc(ABOUT.intro)}</p>

            <h3 class="about-sub">The path so far</h3>
            <ol class="timeline">${timeline}</ol>

            <h3 class="about-sub">Tools I work with</h3>
            <p class="about-hint">Pick a tool to see which projects use it.</p>
            <div class="skills">${skills}</div>
            <div class="skill-used" aria-live="polite"></div>

            <div class="about-actions">
                <button type="button" class="home-btn primary" data-open="RESUME">Read my resume</button>
                <button type="button" class="home-btn" data-go="PROJECTS">See my projects</button>
            </div>
        </div>`;
}
