// Get elements
const backHomeBtn = document.getElementById('backHomeBtn');
const joinBtn = document.getElementById('joinBtn');
const emailInput = document.getElementById('emailInput');
const successMessage = document.getElementById('successMessage');

// Navigate back to home page
backHomeBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Handle join waitlist
joinBtn.addEventListener('click', function() {
    const email = emailInput.value.trim();
    
    if (email && validateEmail(email)) {
        // Show success message
        successMessage.classList.remove('hidden');
        
        // Clear input
        emailInput.value = '';
        
        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 3000);
    } else {
        alert('Please enter a valid email address');
    }
});

// Handle Enter key press in email input
emailInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        joinBtn.click();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

 const button = document.getElementById('joinBtn');
        const container = document.querySelector('.particle-container');
        let interval = null;

        // Hover effect - mulai spawn partikel
        button.addEventListener('mouseenter', () => {
            if (!interval) {
                interval = setInterval(() => {
                    createNeonParticle();
                }, 80); // Lebih cepat karena tombol lebih besar
            }
        });

        // Mouse leave - stop spawn partikel
        button.addEventListener('mouseleave', () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        });

        // Click effect - burst partikel + ripple
        button.addEventListener('click', (e) => {
            // Ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = button.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);

            // Burst partikel lebih banyak
            for (let i = 0; i < 25; i++) {
                setTimeout(() => {
                    createNeonParticle();
                }, i * 25);
            }
        });

        function createNeonParticle() {
            const particle = document.createElement('div');
            particle.className = 'falling-particle';
            
            // Random posisi horizontal
            const startX = Math.random() * container.offsetWidth;
            particle.style.left = startX + 'px';
            
            // Style neon cyan dengan variasi
            const size = 4 + Math.random() * 6;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = `hsl(${180 + Math.random() * 40}, 100%, ${55 + Math.random() * 15}%)`;
            particle.style.boxShadow = `
                0 0 ${8 + Math.random() * 4}px currentColor, 
                0 0 ${16 + Math.random() * 8}px currentColor
            `;
            particle.style.animation = `fall ${0.8 + Math.random() * 0.4}s linear forwards, glow ${0.2 + Math.random() * 0.2}s infinite`;
            
            container.appendChild(particle);
            
            // Hapus partikel setelah animasi selesai
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }

