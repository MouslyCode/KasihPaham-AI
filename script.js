lucide.createIcons();

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navList = document.getElementById('nav-list');

hamburgerBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});


navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});