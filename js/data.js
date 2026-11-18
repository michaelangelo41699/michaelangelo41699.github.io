import * as THREE from 'three';

// --- Global Constants ---
const IS_PHONE = typeof window !== 'undefined' && window.innerWidth <= 768;
export const LERP_FACTOR = 0.08; 
export const BRAIN_SCALE = 1.0; 

// --- DETAILED PROJECT DESCRIPTIONS ---

// 1. Full HTML for the Resume 
const RESUME_HTML = `
    <div class="resume-container">
        <header>
            <h1>MICHAEL GONZALEZ TEVENAL <span style="font-size: 0.8em; color: #99ccff;">/ McFly</span></h1>
            <h2>Computer Science Student &amp; Developer · Texas A&amp;M University</h2>
            <div class="contact-info">
                <span>Aguadilla, Puerto Rico</span>
                <span>| Email: <a href="mailto:michaelangelo41699@gmail.com">michaelangelo41699@gmail.com</a></span>
                <span>| GitHub: <a href="https://github.com/michaelangelo41699" target="_blank">github.com/michaelangelo41699</a></span>
                <span>| LinkedIn: <a href="https://www.linkedin.com/in/michael-gonzalez-190321272" target="_blank">linkedin.com/in/michael-gonzalez-190321272</a></span>
            </div>
        </header>

        <section class="profile">
            <h3>PROFILE</h3>
            <p>Computer Science student transferring to Texas A&amp;M with two years of completed coursework and a 4.0 GPA. I build technology that helps people become more aware of their own behavior and make better decisions, using behavioral insight rather than censorship to push back against manipulation and misinformation. I've designed and deployed end-to-end systems that combine NLP models, mobile interfaces, and cloud infrastructure across 14+ behavioral data sources. I'm looking for research-focused internships in AI, machine learning, and full-stack development. Bilingual in English and Spanish.</p>
        </section>

        <section class="education">
            <h3>EDUCATION</h3>
            <div class="entry">
                <h4>Texas A&amp;M University <span style="font-weight: normal; color: #aaa;">(Expected Dec 2028)</span></h4>
                <p>General Engineering (Transfer); pursuing a Bachelor of Science in Computer Science</p>
            </div>
            <div class="entry">
                <h4>Universidad Interamericana de Puerto Rico – Aguadilla <span style="font-weight: normal; color: #aaa;">(Transferred 2025)</span></h4>
                <p>Bachelor of Science in Computer Science (transferred after junior year) · GPA: 4.0</p>
                <p>Honors: Dean’s List Academic Excellence Award (2024–2025), Academic Excellence Certificate</p>
                <p>Relevant Coursework: Object-Oriented Programming (Java), Database Systems, Web Development (HTML, CSS, JavaScript), User Experience &amp; Interface Design, Systems Analysis &amp; Design, Computer Science Fundamentals</p>
            </div>
        </section>

        <section class="technical-skills">
            <h3>TECHNICAL SKILLS</h3>
            <div class="skills-grid">
                <div>
                    <h4>AI &amp; Machine Learning</h4>
                    <p>TensorFlow, PyTorch, snnTorch &amp; spiking neural networks, Natural Language Processing (emotion, mood &amp; persuasion detection), Predictive Modeling, Behavioral Pattern Recognition, Large Language Models &amp; prompt engineering, Dataset preparation &amp; model evaluation</p>
                </div>
                <div>
                    <h4>Core Languages</h4>
                    <p>Python, Java, JavaScript, TypeScript, SQL</p>
                </div>
                <div>
                    <h4>Cloud &amp; Tools</h4>
                    <p>AWS (S3, Lambda, EC2), Firebase, FastAPI, REST APIs, Git, Linux, RunPod &amp; Google Colab (GPU training and inference), Postman, Blender</p>
                </div>
                <div>
                    <h4>Mobile &amp; UI Development</h4>
                    <p>React Native, Android Studio (Kotlin/Java), XML, User Interface Design, Three.js</p>
                </div>
            </div>
        </section>
        
        <section class="projects">
            <h3>PROJECTS</h3>

            <div class="entry">
                <h4>Neuromorphic Memory: Continual Learning in Spiking Neural Networks <span style="font-weight: normal; color: #aaa;">(Independent Research, 2026–present)</span></h4>
                <ul>
                    <li>Implemented e-prop, a local, biologically plausible learning rule, by hand in PyTorch and verified it against backpropagation through time (exact match in the reference case).</li>
                    <li>Reimplemented astrocyte-modulated plasticity (AGMP; Dong &amp; He, 2026) from its published equations and benchmarked class-incremental Split N-MNIST across multiple seeds.</li>
                    <li>Built Benna–Fusi cascade synapses that forget as a power law (log-log slope −0.50), plus a GPU experiment pipeline on Google Colab with reproducibility logging.</li>
                    <li>Found that a homeostatic firing-rate rule cut silent neurons from about half the layer to under 10% and raised cued accuracy from 0.87 to 0.95 over 3 seeds.</li>
                </ul>
            </div>

            <div class="entry">
                <h4>Shield-AI: Cognitive Behavioral State Monitoring System <span style="font-weight: normal; color: #aaa;">(Lead Developer)</span></h4>
                <ul>
                    <li>Engineered a dual-pipeline logging architecture using Java/Kotlin and Room DB for local data collection and Firebase for cloud sync, ingesting behavioral data from 14 sources into 56 normalized tables across 16 processing pipelines.</li>
                    <li>Implemented NLP models in TensorFlow and PyTorch to classify mood and detect behavioral deviations in real time, turning raw activity, task completion, and self-report data into concrete behavioral facts.</li>
                    <li>Developed a two-level daily scoring model that measures how well observed behavior aligns with a person's own values, plus an independent drift signal that detects sustained friction against their baseline.</li>
                    <li>Built a working prototype validated on a real-world account, with scoring designed to withhold a result when the evidence is insufficient rather than fabricate one.</li>
                </ul>
            </div>
            
            <div class="entry">
                <h4>Alexandria: Intelligent Education &amp; Assessment Platform <span style="font-weight: normal; color: #aaa;">(Full-Stack Developer)</span></h4>
                <ul>
                    <li>Developed a cross-platform mobile app in <strong>React Native</strong> focused on intuitive UI, feedback loops, and progress tracking.</li>
                    <li>Built a <strong>FastAPI</strong> backend integrated with Tesseract OCR that turns PDF and image inputs into quizzes automatically, with <strong>Redis</strong> queues handling long-running AI tasks.</li>
                    <li>Implemented cloud-connected workflows for personalized study analytics and user management.</li>
                    <li>Deployed a fully functional application that automates data processing and delivers immediate performance feedback.</li>
                </ul>
            </div>
            
            <div class="entry">
                <h4>3D Visualization &amp; Modeling (Blender)</h4>
                <ul>
                    <li>Created and manipulated 3D assets for visualization and conceptual design.</li>
                    <li>Gained experience in spatial reasoning, lighting, rendering, and asset workflow.</li>
                </ul>
            </div>
        </section>

        <section class="experience">
            <h3>EXPERIENCE</h3>
            <div class="entry">
                <h4>Founder, MasterCraftCode <span style="font-weight: normal; color: #aaa;">(2015 – 2017)</span></h4>
                <ul>
                    <li>Founded and led development of a SaaS platform with a drag-and-drop interface that automated mobile app generation for non-technical clients.</li>
                    <li>Managed development, testing, and client deployment, delivering digital tools to 100+ clients.</li>
                </ul>
            </div>
        </section>
        
        <section class="languages">
            <h3>LANGUAGES</h3>
            <p>English: Full professional proficiency · Spanish: Native / bilingual</p>
        </section>

        <section class="interests">
            <h3>INTERESTS</h3>
            <p>Human-centered AI, Neuromorphic computing, Cognitive science, Digital ethics &amp; misinformation, Behavioral psychology, Product design, Emerging technologies</p>
        </section>
    </div>
`;


// Project content lives in js/projects.js.

// --- Detail pages opened outside the project deck ---
export const PROJECT_DETAILS = {
    RESUME: RESUME_HTML,
};


// --- Camera Positions and Content Definitions (These are correct based on your last input) ---
export const CAMERA_POSITIONS = {
    
    // --- OVERVIEW ---
    OVERVIEW: {
        // The brain sits to the right on wide screens, lower on phones, to leave room for the Home hero (js/home.js)
        pos: new THREE.Vector3(IS_PHONE ? 0 : -0.6, IS_PHONE ? 0.5 : 0, IS_PHONE ? 2.8 : 2),
        target: new THREE.Vector3(IS_PHONE ? 0 : -0.6, IS_PHONE ? 0.5 : 0, 0),
        contentPos: new THREE.Vector3(0, 0, 0),
        offset: ['-100%', '-50%'],
        html: ''
    },
    
    // --- ABOUT (Updated Button) ---
    ABOUT: {
        pos: new THREE.Vector3(2, 2, 0), 
        target: new THREE.Vector3(0.5, 0.5, 0),
        contentPos: new THREE.Vector3(-3, -3, 0),
        offset: ['100%', '-50%'], 
        html: `
            <h2>About me</h2>
            <p>I'm curious about why people do what they do, and whether technology can help us see ourselves more clearly instead of just capturing our attention. That question shapes most of what I build.</p>
            <p>Lately it has led me to the brain itself. I'm researching how spiking neural networks can learn new things without overwriting old memories, with the goal of running that work on neuromorphic hardware.</p>
            <p>I've been building software since 2015, when I founded MasterCraftCode, a drag-and-drop tool that generated mobile apps for 100+ non-technical clients.</p>
            <p>Tools I work with:</p>
            <ul style="list-style: square; margin-left: 20px;">
                <li>AI &amp; ML: TensorFlow, PyTorch, snnTorch, NLP, spiking neural networks, behavioral pattern recognition.</li>
                <li>Languages: Python, Java, JavaScript, TypeScript, SQL.</li>
                <li>Apps &amp; web: React Native, Android, React, Three.js.</li>
                <li>Cloud: AWS, Firebase, FastAPI, Redis.</li>
            </ul>
            <div class="contact-buttons">
                <button onclick="openProject('RESUME')">Read my resume</button>
            </div>
        `
    },
    
    // --- PROJECTS ---
    // The project deck (js/projects.js) is shown instead of a floating card here.
    PROJECTS: {
        pos: new THREE.Vector3(-2.9, -0.9, 1.4),
        target: new THREE.Vector3(-0.4, -0.45, 1.4),
        contentPos: new THREE.Vector3(4.5, 2, 0),
        offset: ['-100%', '-50%'],
        html: ''
    },
    
    // --- CONTACT (Unchanged) ---
    CONTACT: {
        pos: new THREE.Vector3(-3.2, 0, 0),
        target: new THREE.Vector3(0, -0.5, 0),
        contentPos: new THREE.Vector3(3, 0, 0),
        offset: ['-100%', '-50%'],
        html: `
            <h2>Contact</h2>
            <p>I'm always glad to talk about cognitive science, AI, or a project you're working on.</p>
            <p>Email: <a href="mailto:michaelangelo41699@gmail.com" style="color: #99ccff;">michaelangelo41699@gmail.com</a></p>
            <p>Find me online:</p>
            <ul style="list-style: none; padding: 0;">
                <li><a href="https://www.linkedin.com/in/michael-gonzalez-190321272" target="_blank" style="color: #99ccff;">LinkedIn</a></li>
                <li><a href="https://github.com/michaelangelo41699" target="_blank" style="color: #99ccff;">GitHub</a></li>
            </ul>
        `
    }
};
