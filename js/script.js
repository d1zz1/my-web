document.addEventListener('DOMContentLoaded', function() {
    const discordBtn = document.getElementById('discordBtn');
    const discordSocial = document.getElementById('discordSocial');
    const notification = document.getElementById('notification');
    const projectsBtn = document.getElementById('projectsBtn');
    const projectsSection = document.getElementById('projects-section');
    
    const discordUsername = "d1zz7.p";
    
    discordBtn.addEventListener('click', () => {
        copyToClipboard(discordUsername);
        showNotification("Discord username copied to clipboard!");
    });
    
    discordSocial.addEventListener('click', (e) => {
        e.preventDefault();
        copyToClipboard(discordUsername);
        showNotification("Discord username copied to clipboard!");
    });
    
    projectsBtn.addEventListener('click', () => {
        if (projectsSection.style.display === 'none') {
            projectsSection.style.display = 'block';
            projectsSection.scrollIntoView({ behavior: 'smooth' });
            projectsBtn.innerHTML = '<i class="fas fa-arrow-up"></i> Back to Top';
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            projectsBtn.innerHTML = '<i class="fas fa-code"></i> My Projects';
            setTimeout(() => {
                projectsSection.style.display = 'none';
            }, 500);
        }
    });
    
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(err => {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        });
    }
    
    function showNotification(message) {
        notification.querySelector('span').textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = window.innerWidth < 768 ? 30 : 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 5 + 2;
            const posX = Math.random() * window.innerWidth;
            const posY = Math.random() * window.innerHeight;
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 10;
            const alpha = Math.random() * 0.3 + 0.2;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}px`;
            particle.style.top = `${posY}px`;
            particle.style.opacity = alpha;
            particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
            }
            50% {
                transform: translateY(-100px) translateX(20px);
            }
            100% {
                transform: translateY(0) translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
});