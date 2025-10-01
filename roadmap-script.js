document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const backHomeBtn = document.getElementById('backHomeBtn');
    const joinBtn = document.getElementById('joinBtn'); // Ubah dari roadmapJoinBtn
    const container = document.querySelector('.particle-container');
    let joinInterval = null;

    // Navigate back to home page
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Navigate to waitlist page dengan efek partikel
    if (joinBtn && container) {
        // Hover effect
        joinBtn.addEventListener('mouseenter', () => {
            if (!joinInterval) {
                joinInterval = setInterval(() => {
                    createNeonParticle(container);
                }, 80);
            }
        });

        joinBtn.addEventListener('mouseleave', () => {
            if (joinInterval) {
                clearInterval(joinInterval);
                joinInterval = null;
            }
        });

        // Click effect
        joinBtn.addEventListener('click', (e) => {
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = joinBtn.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            joinBtn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);

            // Burst partikel
            for (let i = 0; i < 25; i++) {
                setTimeout(() => {
                    createNeonParticle(container);
                }, i * 25);
            }

            // Navigate setelah animasi
            setTimeout(() => {
                window.location.href = 'waitlist.html';
            }, 500);
        });
    }

    // Fungsi create particle
    function createNeonParticle(container) {
        if (!container) return;
        
        const particle = document.createElement('div');
        particle.className = 'falling-particle';
        
        const startX = Math.random() * container.offsetWidth;
        particle.style.left = startX + 'px';
        
        const size = 4 + Math.random() * 6;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = `hsl(${180 + Math.random() * 40}, 100%, ${55 + Math.random() * 15}%)`;
        particle.style.boxShadow = `0 0 ${8 + Math.random() * 4}px currentColor, 0 0 ${16 + Math.random() * 8}px currentColor`;
        particle.style.animation = `fall ${0.8 + Math.random() * 0.4}s linear forwards, glow ${0.2 + Math.random() * 0.2}s infinite`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
});