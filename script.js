// Navigációs sáv stílusának módosítása görgetéskor
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    // Ha több mint 50 pixelt görgettünk lefelé, adjunk hozzá egy árnyékot
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('contact-email');
    const emailDisplay = document.getElementById('email-display');

    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Az e-mail cím részekre bontva, hogy a forráskódban ne legyen kereshető
            const part1 = "gergely.ficsur";
            const part2 = "gmail.com";
            const fullEmail = `${part1}@${part2}`;
            
            // Frissítjük a szöveget és megnyitjuk a levelezőt
            emailDisplay.textContent = fullEmail;
            window.location.href = `mailto:${fullEmail}`;
        });
    }
});

const roles = ["Junior Full Stack Fejlesztő", "Biztonság-fókuszált kódoló", "Linux Rajongó"];
let i = 0;
setInterval(() => {
    document.getElementById('typewriter').innerText = roles[i];
    i = (i + 1) % roles.length;
}, 3000);