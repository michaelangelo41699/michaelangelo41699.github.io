import * as THREE from 'three';

// --- Global Constants ---
const IS_PHONE = typeof window !== 'undefined' && window.innerWidth <= 768;
export const LERP_FACTOR = 0.08; 
export const BRAIN_SCALE = 1.0; 

// --- DETAILED PROJECT DESCRIPTIONS ---

// The resume lives in js/resume.js.


// Project content lives in js/projects.js.

// --- Detail pages opened outside the project deck ---
export const PROJECT_DETAILS = {
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
        // The brain sits to the left on wide screens, near the top on phones; the About panel is js/about.js
        pos: new THREE.Vector3(IS_PHONE ? 0 : 0.85, IS_PHONE ? -0.55 : 0.35, IS_PHONE ? 3 : 2.1),
        target: new THREE.Vector3(IS_PHONE ? 0 : 0.85, IS_PHONE ? -0.55 : 0.05, 0),
        contentPos: new THREE.Vector3(-3, -3, 0),
        offset: ['100%', '-50%'],
        html: ''
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
    
    // --- CONTACT ---
    CONTACT: {
        // Brain on the right on wide screens, lower on phones; the Contact card is js/contact.js
        pos: new THREE.Vector3(-3.2, IS_PHONE ? 0.75 : 0, IS_PHONE ? 0 : -1.05),
        target: new THREE.Vector3(0, IS_PHONE ? 0.75 : -0.15, IS_PHONE ? 0 : -1.05),
        contentPos: new THREE.Vector3(3, 0, 0),
        offset: ['-100%', '-50%'],
        html: ''
    }
};
