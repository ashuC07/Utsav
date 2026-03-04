// college_students.js
document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Entrance Animation
    const heroTimeline = gsap.timeline();

    // Animate Hero text in
    heroTimeline.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.5)'
    })
        .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        // Animate stats individually
        .from('.stat-item', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.5)'
        }, '-=0.4');

    // Make the shapes pulse in scale
    gsap.to('.shape1', {
        scale: 1.15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape2', {
        scale: 1.2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
    });

    // Parallax Scroll for Shapes
    gsap.to('.shape1', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.college-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to('.shape2', {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: {
            trigger: '.college-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to('.shape3', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.college-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Section Titles Gradient Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
            },
            backgroundPosition: '200% center',
            duration: 2,
            ease: 'power2.out'
        });
    });

    // Content Reveal Animations
    gsap.utils.toArray('.about-sggs, .utsav-glance, .director-message').forEach(section => {
        gsap.from(section.querySelectorAll('h2, p'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });

    // Mousemove Parallax for Hero Shapes
    document.querySelector('.college-hero').addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;

        gsap.to('.shape1', { x: x, y: y, duration: 1.5, ease: 'power2.out' });
        gsap.to('.shape2', { x: -x, y: -y, duration: 1.5, ease: 'power2.out' });
        gsap.to('.shape3', { x: y, y: x, duration: 1.5, ease: 'power2.out' });
    });
});