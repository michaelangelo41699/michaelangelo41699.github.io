import * as THREE from 'three';

// --- Global Constants ---
export const LERP_FACTOR = 0.08; 
export const BRAIN_SCALE = 1.0; 

// --- DETAILED PROJECT DESCRIPTIONS ---

// 1. Full HTML for the Resume 
const RESUME_HTML = `
    <div class="resume-container">
        <header>
            <h1>MICHAEL GONZALEZ <span style="font-size: 0.8em; color: #99ccff;">/ McFly</span></h1>
            <h2>Information Systems & Software Developer(Student)</h2>
            <div class="contact-info">
                <span>Email: <a href="mailto:michaelangelo41699@gmail.com">michaelangelo41699@gmail.com</a></span>
                <span>| GitHub: <a href="https://github.com/michaelangelo41699" target="_blank">github.com/michaelangelo41699</a></span>
                <span>| LinkedIn: <a href="https://www.linkedin.com/in/michael-gonzalez-190321272" target="_blank">linkedin.com/in/michael-gonzalez-190321272</a></span>
            </div>
        </header>

        <section class="profile">
            <h3>PROFILE</h3>
            <p>Information Systems student and developer focused on building technology that increases user awareness, decision quality, and ethical interaction with digital systems. Focused on applied AI systems that increase user self-awareness and help combat misinformation through behavioral insight rather than censorship. Experience designing and implementing mobile applications, AI-powered behavioral analysis systems, and full-stack software projects. Strong interest in human-centered computing and applied AI.</p>
        </section>

        <section class="education">
            <h3>EDUCATION</h3>
            <div class="entry">
                <h4>Universidad Interamericana de Puerto Rico – Aguadilla</h4>
                <p>Bachelor’s Degree in Computer Science (In Progress)</p>
                <p>Honors: Dean’s List</p>
                <p>Relevant Coursework: Object-Oriented Programming (Java), Database Systems, Web Development (HTML, CSS, JavaScript), User Experience & Interface Design, Systems Analysis & Design, Computer Science Fundamentals.</p>
            </div>
        </section>

        <section class="technical-skills">
            <h3>TECHNICAL SKILLS</h3>
            <div class="skills-grid">
                <div>
                    <h4>Programming & Backend APIs</h4>
                    <p>Python (Flask APIs, ML inference endpoints), Java, JavaScript, SQL, REST API design & integration, JSON-based data pipelines, Object-Oriented Programming</p>
                </div>
                <div>
                    <h4>Mobile & App Development</h4>
                    <p>Android (Android Studio, Kotlin/Java), React Native (learning / transitioning), Firebase (authentication, data storage concepts)</p>
                </div>
                <div>
                    <h4>AI & Machine Learning</h4>
                    <p>TensorFlow (model training, inference, TFLite concepts), PyTorch (model training & experimentation), Large Language Models (LLMs), OpenAI API (analysis, summarization, insight generation), Prompt engineering & structured output parsing, Natural Language Processing (text classification, emotion & persuasion detection), Dataset preparation & annotation, Model evaluation & iteration</p>
                </div>
                <div>
                    <h4>Tools & Platforms</h4>
                    <p>RunPod (GPU inference & model hosting), Google Colab (model training & experimentation), Cloud-based model deployment (GPU-backed inference), Android Studio, VS Code, Git & GitHub, Blender (3D modeling & visualization), Postman (API testing)</p>
                </div>
            </div>
        </section>
        
        <section class="projects">
            <h3>PROJECTS</h3>
            
            <div class="entry">
                <h4>Alexandria – AI-Powered Study & Assessment Platform <span style="font-weight: normal; color: #aaa;">(Full-Stack Deployment)</span></h4>
                <ul>
                    <li>Designed and deployed a production-grade learning platform transforming raw academic materials into personalized study tools and assessments.</li>
                    <li>Architected scalable backend services using <strong>FastAPI</strong> with <strong>Redis</strong> queues to handle long-running AI tasks (e.g., OCR extraction, quiz generation).</li>
                    <li>Built a mobile-first user experience using <strong>React Native</strong> focusing on clarity, feedback loops, and progress tracking.</li>
                </ul>
            </div>
            
            <div class="entry">
                <h4>Guardian / Shield – Behavioral Awareness & Insight System <span style="font-weight: normal; color: #aaa;">(Personal Project)</span></h4>
                <ul>
                    <li>Conducted dataset research and curation related to persuasion, manipulation, and emotional framing. Applied psychological frameworks to interpret digital behavior and content influence.</li>
                    <li>Integrated cloud-based LLM APIs for real-time content analysis and insight generation. Designed hybrid AI architecture combining classical ML classifiers with LLM-based reasoning.</li>
                    <li>Built and deployed a Flask-based API to serve AI inference results to mobile clients, implementing batch and real-time analysis endpoints.</li>
                    <li>Designed and developed a mobile application focused on increasing user self-awareness around digital consumption and emotional manipulation.</li>
                </ul>
            </div>
            
            <div class="entry">
                <h4>3D Visualization & Modeling (Blender)</h4>
                <ul>
                    <li>Created and manipulated 3D assets for visualization and conceptual design.</li>
                    <li>Gained experience in spatial reasoning, lighting, rendering, and asset workflow.</li>
                </ul>
            </div>
        </section>
        
        <section class="interests">
            <h3>INTERESTS</h3>
            <p>Human-centered AI, Digital ethics & misinformation, Behavioral psychology, Product design, Emerging technologies</p>
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
    <p>The site you're on: a portfolio built around a 3D brain you can explore, combining Three.js with assets I modeled in Blender.</p>
    
    <h3>How it works:</h3>
    <ul>
        <li>Three.js Engine:  Built with a custom rendering loop, implementing LERP-based camera transitions for smooth "zoom-to-reveal" navigation between content nodes.</li>
        <li>Blender Pipeline: Assets (including the central cognitive model) were sculpted, retopologized, and UV-mapped in Blender specifically for GLTF/GLB web optimization.</li>
        <li>Hybrid UI System: Integrated a CSS2DRenderer layer that allows standard HTML/CSS to be projected into 3D space, ensuring SEO-friendliness and accessibility without sacrificing the 3D aesthetic.</li>
        <li>Modular Architecture: Developed a data-driven content system using ES6 modules, allowing for instant portfolio updates via a central lookup table.</li>
    </ul>
    
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
            <h2>Developer &amp; Computer Science Student</h2>
            <p>I build software that helps people notice how they think, feel, and spend their attention. I'm drawn to the place where cognitive science meets AI, and I learn best by turning those questions into real, working projects.</p>
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
            <p>Tools I work with:</p>
            <ul style="list-style: square; margin-left: 20px;">
                <li>Frontend: React, Three.js, Vanilla JS, CSS (Sass/Styled).</li>
                <li>Backend: Node.js, Python, PostgreSQL/MongoDB.</li>
                <li>Cloud & DevOps: AWS (S3, EC2), Docker, CI/CD, Redis.</li>
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
                    <li>Three.js with smooth camera navigation and assets I modeled in Blender.</li>
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
