import * as THREE from 'three';

// --- Global Constants ---
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
                    <p>TensorFlow, PyTorch, Natural Language Processing (emotion, mood &amp; persuasion detection), Predictive Modeling, Behavioral Pattern Recognition, Large Language Models &amp; prompt engineering, Dataset preparation &amp; model evaluation</p>
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
            <p>Human-centered AI, Cognitive science, Digital ethics &amp; misinformation, Behavioral psychology, Product design, Emerging technologies</p>
        </section>
    </div>
`;


// 2. Full HTML for Alexandria (Restored)
const ALEXANDRIA_FULL_HTML = `
    <h2>Alexandria: AI-Powered Study &amp; Assessment Platform</h2>
    <p>A learning platform that turns raw class materials into personalized quizzes and study tools. I designed and deployed it end to end, which meant working across backend reliability, applied machine learning, and mobile UX.</p>
    
    <h3>What I built:</h3>
    <ul>
        <li>Full-Stack Architecture: Designed system using React Native (Mobile) and a high-performance FastAPI backend.</li>
        <li>Scalable AI Workflow: Architected scalable backend services with background workers and Redis queues to handle long-running AI tasks (OCR extraction, quiz generation) without blocking user experience.</li>
        <li>Data Pipeline Integrity: Implemented robust data pipelines for parsing unstructured academic content into structured question formats (MCQ, true/false, open-ended) with validation layers to prevent malformed outputs.</li>
        <li>Production Deployment: Deployed and managed cloud infrastructure (API services, workers, storage, queues), including monitoring, timeout mitigation, and performance tuning under real usage constraints.</li>
        <li>Mobile UX: Built a mobile-first user experience emphasizing clarity, feedback loops, retakes, and progress tracking—bridging AI systems with human-centered design.</li>
    </ul>

    <div class="screenshot-container">
    <img src="../alexandria_screenshot/screenshot1.jpg" alt="Alexandria main dashboard">
    <img src="../alexandria_screenshot/screenshot2.jpg" alt="Alexandria quiz generation">
    <img src="../alexandria_screenshot/screenshot3.jpg" alt="Alexandria mobile assessment">
    <img src="../alexandria_screenshot/screenshot4.jpg" alt="Ask Alexandria Screenshot">
    </div>

    <br>
    <div class="contact-buttons">
        <button onclick="window.open('https://github.com/Alexandria-Learning-Ai/alexandria-frontend', '_blank')">View Source Code</button>
    </div>
`;

// 3. Full HTML for Guardian (Restored)
const GUARDIAN_FULL_HTML = `
    <h2>Shield-AI: Privacy-First Behavioral Awareness &amp; Coaching</h2>
    <p>A privacy-first app that looks at how someone actually uses their phone (notifications, app usage, time of day) to surface patterns, emotional drift, and gaps between their goals and their behavior, without asking them to log anything.</p>
    
    <h3>What I built:</h3>
    <ul>
        <li>Privacy-Preserving Logging: Architected a dual-pipeline logging system (on-device + background processing) capturing notifications, app usage, and temporal behavior signals while minimizing data exposure.</li>
        <li>Custom ML Inference: Built a custom ML inference pipeline combining fine-tuned language models and rule-based reasoning to classify emotional states, influence tactics, and behavioral patterns in real time.</li>
        <li>Domain-Specific Classifiers: Designed and trained domain-specific classifiers using curated and synthetic datasets (emotion detection, persuasion techniques, misinformation signals), including label schema design and evaluation loops.</li>
        <li>Data Isolation: Implemented on-device data storage and analysis with strict separation between raw signals and derived insights, prioritizing user privacy and explainability.</li>
        <li>Coaching Layer: Developed a coaching layer that translates abstract model outputs into human-readable insights and actionable interventions, closing the loop between inference and behavior change.</li>
        <li>Backend Deployment: Deployed backend services supporting inference, aggregation, and daily learning jobs, with health checks, logging, and failure handling.</li>
    </ul>

    <div class="screenshot-container">
    <img src="../ShieldAI_screenshot/ShieldAIapp.png" alt="Shield Log In">
    <img src="../ShieldAI_screenshot/ShieldAIapp2.png" alt="Shield AI Onboarding">
    <img src="../ShieldAI_screenshot/ShieldAIapp3.png" alt="Shield AI Home">
    <img src="../ShieldAI_screenshot/ShieldAIapp4.png" alt="Shield AI Goal">
    <img src="../ShieldAI_screenshot/ShieldAIapp5.png" alt="Shield AI Analyzer">
    </div>

    <div class="contact-buttons">
        <button onclick="window.open('https://github.com/michaelangelo41699/shield-ai', '_blank')">View Source Code</button>
    </div>
`;

// 4. Full HTML for Joy
const JOY_FULL_HTML = `
    <h2>Joy: An AI Companion for Self-Awareness</h2>
    <p>Joy grew out of Shield-AI. It's a desktop-first assistant that pays attention to what you're working on, remembers context, and points out when you're drifting from the person you said you want to be. It can also act for you through voice, the browser, phone calls, and smart devices, across desktop, mobile, and the cloud from a single backend.</p>
    
    <h3>What I built:</h3>
    <ul>
        <li>Multi-Client Architecture: Electron + React desktop app, React Native (Expo) mobile app, and a browser extension, all synced through a Cloudflare Workers backend with Durable Objects (one per user) and a D1 database.</li>
        <li>Long-Term Memory: Joy builds a categorized memory (preferences, habits, people, goals) from conversation and observed behavior, with search, manual editing, and cloud sync.</li>
        <li>Goals & Identity Drift: Detects objectives mentioned in conversation for one-click promotion, and tracks identity goals ("be a patient parent") on an aligned-to-drifting scale with 6-week trend lines.</li>
        <li>Roadmaps: Generates multi-month plans broken into dependent tasks that unlock as earlier steps are completed, with progress tracking and a "what's next" queue.</li>
        <li>Joy's Desk: An inbox of awareness items plus AI-generated research reports, study plans, and data views delivered as cards.</li>
        <li>Behavioral Suggestions: A browser extension feeds activity signals into "Fuel" suggestions the user can accept or reject, which trains future recommendations.</li>
        <li>Voice & Agentic Control: Real-time voice pipeline (AudioWorklet capture → edge VoiceGateway → speech models), a computer-use agent for screenshot-driven desktop control, phone calls to saved contacts, and smart device control.</li>
        <li>Native Performance: Rust (NAPI-RS) module for low-latency audio playback and image hashing inside Electron.</li>
    </ul>

    <div class="screenshot-container wide">
    <img src="../joyScreenshots/Screenshot%202026-10-05%20215859.png" alt="Joy's Desk inbox and generated reports">
    <img src="../joyScreenshots/Screenshot%202026-10-05%20215455.png" alt="Joy goals noticed in conversation">
    <img src="../joyScreenshots/Screenshot%202026-10-05%20215357.png" alt="Identity tracking with drift detection">
    <img src="../joyScreenshots/Screenshot%202026-10-05%20215548.png" alt="Roadmaps overview">
    <img src="../joyScreenshots/Screenshot%202026-10-05%20215653.png" alt="Roadmap progress and next tasks">
    <img src="../joyScreenshots/Screenshot%202026-10-05%20215938.png" alt="Joy's Memory">
    <img src="../joyScreenshots/Screenshot%202026-10-05%20220018.png" alt="Fuel suggestions observed from browser activity">
    <img src="../joyScreenshots/Screenshot%202026-10-05%20220103.png" alt="Joy's Phone Book and device control">
    </div>
`;

const PORTFOLIO_FULL_HTML = `
    <h2>Interactive 3D Portfolio</h2>
    <p>The site you're on: a portfolio built around a 3D brain you can explore, built with Three.js.</p>
    
    <h3>How it works:</h3>
    <ul>
        <li>Three.js Engine:  Built with a custom rendering loop, implementing LERP-based camera transitions for smooth "zoom-to-reveal" navigation between content nodes.</li>
        <li>Blender Pipeline: Assets (including the central cognitive model) were sculpted, retopologized, and UV-mapped in Blender specifically for GLTF/GLB web optimization.</li>
        <li>Hybrid UI System: Integrated a CSS2DRenderer layer that allows standard HTML/CSS to be projected into 3D space, ensuring SEO-friendliness and accessibility without sacrificing the 3D aesthetic.</li>
        <li>Modular Architecture: Developed a data-driven content system using ES6 modules, allowing for instant portfolio updates via a central lookup table.</li>
    </ul>

    <p style="font-size: 0.85em; color: #aaa;">Brain model: <a href="https://sketchfab.com/3d-models/cyber-brain-ai-5c8bf975736b457eacf9b4b2212f63db" target="_blank" style="color: #99ccff;">"Cyber brain AI"</a> by <a href="https://sketchfab.com/3dUVpro" target="_blank" style="color: #99ccff;">3dUVpro</a>, licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" style="color: #99ccff;">CC BY 4.0</a>.</p>
    
    <div class="contact-buttons">
        <button onclick="window.open('https://github.com/michaelangelo41699/michaelangelo41699.github.io', '_blank')">View Source Code</button>
    </div>
`;


// --- Project Details Lookup Table ---
// CRITICAL: All full HTML constants are correctly mapped here.
export const PROJECT_DETAILS = {
    ALEXANDRIA: ALEXANDRIA_FULL_HTML,
    GUARDIAN: GUARDIAN_FULL_HTML,
    JOY: JOY_FULL_HTML,
    PORTFOLIO: PORTFOLIO_FULL_HTML,
    RESUME: RESUME_HTML,
};


// --- Camera Positions and Content Definitions (These are correct based on your last input) ---
export const CAMERA_POSITIONS = {
    
    // --- OVERVIEW ---
    OVERVIEW: {
        pos: new THREE.Vector3(0, 0, 2), 
        target: new THREE.Vector3(0, 0, 0),
        contentPos: new THREE.Vector3(0, 0, 0),
        offset: ['-100%', '-50%'],
        html: `
            <h1>Michael Gonzalez</h1>
            <h2>Computer Science Student at Texas A&amp;M</h2>
            <p>I'm a developer from Aguadilla, Puerto Rico, and I build software that helps people notice how they think, feel, and spend their attention, from behavioral models that detect when someone drifts from their own goals to Joy, an AI companion for self-awareness.</p>
            <p>I'm looking for research-focused internships in AI and machine learning.</p>
            <div class="contact-buttons">
                <button onclick="navigateTo('PROJECTS')">See my projects</button>
            </div>
        `
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
            <p>I've been building software since 2015, when I founded MasterCraftCode, a drag-and-drop tool that generated mobile apps for 100+ non-technical clients.</p>
            <p>Tools I work with:</p>
            <ul style="list-style: square; margin-left: 20px;">
                <li>AI &amp; ML: TensorFlow, PyTorch, NLP, behavioral pattern recognition.</li>
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
    PROJECTS: {
        pos: new THREE.Vector3(-2.5, -1, 0), 
        target: new THREE.Vector3(-0.5, -0.5, 0),
        contentPos: new THREE.Vector3(4.5, 2, 0),
        offset: ['-100%', '-50%'], 
        html: `
            <h2>Projects</h2>
            <p>Things I've built, and the questions behind them:</p>
            <ul style="list-style: none; padding-left: 0;">
                
                <li onclick="openProject('ALEXANDRIA')" 
                    style="cursor: pointer; color: #99ccff; transition: color 0.2s;">
                     Alexandria (AI Study Platform): Turns raw class materials into personalized quizzes and study tools. [Read more]
                </li>
                <ul style="font-size: 0.9em; margin-top: 5px; margin-left: 20px; color: #33ff99;">
                    <li>Built full-stack with React Native, Tamagui, and FastAPI.</li>
                    <li>Scalable backend with Redis queues, AWS, and Render.</li>
                </ul>
                
                <li onclick="openProject('GUARDIAN')" 
                    style="cursor: pointer; color: #99ccff; transition: color 0.2s; margin-top: 15px;">
                     Shield (Behavioral Awareness): A privacy-first app that helps people notice patterns and emotional drift in their own behavior. [Read more]
                </li>
                <ul style="font-size: 0.9em; margin-top: 5px; margin-left: 20px; color: #33ff99;">
                    <li>Privacy-aware ML, with data kept on the device.</li>
                    <li>Dual-pipeline logging of behavior over time.</li>
                </ul>
                
                <li onclick="openProject('JOY')" 
                    style="cursor: pointer; color: #99ccff; transition: color 0.2s; margin-top: 15px;">
                     Joy (AI Companion): An assistant that remembers context, tracks goals and identity drift, and can act for you by voice. [Read more]
                </li>
                <ul style="font-size: 0.9em; margin-top: 5px; margin-left: 20px; color: #33ff99;">
                    <li>Electron + React desktop, React Native mobile, browser extension.</li>
                    <li>Cloudflare Workers, Durable Objects, D1; Rust native module.</li>
                </ul>
                
                <li onclick="openProject('PORTFOLIO')" 
                    style="cursor: pointer; color: #99ccff; transition: color 0.2s; margin-top: 15px;">
                     This 3D Portfolio: The site you're exploring right now, built around a 3D brain. [Read more]
                     </li>
                <ul style="font-size: 0.9em; margin-top: 5px; margin-left: 20px; color: #33ff99;">
                    <li>Three.js with smooth camera navigation and a Blender-optimized brain model.</li>
                    <li>Real HTML text placed in 3D space, so it stays readable and searchable.</li>
                </ul>
            </ul>
            <p style="font-size: 0.9em; color: #aaa; margin-top: 10px;">Click any project to read more.</p>
        `
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