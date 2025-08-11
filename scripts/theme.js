const themeBtn = document.getElementById('themeswitch');
const themeIcon = document.getElementById('themeicon');
const body = document.body;
const moon = 'bi-cloud-moon-fill';
const sun = 'bi-cloud-sun-fill';

themeBtn.addEventListener('click', () => {
    if (themeIcon.classList.contains(moon)) {
        // Tema escuro pra claro
        body.classList.remove('dark');
        body.classList.add('light');
        changeTheme(sun, moon);
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        changeTheme(moon, sun);
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