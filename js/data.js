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
            <h2>Information Systems & Software Developer</h2>
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
                    <li>Architected scalable backend services using **FastAPI** with **Redis** queues to handle long-running AI tasks (e.g., OCR extraction, quiz generation).</li>
                    <li>Built a mobile-first user experience using **React Native** focusing on clarity, feedback loops, and progress tracking.</li>
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
    <h2>Alexandria (AI-Powered Study & Assessment Platform)</h2>
    <p>End-to-end design and deployment of a production-grade learning platform used to transform raw academic materials into personalized assessments and study tools. Focus areas: distributed systems, applied machine learning, backend reliability, mobile UX, and product execution.</p>
    
    <h3>Key System Achievements:</h3>
    <ul>
        <li>Full-Stack Architecture: Designed system using React Native (Mobile) and a high-performance FastAPI backend.</li>
        <li>Scalable AI Workflow:Architected scalable backend services with background workers and Redis queues to handle long-running AI tasks (OCR extraction, quiz generation) without blocking user experience.</li>
        <li>Data Pipeline Integrity: Implemented robust data pipelines for parsing unstructured academic content into structured question formats (MCQ, true/false, open-ended) with validation layers to prevent malformed outputs.</li>
        <li>Production Deployment: Deployed and managed cloud infrastructure (API services, workers, storage, queues), including monitoring, timeout mitigation, and performance tuning under real usage constraints.</li>
        <li>Mobile UX: Built a mobile-first user experience emphasizing clarity, feedback loops, retakes, and progress tracking—bridging AI systems with human-centered design.</li>
    </ul>

    <div class="screenshot-container">
        <img src="path/to/alexandria/screenshot1.jpg" alt="Alexandria main dashboard screenshot">
        <img src="path/to/alexandria/screenshot2.jpg" alt="Alexandria quiz generation UI screenshot">
        <img src="path/to/alexandria/screenshot3.jpg" alt="Alexandria mobile assessment view screenshot">
    </div>
    <br>
    <div class="contact-buttons">
        <button onclick="window.open('https://github.com/Alexandria-Learning-Ai/alexandria-frontend', '_blank')">View Source Code</button>
    </div>
`;

// 3. Full HTML for Guardian (Restored)
const GUARDIAN_FULL_HTML = `
    <h2>Guardian (Privacy-First Behavioral Intelligence & Coaching System)</h2>
    <p>Design and implementation of a privacy-preserving behavioral analysis system that observes real user interactions to infer patterns, emotional drift, and goal misalignment—without relying on explicit user prompts.</p>
    
    <h3>Key System Achievements:</h3>
    <ul>
        <li>Privacy-Preserving Logging: Architected a dual-pipeline logging system (on-device + background processing) capturing notifications, app usage, and temporal behavior signals while minimizing data exposure.</li>
        <li>Custom ML Inference: Built a custom ML inference pipeline combining fine-tuned language models and rule-based reasoning to classify emotional states, influence tactics, and behavioral patterns in real time.</li>
        <li>Domain-Specific Classifiers: Designed and trained domain-specific classifiers using curated and synthetic datasets (emotion detection, persuasion techniques, misinformation signals), including label schema design and evaluation loops.</li>
        <li>Data Isolation: Implemented on-device data storage and analysis with strict separation between raw signals and derived insights, prioritizing user privacy and explainability.</li>
        <li>Coaching Layer: Developed a coaching layer that translates abstract model outputs into human-readable insights and actionable interventions, closing the loop between inference and behavior change.</li>
        <li>Backend Deployment: Deployed backend services supporting inference, aggregation, and daily learning jobs, with health checks, logging, and failure handling.</li>
    </ul>

    <div class="contact-buttons">
        <button onclick="window.open('path/to/guardian-live-demo(coming soon)', '_blank')">View Live Demo</button>
    </div>
`;

const PORTFOLIO_FULL_HTML = `
    <h2>Interactive 3D Portfolio (Cognitive Systems Interface)</h2>
    <p>A high-performance web experience built to demonstrate the intersection of Information Systems and 3D Creative Coding. This project focuses on spatial UI/UX and efficient asset management.</p>
    
    <h3>Technical Highlights:</h3>
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
// CRITICAL: All three full HTML constants are correctly mapped here.
export const PROJECT_DETAILS = {
    ALEXANDRIA: ALEXANDRIA_FULL_HTML,
    GUARDIAN: GUARDIAN_FULL_HTML,
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
            <h2>Cognitive Engineer & Developer</h2>
            <p>Architecting digital solutions at the intersection of human design and system processing. My work is driven by a deep understanding of full-stack complexity and user experience optimization.</p>
            <div class="contact-buttons">
                <button onclick="navigateTo('PROJECTS')">View Portfolio</button>
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
            <h2>ABOUT // Skill Matrix</h2>
            <p>Core Competencies (Temporal Lobe Synthesis):</p>
            <ul style="list-style: square; margin-left: 20px;">
                <li>Frontend: React, Three.js, Vanilla JS, CSS (Sass/Styled).</li>
                <li>Backend: Node.js, Python, PostgreSQL/MongoDB.</li>
                <li>Cloud & DevOps: AWS (S3, EC2), Docker, CI/CD, Redis.</li>
            </ul>
            <div class="contact-buttons">
                <button onclick="openProject('RESUME')">View Resume (HTML)</button>
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
            <h2>PROJECTS // Execution Record</h2>
            <p>Analysis of most significant system deployments:</p>
            <ul style="list-style: none; padding-left: 0;">
                
                <li onclick="openProject('ALEXANDRIA')" 
                    style="cursor: pointer; color: #99ccff; transition: color 0.2s;">
                     Alexandria (AI Study Platform): End-to-end learning platform transforming raw academic materials. [Project Details]
                </li>
                <ul style="font-size: 0.9em; margin-top: 5px; margin-left: 20px; color: #33ff99;">
                    <li>Architected full-stack: React Native, Tmeagui,FastAPI.</li>
                    <li>Designed scalable backend with Redis queues, AWS, Render.</li>
                </ul>
                
                <li onclick="openProject('GUARDIAN')" 
                    style="cursor: pointer; color: #99ccff; transition: color 0.2s; margin-top: 15px;">
                     Guardian (Behavioral Intelligence): Privacy-preserving system inferring user patterns and emotional drift. [Project Details]
                </li>
                <ul style="font-size: 0.9em; margin-top: 5px; margin-left: 20px; color: #33ff99;">
                    <li>Focus: Privacy-aware ML and On-device data isolation.</li>
                    <li>Architected dual-pipeline logging for temporal signals.</li>
                </ul>
                
                <li onclick="openProject('PORTFOLIO')" 
                    style="cursor: pointer; color: #99ccff; transition: color 0.2s; margin-top: 15px;">
                     Interactive 3D Portfolio: Web experience demonstrating 3D coding, Immersive WebGL environment and spatial UI/UX. [Project Details]
                     </li>
                <ul style="font-size: 0.9em; margin-top: 5px; margin-left: 20px; color: #33ff99;">
                    <li>Built with Three.js, with LERP-based camera navigation, Blender-optimized assets.</li>
                    <li>Hybrid CSS2DRenderer for SEO-friendly 3D UI.</li>
                </ul>
            </ul>
            <p style="font-size: 0.9em; color: #aaa; margin-top: 10px;">Click to explore specific deployments.</p>
        `
    },
    
    // --- CONTACT (Unchanged) ---
    CONTACT: {
        pos: new THREE.Vector3(-3.2, 0, 0),
        target: new THREE.Vector3(0, -0.5, 0),
        contentPos: new THREE.Vector3(3, 0, 0),
        offset: ['-100%', '-50%'],
        html: `
            <h2>CONTACT // System I/O</h2>
            <p>Initiate direct communication protocol:</p>
            <p>Email: <a href="mailto:michaelangelo41699@gmail.com" style="color: #99ccff;">michaelangelo41699@gmail.com</a></p>
            <p>Social Links:</p>
            <ul style="list-style: none; padding: 0;">
                <li><a href="https://www.linkedin.com/in/michael-gonzalez-190321272" target="_blank" style="color: #99ccff;">&gt; LinkedIn Profile</a></li>
                <li><a href="https://github.com/michaelangelo41699" target="_blank" style="color: #99ccff;">&gt; GitHub Repository</a></li>
            </ul>
        `
    }
};