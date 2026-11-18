// js/home.js
// Content for the Home hero. Edit the text here.

export const HOME = {
    kicker: 'Computer Science · Texas A&M University',
    name: 'Michael Gonzalez',
    tagline: 'I build software that helps people notice how they think, feel, and spend their attention.',
    detail: 'From behavioral models that catch when someone drifts from their own goals, to Joy, an AI companion for self-awareness. I’m also researching neuromorphic computing: brain-inspired spiking networks that keep learning without forgetting.',
    status: 'Open to research internships in AI and machine learning',
    // "project" makes the chip open that project and light up the brain on hover
    chips: [
        { label: 'Neuromorphic research', project: 'NEUROMORPHIC' },
        { label: 'Joy, an AI companion', project: 'JOY' },
        { label: 'Software Lead, F.O.R.G.E.', project: 'FORGE' }
    ],
    stats: [
        { value: '2015', label: 'building software since' },
        { value: '100+', label: 'clients served' },
        { value: '6', label: 'projects to explore' }
    ]
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderHome() {
    const chips = HOME.chips.map((c) =>
        `<button type="button" class="home-chip" data-project="${esc(c.project)}">${esc(c.label)}</button>`
    ).join('');
    const stats = HOME.stats.map((s) =>
        `<div class="home-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`
    ).join('');
    return `
        <div class="home-inner">
            <p class="home-kicker home-in">${esc(HOME.kicker)}</p>
            <h1 id="home-title" class="home-name home-in">${esc(HOME.name)}</h1>
            <p class="home-tagline home-in">${esc(HOME.tagline)}</p>
            <p class="home-detail home-in">${esc(HOME.detail)}</p>
            <p class="home-status home-in"><span class="home-dot" aria-hidden="true"></span>${esc(HOME.status)}</p>
            <div class="home-actions home-in">
                <button type="button" class="home-btn primary" data-go="PROJECTS">See my projects</button>
                <button type="button" class="home-btn" data-open="RESUME">Read my resume</button>
                <button type="button" class="home-btn ghost" data-go="CONTACT">Say hello</button>
            </div>
            <div class="home-chips home-in" aria-label="Highlights">${chips}</div>
            <div class="home-stats home-in">${stats}</div>
        </div>`;
}
