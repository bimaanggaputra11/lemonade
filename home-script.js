// Get elements
const getStartedBtn = document.getElementById('getStartedBtn');
const roadmapBtn = document.getElementById('roadmapBtn');

// Particle containers
const getStartedContainer = document.querySelector('.particle-container'); // untuk getStartedBtn
const roadmapContainer = document.querySelector('.particle-container-roadmap'); // untuk roadmapBtn

let getStartedInterval = null;
let roadmapInterval = null;

// ===== GET STARTED BUTTON =====
// Navigate to waitlist page
getStartedBtn.addEventListener('click', function() {
    // Burst partikel sebelum navigate
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createNeonParticle(getStartedContainer, 'cyan');
        }, i * 30);
    }
    
    // Navigate setelah animasi
    setTimeout(() => {
        window.location.href = 'waitlist.html';
    }, 500);
});

// Hover effect - Get Started
getStartedBtn.addEventListener('mouseenter', () => {
    if (!getStartedInterval) {
        getStartedInterval = setInterval(() => {
            createNeonParticle(getStartedContainer, 'cyan');
        }, 100);
    }
});

getStartedBtn.addEventListener('mouseleave', () => {
    if (getStartedInterval) {
        clearInterval(getStartedInterval);
        getStartedInterval = null;
    }
});

// ===== ROADMAP BUTTON =====
// Navigate to roadmap page
roadmapBtn.addEventListener('click', function() {
    // Burst partikel sebelum navigate
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createNeonParticle(roadmapContainer, 'cyan');
        }, i * 30);
    }
    
    // Navigate setelah animasi
    setTimeout(() => {
        window.location.href = 'roadmap.html';
    }, 500);
});

// Hover effect - Roadmap
roadmapBtn.addEventListener('mouseenter', () => {
    if (!roadmapInterval) {
        roadmapInterval = setInterval(() => {
            createNeonParticle(roadmapContainer, 'cyan');
        }, 100);
    }
});

roadmapBtn.addEventListener('mouseleave', () => {
    if (roadmapInterval) {
        clearInterval(roadmapInterval);
        roadmapInterval = null;
    }
});

// ===== PARTICLE FUNCTION =====
function createNeonParticle(container, color) {
    if (!container) return; // safety check
    
    const particle = document.createElement('div');
    particle.className = 'falling-particle';
    
    // Random posisi horizontal
    const startX = Math.random() * container.offsetWidth;
    particle.style.left = startX + 'px';
    
    // Style neon berdasarkan warna
    particle.style.width = (4 + Math.random() * 5) + 'px';
    particle.style.height = particle.style.width;
    
    if (color === 'cyan') {
        particle.style.background = `hsl(${180 + Math.random() * 40}, 100%, 60%)`;
    } else if (color === 'purple') {
        particle.style.background = `hsl(${270 + Math.random() * 30}, 100%, 65%)`;
    }
    
    particle.style.boxShadow = `0 0 10px currentColor, 0 0 20px currentColor`;
    particle.style.animation = `fall ${0.8 + Math.random() * 0.4}s linear forwards, glow 0.3s infinite`;
    
    container.appendChild(particle);
    
    // Hapus partikel setelah animasi selesai
    setTimeout(() => {
        particle.remove();
    }, 2000);
}

// ===== VIDEO HANDLING =====
const video = document.querySelector('.bg-video');
if (video) {
    video.addEventListener('loadeddata', function() {
        console.log('Video loaded successfully');
    });
    video.addEventListener('error', function() {
        console.error('Video failed to load');
    });
}