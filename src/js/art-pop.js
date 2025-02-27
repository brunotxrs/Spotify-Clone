const home = document.getElementById('home');
home.addEventListener('click', () => {
    home.classList.add('homeOcult');
    const homeAfterClick = document.getElementById('homeAfterClick');
    homeAfterClick.classList.remove('homeOcult');
    const pageHome = '../../index.html'
    location.href = pageHome;
})