// js/resume.js
// Resume content, used by the resume page on the site and by the printable PDF.
// Text may contain simple HTML entities (&amp;). "project" links an entry to its project page.

export const RESUME_PDF = 'resume/Michael-Gonzalez-Resume.pdf';

export const RESUME = {
    name: 'Michael Gonzalez Tevenal',
    alias: 'McFly',
    title: 'Computer Science Student &amp; Developer · Texas A&amp;M University',
    location: 'Aguadilla, Puerto Rico',
    email: 'michaelangelo41699@gmail.com',
    github: { label: 'github.com/michaelangelo41699', url: 'https://github.com/michaelangelo41699' },
    linkedin: { label: 'linkedin.com/in/michael-gonzalez-190321272', url: 'https://www.linkedin.com/in/michael-gonzalez-190321272' },

    profile: 'Computer Science student transferring to Texas A&amp;M with two years of completed coursework and a 4.0 GPA. I build technology that helps people become more aware of their own behavior and make better decisions, using behavioral insight rather than censorship to push back against manipulation and misinformation. I\'ve designed and deployed end-to-end systems that combine NLP models, mobile interfaces, and cloud infrastructure across 14+ behavioral data sources. I\'m looking for research-focused internships in AI, machine learning, and full-stack development. Bilingual in English and Spanish.',

    research: [
        {
            title: 'Neuromorphic Memory: Continual Learning in Spiking Neural Networks',
            meta: 'Independent Research · 2026 – present',
            project: 'NEUROMORPHIC',
            bullets: [
                'Implemented e-prop, a local, biologically plausible learning rule, by hand in PyTorch and verified it against backpropagation through time (exact match in the reference case).',
                'Reimplemented astrocyte-modulated plasticity (AGMP; Dong &amp; He, 2026) from its published equations and benchmarked class-incremental Split N-MNIST across multiple seeds.',
                'Built Benna–Fusi cascade synapses that forget as a power law (log-log slope −0.50), plus a GPU experiment pipeline on Google Colab with reproducibility logging.',
                'Found that a homeostatic firing-rate rule cut silent neurons from about half the layer to under 10% and raised cued accuracy from 0.87 to 0.95 over 3 seeds.'
            ]
        }
    ],

    projects: [
        {
            title: 'F.O.R.G.E.: Carbon Fiber Filament Winder',
            meta: 'Software Lead · 2026 – present',
            project: 'FORGE',
            bullets: [
                'Lead a software team of 2 developers on a student-built filament winder, working alongside mechanical, electrical and materials &amp; research teams.',
                'Built the team\'s project website with an interactive 3D Parts Explorer and a winding-pattern simulator in Three.js.',
                'Reviewed the open-source Cyclone winding software (TypeScript, G-code for Marlin) and documented the gaps to close before the machine\'s first wind.'
            ]
        },
        {
            title: 'Shield-AI: Cognitive Behavioral State Monitoring System',
            meta: 'Lead Developer · 2022',
            project: 'GUARDIAN',
            bullets: [
                'Engineered a dual-pipeline logging architecture using Java/Kotlin and Room DB for local data collection and Firebase for cloud sync, ingesting behavioral data from 14 sources into 56 normalized tables across 16 processing pipelines.',
                'Implemented NLP models in TensorFlow and PyTorch to classify mood and detect behavioral deviations in real time, turning raw activity, task completion, and self-report data into concrete behavioral facts.',
                'Developed a two-level daily scoring model that measures how well observed behavior aligns with a person\'s own values, plus an independent drift signal that detects sustained friction against their baseline.',
                'Built a working prototype validated on a real-world account, with scoring designed to withhold a result when the evidence is insufficient rather than fabricate one.'
            ]
        },
        {
            title: 'Alexandria: Intelligent Education &amp; Assessment Platform',
            meta: 'Full-Stack Developer',
            project: 'ALEXANDRIA',
            bullets: [
                'Developed a cross-platform mobile app in React Native focused on intuitive UI, feedback loops, and progress tracking.',
                'Built a FastAPI backend integrated with Tesseract OCR that turns PDF and image inputs into quizzes automatically, with Redis queues handling long-running AI tasks.',
                'Implemented cloud-connected workflows for personalized study analytics and user management.',
                'Deployed a fully functional application that automates data processing and delivers immediate performance feedback.'
            ]
        },
        {
            title: '3D Visualization &amp; Modeling (Blender)',
            meta: '',
            bullets: [
                'Created and manipulated 3D assets for visualization and conceptual design.',
                'Gained experience in spatial reasoning, lighting, rendering, and asset workflow.'
            ]
        }
    ],

    experience: [
        {
            title: 'Founder, MasterCraftCode',
            meta: '2015 – 2017',
            bullets: [
                'Founded and led development of a SaaS platform with a drag-and-drop interface that automated mobile app generation for non-technical clients.',
                'Managed development, testing, and client deployment, delivering digital tools to 100+ clients.'
            ]
        }
    ],

    education: [
        {
            title: 'Texas A&amp;M University',
            meta: 'Expected Dec 2028',
            lines: ['General Engineering (Transfer); pursuing a Bachelor of Science in Computer Science']
        },
        {
            title: 'Universidad Interamericana de Puerto Rico – Aguadilla',
            meta: 'Transferred 2025',
            lines: [
                'Bachelor of Science in Computer Science (transferred after junior year) · GPA: 4.0',
                'Honors: Dean’s List Academic Excellence Award (2024–2025), Academic Excellence Certificate',
                'Relevant Coursework: Object-Oriented Programming (Java), Database Systems, Web Development (HTML, CSS, JavaScript), User Experience &amp; Interface Design, Systems Analysis &amp; Design, Computer Science Fundamentals'
            ]
        }
    ],

    skills: [
        { group: 'AI &amp; Machine Learning', items: ['TensorFlow', 'PyTorch', 'snnTorch &amp; spiking neural networks', 'Natural Language Processing (emotion, mood &amp; persuasion detection)', 'Predictive Modeling', 'Behavioral Pattern Recognition', 'Large Language Models &amp; prompt engineering', 'Dataset preparation &amp; model evaluation'] },
        { group: 'Core Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
        { group: 'Cloud &amp; Tools', items: ['AWS (S3, Lambda, EC2)', 'Firebase', 'FastAPI', 'REST APIs', 'Git', 'Linux', 'RunPod &amp; Google Colab (GPU training and inference)', 'Postman', 'Blender'] },
        { group: 'Mobile &amp; UI Development', items: ['React Native', 'Android Studio (Kotlin/Java)', 'XML', 'User Interface Design', 'Three.js'] }
    ],

    languages: 'English: Full professional proficiency · Spanish: Native / bilingual',
    interests: 'Human-centered AI, Neuromorphic computing, Cognitive science, Digital ethics &amp; misinformation, Behavioral psychology, Product design, Emerging technologies'
};

const R = RESUME;

function entries(list, withLinks) {
    return list.map((e) => `
        <div class="cv-entry">
            <div class="cv-entry-head">
                <h4>${e.title}</h4>
                ${e.meta ? `<span class="cv-meta">${e.meta}</span>` : ''}
            </div>
            <ul>${e.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
            ${withLinks && e.project ? `<button type="button" class="cv-open" data-project="${e.project}">Open project &rarr;</button>` : ''}
        </div>`).join('');
}

// The resume page inside the site
export function renderResume(icon) {
    const sections = [['cv-research', 'Research'], ['cv-projects', 'Projects'], ['cv-experience', 'Experience'], ['cv-education', 'Education'], ['cv-skills', 'Skills']];
    return `
    <article class="cv">
        <header class="cv-head">
            <div class="cv-id">
                <p class="cv-kicker">Resume</p>
                <h2>${R.name} <span class="cv-alias">/ ${R.alias}</span></h2>
                <p class="cv-title">${R.title}</p>
            </div>
            <div class="cv-actions">
                <a class="home-btn primary" href="${RESUME_PDF}" download>${icon('download')}<span>Download PDF</span></a>
                <a class="home-btn" href="mailto:${R.email}">${icon('mail')}<span>Email</span></a>
            </div>
            <nav class="cv-jump" aria-label="Resume sections">
                ${sections.map(([id, label]) => `<button type="button" data-jump="${id}">${label}</button>`).join('')}
            </nav>
        </header>

        <div class="cv-grid">
            <div class="cv-main">
                <section class="cv-section">
                    <h3>Profile</h3>
                    <p class="cv-profile">${R.profile}</p>
                </section>
                <section class="cv-section" id="cv-research"><h3>Research</h3>${entries(R.research, true)}</section>
                <section class="cv-section" id="cv-projects"><h3>Projects</h3>${entries(R.projects, true)}</section>
                <section class="cv-section" id="cv-experience"><h3>Experience</h3>${entries(R.experience, true)}</section>
            </div>

            <aside class="cv-side">
                <section class="cv-card">
                    <h3>Contact</h3>
                    <ul class="cv-contact">
                        <li>${R.location}</li>
                        <li><a href="mailto:${R.email}">${R.email}</a></li>
                        <li><a href="${R.github.url}" target="_blank" rel="noopener">${R.github.label}</a></li>
                        <li><a href="${R.linkedin.url}" target="_blank" rel="noopener">LinkedIn profile</a></li>
                    </ul>
                </section>
                <section class="cv-card" id="cv-education">
                    <h3>Education</h3>
                    ${R.education.map((e) => `
                        <div class="cv-edu">
                            <h4>${e.title}</h4>
                            <span class="cv-meta">${e.meta}</span>
                            ${e.lines.map((l) => `<p>${l}</p>`).join('')}
                        </div>`).join('')}
                </section>
                <section class="cv-card" id="cv-skills">
                    <h3>Skills</h3>
                    ${R.skills.map((g) => `
                        <h4>${g.group}</h4>
                        <div class="cv-chips">${g.items.map((i) => `<span>${i}</span>`).join('')}</div>`).join('')}
                </section>
                <section class="cv-card">
                    <h3>Languages</h3>
                    <p>${R.languages}</p>
                    <h3 class="cv-gap">Interests</h3>
                    <p>${R.interests}</p>
                </section>
            </aside>
        </div>
    </article>`;
}

// A complete, print-ready document (used to make the PDF)
export function renderResumeDocument() {
    const list = (items) => items.map((e) => `
        <div class="e">
            <div class="h"><b>${e.title}</b>${e.meta ? `<span>${e.meta}</span>` : ''}</div>
            <ul>${e.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
        </div>`).join('');
    return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>Michael Gonzalez – Resume</title>
<style>
  @page { size: Letter; margin: 0.5in 0.55in; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 9.6pt; line-height: 1.35; color: #1a1a1a; margin: 0; }
  header { border-bottom: 2px solid #1f5fa8; padding-bottom: 6px; margin-bottom: 8px; }
  h1 { font-size: 20pt; margin: 0; letter-spacing: 0.5px; color: #10243f; }
  h1 small { font-size: 11pt; color: #1f5fa8; font-weight: normal; }
  .sub { margin: 2px 0 4px; font-size: 10.5pt; color: #333; }
  .contact { font-size: 9pt; color: #333; }
  .contact a { color: #1f5fa8; text-decoration: none; }
  h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: 1.2px; color: #1f5fa8; border-bottom: 1px solid #c9d6e6; margin: 10px 0 5px; padding-bottom: 2px; }
  p { margin: 2px 0; }
  .e { margin-bottom: 6px; break-inside: avoid; }
  .h { display: flex; justify-content: space-between; gap: 12px; }
  .h span { color: #555; white-space: nowrap; }
  ul { margin: 2px 0 0 16px; padding: 0; }
  li { margin: 1px 0; }
  .skills p { margin: 1px 0; }
</style></head><body>
<header>
  <h1>${R.name.toUpperCase()} <small>/ ${R.alias}</small></h1>
  <p class="sub">${R.title}</p>
  <p class="contact">${R.location} · <a href="mailto:${R.email}">${R.email}</a> · <a href="${R.github.url}">${R.github.label}</a> · <a href="${R.linkedin.url}">${R.linkedin.label}</a></p>
</header>
<h2>Profile</h2><p>${R.profile}</p>
<h2>Education</h2>
${R.education.map((e) => `<div class="e"><div class="h"><b>${e.title}</b><span>${e.meta}</span></div>${e.lines.map((l) => `<p>${l}</p>`).join('')}</div>`).join('')}
<h2>Technical Skills</h2>
<div class="skills">${R.skills.map((g) => `<p><b>${g.group}:</b> ${g.items.join(', ')}</p>`).join('')}</div>
<h2>Research</h2>${list(R.research)}
<h2>Projects</h2>${list(R.projects)}
<h2>Experience</h2>${list(R.experience)}
<h2>Languages</h2><p>${R.languages}</p>
<h2>Interests</h2><p>${R.interests}</p>
</body></html>`;
}
