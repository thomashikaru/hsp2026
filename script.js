// Mobile navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add loading animation for page elements
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.highlight-card, .section-title');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Under Construction Overlay Management
console.log('Script.js loaded - starting construction overlay check');

function createUnderConstructionOverlay() {
    console.log('createUnderConstructionOverlay function called');
    
    // Check if construction mode is enabled in config
    const constructionEnabled = window.WEBSITE_CONFIG && window.WEBSITE_CONFIG.UNDER_CONSTRUCTION_MODE;
    
    // Debug logging
    console.log('Construction mode enabled:', constructionEnabled);
    console.log('Current pathname:', window.location.pathname);
    console.log('Is home page:', window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('/') || 
        window.location.pathname === '');
    
    // Don't show overlay if construction mode is disabled or on home page
    if (!constructionEnabled || 
        window.location.pathname.endsWith('index.html') || 
        window.location.pathname.endsWith('/') || 
        window.location.pathname === '') {
        console.log('Not showing overlay - construction disabled or home page');
        return;
    }
    
    console.log('Creating under construction overlay');

    const overlay = document.createElement('div');
    overlay.className = 'under-construction-overlay';
    overlay.innerHTML = `
        <div class="under-construction-content">
            <div class="under-construction-icon">🚧</div>
            <h1 class="under-construction-title">Under Construction</h1>
            <p class="under-construction-message">
                This page is currently being updated with the latest information. 
                We're working hard to bring you the most current details for the HSP 2026 Conference.
            </p>
            <a href="index.html" class="under-construction-home-link">Return to Home</a>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

// Initialize under construction overlay
// Wait for both DOM and config to be ready
function initializeConstructionOverlay() {
    console.log('initializeConstructionOverlay called');
    console.log('window.WEBSITE_CONFIG available:', !!window.WEBSITE_CONFIG);
    
    // Check if config is loaded
    if (window.WEBSITE_CONFIG) {
        console.log('Config found, calling createUnderConstructionOverlay');
        createUnderConstructionOverlay();
    } else {
        console.log('Config not found, retrying in 100ms');
        // If config not loaded yet, wait a bit and try again
        setTimeout(initializeConstructionOverlay, 100);
    }
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeConstructionOverlay);
} else {
    initializeConstructionOverlay();
}

// Function to disable construction mode (for easy activation later)
function disableConstructionMode() {
    const overlay = document.querySelector('.under-construction-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

// Function to enable construction mode
function enableConstructionMode() {
    const overlay = document.querySelector('.under-construction-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

// Make functions globally available for easy access
window.disableConstructionMode = disableConstructionMode;
window.enableConstructionMode = enableConstructionMode; 