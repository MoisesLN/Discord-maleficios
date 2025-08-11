const themeBtn = document.getElementById('themeswitch');
const themeIcon = document.getElementById('themeicon');
const body = document.body;
const moon = 'bi-cloud-moon-fill';
const sun = 'bi-cloud-sun-fill';

window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'dark';
    body.classList.add(theme);
    if (theme == 'light') {
        themeIcon.classList.remove(moon);
        themeIcon.classList.add(sun);
    }

})

themeBtn.addEventListener('click', () => {
    if (themeIcon.classList.contains(moon)) {
        // Tema pra claro
        body.classList.remove('dark');
        body.classList.add('light');
        changeTheme(sun, moon);
        localStorage.setItem('theme', 'light')
    } else {
        // Tema pra escuro
        body.classList.remove('light');
        body.classList.add('dark');
        changeTheme(moon, sun);
        localStorage.setItem('theme', 'dark')
    }
})

function changeTheme(newIcon, oldIcon) {
    // Girar
    themeBtn.classList.add('spin');

    // Trocar no meio
    setTimeout(() => {
        themeIcon.classList.remove(oldIcon);
        themeIcon.classList.add(newIcon);
    }, 400);

    // Parar de girar
    setTimeout(() => {
        themeBtn.classList.remove('spin');
    }, 1000);
}