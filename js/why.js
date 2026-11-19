// js/why.js
// The "Why" page: one idea per screen. As each part scrolls into view the brain
// lights the regions listed in "glow" (project ids from js/projects.js; empty = dim).
// Footnote markers like [1] link to the numbered sources at the bottom.

export const WHY = {
    heading: 'Why I build what I build',
    beats: [
        {
            label: 'The observation',
            glow: [],
            paras: [
                'In 1971 the economist Herbert Simon warned that “a wealth of information creates a poverty of attention.”[3] He was early.',
                'Today, most of the software we use every day is designed to compete for that attention: feeds tuned to keep us scrolling, ads tuned to make us want, content tuned to make us react.',
                'The influence on how we think, feel and spend isn’t new. People in the 1950s absorbed a handful of opinions from the newspaper, too. What’s new is how precise and constant it has become, from the moment we wake up until we put the phone down.'
            ]
        },
        {
            label: 'The asymmetry',
            glow: [],
            paras: [
                'The companies shaping our attention know more about our patterns than we do. They can see when we’re most likely to buy, to react, or to keep scrolling.',
                'We almost never see that data about ourselves. The insight exists, but it points in one direction.'
            ]
        },
        {
            label: 'The evidence that it could point the other way',
            glow: [],
            paras: ['Research suggests that self-awareness is not just a nice idea. It changes behavior:'],
            list: [
                'Simply putting a feeling into words reduces activity in the brain’s alarm center, the amygdala.[1]',
                'Across 122 health interventions, self-monitoring combined with another self-regulation technique was among the most effective ways to change behavior.[2]'
            ],
            after: 'If seeing yourself clearly helps you change, then the data already collected about our lives could become the most powerful self-improvement tool we have, as long as it belongs to the person it describes.'
        },
        {
            label: 'My thesis',
            glow: ['GUARDIAN', 'JOY', 'NEUROMORPHIC'],
            statement: 'Personal data should work for the person it describes.',
            paras: ['With the right tools, the same signals used to influence us can help us understand why we feel angry, what we actually need, and whether our days match the goals we set for ourselves.']
        },
        {
            label: 'How I build toward it',
            glow: ['GUARDIAN', 'JOY', 'NEUROMORPHIC'],
            steps: [
                { name: 'Shield-AI and Guardian', project: 'GUARDIAN', text: 'turned phone behavior into an honest picture of how someone lives compared with their own values, and withhold a result when the evidence is thin.' },
                { name: 'Joy', project: 'JOY', text: 'brings that awareness into everyday life by voice: an assistant that notices the friction between who you are today and who you want to be.' },
                { name: 'My neuromorphic research', project: 'NEUROMORPHIC', text: 'asks how an AI could learn about one person continuously, locally on their own device, without forgetting, so this kind of help never has to live in someone else’s data center.' }
            ]
        },
        {
            label: 'What I’m still working out',
            glow: [],
            paras: ['Self-awareness tools can be misused too, for example by fostering anxiety or dependence. I treat that as a design constraint, not a footnote: privacy by default, people own their data, and the software is honest about what it doesn’t know.']
        },
        {
            label: 'Why it matters to me',
            glow: ['FORGE', 'NEUROMORPHIC', 'JOY', 'GUARDIAN', 'ALEXANDRIA', 'PORTFOLIO'],
            paras: ['I’ve watched people being told what to think, what to buy, and who to be against, my whole life. I’m betting that every person can become better through self-awareness, and that they should own it, not rent it from someone who profits from it.'],
            closing: 'Stop prompting. Start living.'
        }
    ],
    sources: [
        { n: 1, text: 'Lieberman, M. D., et al. (2007). Putting feelings into words: Affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5).', url: 'https://pubmed.ncbi.nlm.nih.gov/17576282/' },
        { n: 2, text: 'Michie, S., et al. (2009). Effective techniques in healthy eating and physical activity interventions: A meta-regression. Health Psychology, 28(6).', url: 'https://pubmed.ncbi.nlm.nih.gov/19916637/' },
        { n: 3, text: 'Simon, H. A. (1971). Designing organizations for an information-rich world. In Computers, Communications, and the Public Interest.', url: 'https://www.Gwern.net/doc/design/1971-simon.pdf' }
    ]
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Turn [1] into a small footnote link
const notes = (s) => esc(s).replace(/\[(\d)\]/g, (m, n) => `<sup><a class="why-fn" href="#why-src-${n}" data-fn="${n}" aria-label="Source ${n}">${n}</a></sup>`);

export function renderWhy() {
    const beats = WHY.beats.map((b, i) => `
        <section class="why-beat${i === WHY.beats.length - 1 ? ' last' : ''}" data-glow="${b.glow.join(',')}">
            <p class="why-label"><span>${String(i + 1).padStart(2, '0')}</span>${esc(b.label)}</p>
            ${b.statement ? `<p class="why-statement">${esc(b.statement)}</p>` : ''}
            ${(b.paras || []).map((p, j) => `<p class="${j === 0 && !b.statement ? 'why-lead' : 'why-text'}">${notes(p)}</p>`).join('')}
            ${b.list ? `<ul class="why-list">${b.list.map((l) => `<li>${notes(l)}</li>`).join('')}</ul>` : ''}
            ${b.after ? `<p class="why-text">${notes(b.after)}</p>` : ''}
            ${b.steps ? `<div class="why-steps">${b.steps.map((s) => `
                <button type="button" class="why-step" data-project="${s.project}">
                    <strong>${esc(s.name)}</strong> <span>${esc(s.text)}</span>
                    <em>Open project &rarr;</em>
                </button>`).join('')}</div>` : ''}
            ${b.closing ? `<p class="why-closing">${esc(b.closing)}</p>` : ''}
        </section>`).join('');

    const sources = WHY.sources.map((s) => `
        <li id="why-src-${s.n}"><a href="${s.url}" target="_blank" rel="noopener">${esc(s.text)}</a></li>`).join('');

    return `
        <div class="why-inner">
            <p class="why-kicker">Why</p>
            <h2 id="why-title" class="why-heading">${esc(WHY.heading)}</h2>
            <p class="why-scroll-hint" aria-hidden="true">Scroll</p>
            ${beats}
            <footer class="why-sources">
                <h3>Sources</h3>
                <ol>${sources}</ol>
            </footer>
        </div>`;
}
