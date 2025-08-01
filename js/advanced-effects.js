// Advanced Visual Effects for Enhanced Sections

class AdvancedEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupSectionVisibility();
        this.initSectionTransitions();
        this.setupAdvancedAnimations();
        this.createBackgroundEffects();
    }

    setupSectionVisibility() {
        // Make sections visible on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.triggerSectionEffects(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }

    createFloatingParticles() {
        const sections = document.querySelectorAll('.skills-section, .experience-section, .projects-section, .contact-section');
        
        sections.forEach(section => {
            const particleContainer = document.createElement('div');
            particleContainer.className = 'floating-particles';
            particleContainer.innerHTML = `
                <div class="particle-1"></div>
                <div class="particle-2"></div>
                <div class="particle-3"></div>
                <div class="particle-4"></div>
                <div class="particle-5"></div>
            `;
            section.appendChild(particleContainer);
        });

        // Add CSS for floating particles
        const style = document.createElement('style');
        style.textContent = `
            .floating-particles {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                pointer-events: none;
                overflow: hidden;
                z-index: 1;
            }

            .floating-particles div {
                position: absolute;
                background: radial-gradient(circle, rgba(74, 144, 226, 0.3), transparent);
                border-radius: 50%;
                animation: floatUp 15s infinite linear;
            }

            .particle-1 {
                width: 8px;
                height: 8px;
                left: 10%;
                animation-delay: 0s;
                animation-duration: 12s;
            }

            .particle-2 {
                width: 12px;
                height: 12px;
                left: 25%;
                animation-delay: 3s;
                animation-duration: 15s;
            }

            .particle-3 {
                width: 6px;
                height: 6px;
                left: 50%;
                animation-delay: 6s;
                animation-duration: 10s;
            }

            .particle-4 {
                width: 10px;
                height: 10px;
                left: 75%;
                animation-delay: 9s;
                animation-duration: 13s;
            }

            .particle-5 {
                width: 14px;
                height: 14px;
                left: 90%;
                animation-delay: 12s;
                animation-duration: 16s;
            }

            @keyframes floatUp {
                0% {
                    transform: translateY(100vh) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    initSectionTransitions() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    this.triggerSectionEffects(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
    }

    triggerSectionEffects(section) {
        // Trigger skill bar animations
        if (section.classList.contains('skills-section')) {
            this.animateSkillBars();
        }

        // Trigger project card animations
        if (section.classList.contains('projects-section')) {
            this.animateProjectCards();
        }

        // Trigger contact form effects
        if (section.classList.contains('contact-section')) {
            this.animateContactItems();
        }

        // Trigger experience timeline
        if (section.classList.contains('experience-section')) {
            this.animateTimeline();
        }
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.level-fill');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const level = bar.getAttribute('data-level');
                bar.style.setProperty('--level', level + '%');
                bar.classList.add('animate-fill');
            }, index * 200);
        });
    }

    animateProjectCards() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('card-animate-in');
            }, index * 300);
        });
    }

    animateContactItems() {
        const items = document.querySelectorAll('.contact-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('contact-animate-in');
            }, index * 200);
        });
    }

    animateTimeline() {
        const items = document.querySelectorAll('.experience-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('timeline-animate-in');
            }, index * 400);
        });
    }

    setupAdvancedAnimations() {
        // Add CSS for advanced animations
        const style = document.createElement('style');
        style.textContent = `
            .section {
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .section-visible {
                opacity: 1;
                transform: translateY(0);
            }

            .animate-fill {
                animation: skillFillAdvanced 2s ease-out forwards;
            }

            @keyframes skillFillAdvanced {
                0% {
                    width: 0%;
                    box-shadow: 0 0 0 rgba(74, 144, 226, 0.5);
                }
                100% {
                    width: var(--level);
                    box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
                }
            }

            .card-animate-in {
                animation: cardSlideIn 0.8s ease-out forwards;
            }

            @keyframes cardSlideIn {
                0% {
                    opacity: 0;
                    transform: translateY(50px) rotateX(10deg);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0) rotateX(0deg);
                }
            }

            .contact-animate-in {
                animation: contactBounceIn 0.6s ease-out forwards;
            }

            @keyframes contactBounceIn {
                0% {
                    opacity: 0;
                    transform: scale(0.8) translateY(30px);
                }
                60% {
                    transform: scale(1.05) translateY(-10px);
                }
                100% {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }

            .timeline-animate-in {
                animation: timelineSlideIn 0.8s ease-out forwards;
            }

            @keyframes timelineSlideIn {
                0% {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            /* Enhanced hover effects */
            .skill-card:hover .skill-particles .particle {
                animation-duration: 1s;
            }

            .project-card:hover {
                animation: projectCardHover 0.3s ease-out forwards;
            }

            @keyframes projectCardHover {
                0% {
                    transform: translateY(0) scale(1);
                }
                100% {
                    transform: translateY(-15px) scale(1.02);
                }
            }
        `;
        document.head.appendChild(style);
    }

    createBackgroundEffects() {
        // Create animated background elements
        const sections = document.querySelectorAll('.skills-section, .experience-section, .projects-section, .contact-section');
        
        sections.forEach((section, sectionIndex) => {
            const bgEffect = document.createElement('div');
            bgEffect.className = 'section-bg-effect';
            
            // Different effects for different sections
            const effects = [
                'geometric-pattern',
                'neural-network',
                'particle-constellation',
                'wave-pattern'
            ];
            
            bgEffect.classList.add(effects[sectionIndex % effects.length]);
            section.appendChild(bgEffect);
        });

        // Add CSS for background effects
        const bgStyle = document.createElement('style');
        bgStyle.textContent = `
            .section-bg-effect {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                pointer-events: none;
                z-index: 1;
                opacity: 0.1;
            }

            .geometric-pattern {
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,10 90,90 10,90" fill="none" stroke="%234A90E2" stroke-width="1"/><circle cx="50" cy="50" r="20" fill="none" stroke="%23EC4899" stroke-width="1"/></svg>');
                background-size: 100px 100px;
                animation: patternMove 20s linear infinite;
            }

            .neural-network {
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%234A90E2"/><circle cx="50" cy="50" r="2" fill="%234A90E2"/><circle cx="80" cy="80" r="2" fill="%234A90E2"/><line x1="20" y1="20" x2="50" y2="50" stroke="%234A90E2" stroke-width="0.5"/><line x1="50" y1="50" x2="80" y2="80" stroke="%234A90E2" stroke-width="0.5"/></svg>');
                background-size: 80px 80px;
                animation: networkPulse 15s ease-in-out infinite;
            }

            .particle-constellation {
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="1" fill="%2322C55E"/><circle cx="75" cy="75" r="1" fill="%2322C55E"/><circle cx="75" cy="25" r="1" fill="%2322C55E"/><circle cx="25" cy="75" r="1" fill="%2322C55E"/></svg>');
                background-size: 60px 60px;
                animation: constellationTwinkle 10s ease-in-out infinite;
            }

            .wave-pattern {
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="%23F97316" stroke-width="1"/></svg>');
                background-size: 120px 60px;
                animation: waveFlow 8s ease-in-out infinite;
            }

            @keyframes patternMove {
                0% { transform: translate(0, 0) rotate(0deg); }
                100% { transform: translate(50px, 50px) rotate(360deg); }
            }

            @keyframes networkPulse {
                0%, 100% { opacity: 0.1; transform: scale(1); }
                50% { opacity: 0.3; transform: scale(1.1); }
            }

            @keyframes constellationTwinkle {
                0%, 100% { opacity: 0.1; }
                25% { opacity: 0.3; }
                50% { opacity: 0.2; }
                75% { opacity: 0.4; }
            }

            @keyframes waveFlow {
                0% { transform: translateX(0); }
                100% { transform: translateX(120px); }
            }
        `;
        document.head.appendChild(bgStyle);
    }
}

// Initialize advanced effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new AdvancedEffects();
    }, 1000);
});

// Enhanced scroll-triggered animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for section backgrounds
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = scrolled * speed;
        const bgEffect = section.querySelector('.section-bg-effect');
        if (bgEffect) {
            bgEffect.style.transform = `translateY(${yPos}px)`;
        }
    });
});
