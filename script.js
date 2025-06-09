document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceButtons = document.querySelectorAll('.service-btn');
    
    // AI Typing Demo
    const typedTextElement = document.querySelector('.typed-text');
    const protocolResults = document.querySelector('.protocol-results');
    const demoScreen = document.querySelector('.demo-screen');
    const achillesProtocol = document.querySelector('.achilles-protocol');
    const aclProtocol = document.querySelector('.acl-protocol');
    
    const demoTexts = [
        "Patient has achilles tendinopathy; I need heel raises, 1 foot balance on wobble board, heel raises and squats. 3x15 reps daily with load progression of 5% bodyweight added each week",
        "6 weeks post ACL reconstruction. Athlete. Can i get a 6 week progression plan which includes some important text as well?"
    ];
    
    let currentTextIndex = 0;
    
    function typeText() {
        let i = 0;
        const currentText = demoTexts[currentTextIndex];
        typedTextElement.textContent = '';
        protocolResults.classList.remove('show');
        demoScreen.classList.remove('expanded');
        
        // Hide both protocol tables
        achillesProtocol.style.display = 'none';
        aclProtocol.style.display = 'none';
        
        function typeChar() {
            if (i < currentText.length) {
                typedTextElement.textContent += currentText.charAt(i);
                i++;
                // 120 WPM = ~600 characters per minute = ~50ms per character
                setTimeout(typeChar, 50);
            } else {
                // Show protocol results after typing is complete
                setTimeout(() => {
                    // Show appropriate protocol table based on current text
                    if (currentTextIndex === 0) {
                        achillesProtocol.style.display = 'block';
                    } else {
                        aclProtocol.style.display = 'block';
                    }
                    
                    demoScreen.classList.add('expanded');
                    protocolResults.classList.add('show');
                }, 500);
                
                // Hide results and restart after 10 seconds
                setTimeout(() => {
                    protocolResults.classList.remove('show');
                    demoScreen.classList.remove('expanded');
                    setTimeout(() => {
                        // Switch to next text
                        currentTextIndex = (currentTextIndex + 1) % demoTexts.length;
                        typeText();
                    }, 500);
                }, 10000);
            }
        }
        
        typeChar();
    }
    
    // Start typing demo after a short delay
    setTimeout(typeText, 1000);

    menuToggle.addEventListener('click', function() {
        const hamburger = this.querySelector('.hamburger');
        hamburger.classList.toggle('active');
        
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            
            if (buttonText.includes('Start Protocol')) {
                console.log('Creating AI-powered rehabilitation protocol...');
            } else if (buttonText.includes('Learn More')) {
                console.log('Learning about time-saving features...');
            } else if (buttonText.includes('Browse Library')) {
                console.log('Browsing exercise database...');
            }
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
        });
    });

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

    document.querySelectorAll('.affiliate-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });

    const logoIcon = document.querySelector('.logo-icon');
    logoIcon.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(90deg) scale(1.1)';
    });
    
    logoIcon.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
    });

    const heroIcon = document.querySelector('.hero-icon');
    if (heroIcon) {
        heroIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        });
        
        heroIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        });
    }

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const mainNav = document.querySelector('.main-nav');
        
        if (scrolled > 100) {
            mainNav.style.background = 'rgba(255, 255, 255, 0.95)';
            mainNav.style.backdropFilter = 'blur(10px)';
        } else {
            mainNav.style.background = 'white';
            mainNav.style.backdropFilter = 'none';
        }
    });
});