// Professional Portfolio - Main JavaScript

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeComponents();
        // Skip loading sequence - show content immediately
        this.initializePortfolio();
    }

    setupEventListeners() {
        // DOM Content Loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.initScrollAnimations();
            this.initNavigation();
            this.initTypingEffect();
            this.initCounters();
        });

        // Scroll Events
        window.addEventListener('scroll', () => {
            this.updateScrollProgress();
            this.updateNavigation();
            this.handleScrollAnimations();
        });

        // Resize Events
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    initializeComponents() {
        this.cursor = new CustomCursor();
        this.scrollAnimations = new ScrollAnimations();
        this.navigation = new Navigation();
        this.skills = new SkillsManager();
        this.projects = new ProjectsManager();
        this.contact = new ContactManager();
        this.mouseTracker = new MouseTracker();
    }

    initializePortfolio() {
        // Initialize GSAP animations immediately
        try {
            this.initGSAPAnimations();
        } catch (error) {
            console.warn('GSAP animations failed to initialize:', error);
        }
    }

    initGSAPAnimations() {
        // Check if GSAP is available
        if (typeof gsap === 'undefined') {
            console.warn('GSAP not loaded, skipping animations');
            return;
        }

        try {
            // Register GSAP plugins
            gsap.registerPlugin(ScrollTrigger, TextPlugin);

            // Hero section animations
            const tl = gsap.timeline();
            
            tl.from('.hero-greeting', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            })
            .from('.hero-title .title-line', {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            }, '-=0.4')
            .from('.hero-subtitle', {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.3')
            .from('.hero-description', {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.2')
            .from('.hero-stats .stat-item', {
                opacity: 0,
                y: 30,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.2')
            .from('.hero-actions .btn', {
                opacity: 0,
                y: 30,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            }, '-=0.2')
            .from('.profile-card', {
                opacity: 0,
                x: 50,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.6');

            // Section animations
            gsap.utils.toArray('.section').forEach(section => {
                gsap.from(section.querySelectorAll('.animate-on-scroll'), {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                });
            });

            // Parallax effects
            gsap.utils.toArray('.parallax-element').forEach(element => {
                gsap.to(element, {
                    y: '-20%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            });
        } catch (error) {
            console.warn('Error initializing GSAP animations:', error);
        }
    }

    initScrollAnimations() {
        // Add scroll-based animations
        console.log('Scroll animations initialized');
    }

    initNavigation() {
        // Initialize navigation functionality
        console.log('Navigation initialized');
    }

    initTypingEffect() {
        const texts = ['AI/ML', 'Machine Learning', 'Web Development', 'Data Science', 'Deep Learning', 'NLP'];
        const subtitleElement = document.querySelector('.subtitle-animated');
        
        if (!subtitleElement) return;
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                subtitleElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                subtitleElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = 150;
            
            if (isDeleting) {
                typeSpeed /= 2;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    }

    initCounters() {
        const counters = document.querySelectorAll('[data-target]');
        
        const animateCounter = (counter) => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const step = target / 50;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += step;
                    if (target === 8.66) {
                        counter.textContent = current.toFixed(2);
                    } else {
                        counter.textContent = Math.ceil(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target === 8.66) {
                        counter.textContent = target.toFixed(2);
                    } else {
                        counter.textContent = target;
                    }
                }
            };
            
            updateCounter();
        };
        
        // Create intersection observer for counters
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => observer.observe(counter));
    }

    updateScrollProgress() {
        // Update scroll progress
    }

    updateNavigation() {
        // Update navigation state
    }

    handleScrollAnimations() {
        // Handle scroll animations
    }

    handleResize() {
        // Handle window resize
    }
}

// Helper Classes (simplified for now)
class CustomCursor {
    constructor() {
        console.log('Custom cursor initialized');
    }
}

class ScrollAnimations {
    constructor() {
        console.log('Scroll animations initialized');
    }
}

class Navigation {
    constructor() {
        console.log('Navigation initialized');
    }
}

class SkillsManager {
    constructor() {
        this.initSkillsNavigation();
        this.initSkillAnimations();
    }
    
    initSkillsNavigation() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const skillCategories = document.querySelectorAll('.skill-category');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                
                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update active category
                skillCategories.forEach(cat => {
                    cat.classList.remove('active');
                    if (cat.getAttribute('data-category') === category) {
                        cat.classList.add('active');
                    }
                });
                
                // Animate skill bars
                this.animateSkillBars(category);
            });
        });
    }
    
    initSkillAnimations() {
        // Animate skill bars when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.animated-fill');
                    fills.forEach(fill => {
                        const level = fill.getAttribute('data-level');
                        fill.style.setProperty('--level', level + '%');
                        fill.style.animation = 'fillBar 2s ease-out forwards';
                    });
                }
            });
        });
        
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }
    
    animateSkillBars(category) {
        const activeCategory = document.querySelector(`.skill-category[data-category="${category}"]`);
        if (!activeCategory) return;
        
        const fills = activeCategory.querySelectorAll('.animated-fill');
        fills.forEach((fill, index) => {
            const level = fill.getAttribute('data-level');
            fill.style.setProperty('--level', level + '%');
            fill.style.animation = 'none';
            setTimeout(() => {
                fill.style.animation = 'fillBar 1.5s ease-out forwards';
            }, index * 100);
        });
    }
}

class ProjectsManager {
    constructor() {
        console.log('Projects manager initialized');
    }
}

class ContactManager {
    constructor() {
        console.log('Contact manager initialized');
    }
}

class MouseTracker {
    constructor() {
        this.init();
    }

    init() {
        this.setupMouseTracking();
        this.setupParallaxEffects();
    }

    setupMouseTracking() {
        // Track mouse for interactive card effects
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.skill-card, .project-card, .contact-item, .experience-item');
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
                    
                    if (!card.classList.contains('no-tilt')) {
                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                    }
                } else {
                    if (!card.classList.contains('no-tilt')) {
                        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                    }
                }
            });
        });
    }

    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const sections = document.querySelectorAll('.section');
            
            sections.forEach((section, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                
                const background = section.querySelector('::before, ::after');
                if (background) {
                    section.style.setProperty('--parallax-y', `${yPos}px`);
                }
            });
        });
    }
}

// Initialize the application immediately
function initializePortfolio() {
    try {
        new PortfolioApp();
    } catch (error) {
        console.error('Portfolio initialization failed:', error);
    }
}

// Initialize as soon as possible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}