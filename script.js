// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        document.getElementById('loadingScreen').style.pointerEvents = 'none';
        document.getElementById('mainContent').classList.remove('hidden');
    }, 2000);
});

// Generate Stars
function generateStars(container, count = 50) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.width = Math.random() * 2 + 1 + 'px';
        star.style.height = star.style.width;
        container.appendChild(star);
    }
}

// Generate stars in night sky
const nightSkyElement = document.getElementById('nightSky');
if (nightSkyElement) {
    generateStars(nightSkyElement, 100);
}

// Generate stars in stars animation section
const starsAnimationElement = document.getElementById('starsAnimation');
if (starsAnimationElement) {
    generateStars(starsAnimationElement, 80);
}

// Generate stars in background
const starsBackgroundElement = document.querySelector('.stars-background');
if (starsBackgroundElement) {
    generateStars(starsBackgroundElement, 30);
}

// Smooth Scroll Snap
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Start Button
const startBtn = document.getElementById('startBtn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        const firstSection = document.querySelectorAll('.section')[1];
        if (firstSection) {
            firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInText 1s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all content sections
document.querySelectorAll('.content-text, .content-box, .large-text-section').forEach(el => {
    observer.observe(el);
});

// Optional: Background ambient music (commented out for user preference)
// const audio = new Audio('path-to-piano-music.mp3');
// audio.loop = true;
// audio.volume = 0.3;
// document.addEventListener('click', () => {
//     audio.play();
// });

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const starsBackground = document.querySelector('.stars-background');
    if (starsBackground) {
        starsBackground.style.transform = `translateY(${scrollPos * 0.5}px)`;
    }
});

// Add more stars dynamically for night sky effect
function addTwinklingStars() {
    const nightSky = document.getElementById('nightSky');
    if (nightSky && nightSky.children.length === 0) {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.width = Math.random() * 2 + 1 + 'px';
            star.style.height = star.style.width;
            nightSky.appendChild(star);
        }
    }
}

// Call this when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addTwinklingStars);
} else {
    addTwinklingStars();
}

// Enhance typewriter effect
function typeWriter(element, speed = 50) {
    const text = element.innerHTML;
    element.innerHTML = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Mobile touch scroll optimization
if (navigator.maxTouchPoints > 0) {
    document.body.style.overscrollBehavior = 'none';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, window.innerHeight);
    } else if (e.key === 'ArrowUp') {
        window.scrollBy(0, -window.innerHeight);
    }
});

// Add scroll performance optimization
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Performance optimizations here
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Detect and enhance animations on user interaction
let hasInteracted = false;
document.addEventListener('click', () => {
    hasInteracted = true;
    document.body.style.scrollBehavior = 'smooth';
});

document.addEventListener('touchstart', () => {
    hasInteracted = true;
});

// Page visibility optimization
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations if page is hidden
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page is visible
        document.body.style.animationPlayState = 'running';
    }
});

// Prevent layout shift
window.addEventListener('load', () => {
    document.body.style.scrollBehavior = 'smooth';
});

// Add active state to sections as user scrolls
const sections = document.querySelectorAll('.section');
const observerActive = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observerActive.observe(section);
});

// Smooth fade in on load
window.addEventListener('load', () => {
    document.querySelectorAll('.section').forEach((section, index) => {
        section.style.opacity = index === 0 ? '1' : '0.95';
    });
});