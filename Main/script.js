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