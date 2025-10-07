/**
 * Traquiva Website - Main JavaScript
 * Core functionality and utilities for the website
 * @version 1.0.0
 */

// ==========================================================================
// 1. CONFIGURATION & CONSTANTS
// ==========================================================================
const CONFIG = {
    animationDuration: 300,
    scrollOffset: 80,
    breakpoints: {
        mobile: 640,
        tablet: 768,
        desktop: 1024,
        wide: 1280
    }
};

// ==========================================================================
// 2. UTILITY FUNCTIONS
// ==========================================================================

/**
 * Debounce function to limit function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit = 250) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector of target element
 * @param {number} offset - Offset from top in pixels
 */
function smoothScrollTo(selector, offset = CONFIG.scrollOffset) {
    const element = document.querySelector(selector);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Get current breakpoint
 * @returns {string} Current breakpoint name
 */
function getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width < CONFIG.breakpoints.mobile) return 'mobile';
    if (width < CONFIG.breakpoints.tablet) return 'tablet';
    if (width < CONFIG.breakpoints.desktop) return 'desktop';
    return 'wide';
}

// ==========================================================================
// 3. NAVIGATION COMPONENT
// ==========================================================================

class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.mobileMenuToggle = document.querySelector('.navbar-toggle');
        this.mobileMenu = document.querySelector('.navbar-mobile-menu');
        this.navLinks = document.querySelectorAll('.navbar-link, .navbar-mobile-link');
        
        this.init();
    }

    init() {
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.mobileMenu && 
                !this.mobileMenu.contains(e.target) && 
                !this.mobileMenuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Handle scroll for navbar shadow
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));

        // Set active link based on current page
        this.setActiveLink();

        // Handle smooth scrolling for anchor links
        this.setupSmoothScrolling();
    }

    toggleMobileMenu() {
        if (this.mobileMenu) {
            this.mobileMenu.classList.toggle('active');
            this.mobileMenuToggle.setAttribute(
                'aria-expanded',
                this.mobileMenu.classList.contains('active')
            );
        }
    }

    closeMobileMenu() {
        if (this.mobileMenu && this.mobileMenu.classList.contains('active')) {
            this.mobileMenu.classList.remove('active');
            this.mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar?.classList.add('scrolled');
        } else {
            this.navbar?.classList.remove('scrolled');
        }
    }

    setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href !== '#login' && href !== '#signup') {
                    e.preventDefault();
                    smoothScrollTo(href);
                    this.closeMobileMenu();
                }
            });
        });
    }
}

// ==========================================================================
// 4. FORM VALIDATION
// ==========================================================================

class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const isValid = this.validateForm();
        
        if (isValid) {
            this.submitForm();
        }
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.hasAttribute('required');

        // Clear previous errors
        this.clearError(field);

        // Required field validation
        if (required && !value) {
            this.showError(field, 'This field is required');
            return false;
        }

        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'Please enter a valid email address');
                return false;
            }
        }

        // Phone validation
        if (type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value)) {
                this.showError(field, 'Please enter a valid phone number');
                return false;
            }
        }

        // URL validation
        if (type === 'url' && value) {
            try {
                new URL(value);
            } catch {
                this.showError(field, 'Please enter a valid URL');
                return false;
            }
        }

        // Min length validation
        const minLength = field.getAttribute('minlength');
        if (minLength && value.length < parseInt(minLength)) {
            this.showError(field, `Minimum ${minLength} characters required`);
            return false;
        }

        return true;
    }

    showError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.textContent = message;
        
        const parent = field.parentElement;
        parent.appendChild(errorElement);
    }

    clearError(field) {
        field.classList.remove('error');
        
        const parent = field.parentElement;
        const errorElement = parent.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    async submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        console.log('Form submitted:', data);
        
        // Show success message
        this.showSuccessMessage();
        
        // Reset form
        this.form.reset();
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'alert alert-success';
        message.textContent = 'Thank you! Your message has been sent successfully.';
        
        this.form.insertBefore(message, this.form.firstChild);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// ==========================================================================
// 5. PRICING TOGGLE
// ==========================================================================

class PricingToggle {
    constructor() {
        this.toggle = document.getElementById('billing-toggle');
        this.monthlyPrices = document.querySelectorAll('[data-monthly-price]');
        this.yearlyPrices = document.querySelectorAll('[data-yearly-price]');
        
        if (this.toggle) {
            this.init();
        }
    }

    init() {
        this.toggle.addEventListener('change', () => this.handleToggle());
    }

    handleToggle() {
        const isYearly = this.toggle.checked;
        
        this.monthlyPrices.forEach(el => {
            el.style.display = isYearly ? 'none' : 'block';
        });
        
        this.yearlyPrices.forEach(el => {
            el.style.display = isYearly ? 'block' : 'none';
        });
    }
}

// ==========================================================================
// 6. ACCORDION COMPONENT
// ==========================================================================

class Accordion {
    constructor(selector) {
        this.accordions = document.querySelectorAll(selector);
        if (this.accordions.length > 0) {
            this.init();
        }
    }

    init() {
        this.accordions.forEach(accordion => {
            const header = accordion.querySelector('.accordion-header');
            if (header) {
                header.addEventListener('click', () => this.toggle(accordion));
            }
        });
    }

    toggle(accordion) {
        const content = accordion.querySelector('.accordion-content');
        const isOpen = accordion.classList.contains('active');

        // Close all accordions
        this.accordions.forEach(acc => {
            acc.classList.remove('active');
            const accContent = acc.querySelector('.accordion-content');
            if (accContent) {
                accContent.style.maxHeight = null;
            }
        });

        // Open clicked accordion if it was closed
        if (!isOpen) {
            accordion.classList.add('active');
            if (content) {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    }
}

// ==========================================================================
// 7. LAZY LOADING IMAGES
// ==========================================================================

class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        if (this.images.length > 0) {
            this.init();
        }
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            this.images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }
}

// ==========================================================================
// 8. SCROLL ANIMATIONS
// ==========================================================================

class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-animate]');
        if (this.elements.length > 0) {
            this.init();
        }
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, {
                threshold: 0.1
            });

            this.elements.forEach(el => observer.observe(el));
        }
    }
}

// ==========================================================================
// 9. MODAL COMPONENT
// ==========================================================================

class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        if (this.modal) {
            this.init();
        }
    }

    init() {
        // Close button
        const closeBtn = this.modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Close on backdrop click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    }

    open() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    isOpen() {
        return this.modal.classList.contains('active');
    }
}

// ==========================================================================
// 10. INITIALIZATION
// ==========================================================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    console.log('🚀 Traquiva Website Initialized');

    // Initialize components
    const navigation = new Navigation();
    const lazyLoader = new LazyLoader();
    const scrollAnimations = new ScrollAnimations();
    const accordion = new Accordion('.accordion-item');
    const pricingToggle = new PricingToggle();

    // Initialize forms
    const contactForm = new FormValidator('#contact-form');
    const newsletterForm = new FormValidator('#newsletter-form');

    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#login' && href !== '#signup') {
                e.preventDefault();
                smoothScrollTo(href);
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', debounce(() => {
        const breakpoint = getCurrentBreakpoint();
        console.log('Current breakpoint:', breakpoint);
    }, 250));

    // Add loading class removal
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// ==========================================================================
// 11. GLOBAL FUNCTIONS (for backward compatibility)
// ==========================================================================

// Mobile menu toggle (called from HTML)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Billing toggle (called from HTML)
function toggleBilling() {
    const toggle = document.getElementById('billing-toggle');
    if (toggle) {
        const event = new Event('change');
        toggle.dispatchEvent(event);
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Navigation,
        FormValidator,
        PricingToggle,
        Accordion,
        LazyLoader,
        ScrollAnimations,
        Modal,
        debounce,
        throttle,
        smoothScrollTo,
        isInViewport,
        getCurrentBreakpoint
    };
}
