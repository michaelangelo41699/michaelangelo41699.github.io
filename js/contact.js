// js/contact.js
// Content for the Contact page. Edit the text here.

export const CONTACT = {
    heading: 'Let’s talk',
    lead: 'I’m always glad to talk about cognitive science, AI, or a project you’re working on.',
    lookingFor: 'Looking for research-focused internships in AI and machine learning',
    email: 'michaelangelo41699@gmail.com',
    links: [
        { label: 'LinkedIn', note: 'Experience and background', url: 'https://www.linkedin.com/in/michael-gonzalez-190321272', icon: 'person' },
        { label: 'GitHub', note: 'Code and repositories', url: 'https://github.com/michaelangelo41699', icon: 'code' }
    ]
};

// Simple generic line icons (24 x 24)
const ICONS = {
    mail: '<path d="M3 6h18v12H3z" fill="none"/><path d="M3 7l9 6 9-6" fill="none"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2" fill="none"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" fill="none"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5" fill="none"/>',
    person: '<circle cx="12" cy="8" r="4" fill="none"/><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" fill="none"/>',
    code: '<path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" fill="none"/>',
    arrow: '<path d="M7 17L17 7M9 7h8v8" fill="none"/>',
    download: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" fill="none"/>'
};

export const icon = (name) =>
    `<svg class="ic" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function renderContact() {
    const links = CONTACT.links.map((l) => `
        <a class="contact-link" href="${esc(l.url)}" target="_blank" rel="noopener">
            <span class="contact-link-icon">${icon(l.icon)}</span>
            <span class="contact-link-text"><strong>${esc(l.label)}</strong><span>${esc(l.note)}</span></span>
            <span class="contact-link-arrow">${icon('arrow')}</span>
        </a>`).join('');

    return `
        <div class="contact-inner">
            <p class="contact-kicker page-in">Contact</p>
            <h2 id="contact-title" class="contact-heading page-in">${esc(CONTACT.heading)}</h2>
            <p class="contact-lead page-in">${esc(CONTACT.lead)}</p>
            <p class="home-status page-in"><span class="home-dot" aria-hidden="true"></span>${esc(CONTACT.lookingFor)}</p>

            <div class="email-box page-in">
                <span class="email-label">Email</span>
                <span class="email-address">${esc(CONTACT.email)}</span>
                <div class="email-actions">
                    <button type="button" class="home-btn primary copy-email">${icon('copy')}<span>Copy email</span></button>
                    <a class="home-btn" href="mailto:${esc(CONTACT.email)}">${icon('mail')}<span>Open in mail app</span></a>
                </div>
            </div>

            <div class="contact-links page-in">${links}</div>
            <p class="copy-status" role="status" aria-live="polite"></p>
        </div>`;
}

// Copy text, with a fallback for browsers that block the clipboard API
export async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (e) {
        const t = document.createElement('textarea');
        t.value = text;
        t.setAttribute('readonly', '');
        t.style.position = 'fixed';
        t.style.opacity = '0';
        document.body.appendChild(t);
        t.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
        t.remove();
        return ok;
    }
}
