// area do header
let logo = document.getElementById('logo');
let search = document.getElementById('search');
let button = document.getElementById('button');
let barsSolid = document.getElementById('bars-solid');
let xmarkSolid = document.getElementById('xmark-solid');
let headerNav = document.getElementById('header_nav')

barsSolid.addEventListener('click', () => {
    barsSolid.style.display = 'none';
    xmarkSolid.style.display = 'block';
    logo.style.opacity = '0';
    search.style.opacity = '0';
    button.style.opacity = '0';
    headerNav.style.display = 'block';
    premium.style.display = 'none';

})

xmarkSolid.addEventListener('click', () => {
    barsSolid.style.display = '';
    xmarkSolid.style.display = 'none';
    logo.style.opacity = '1';
    search.style.opacity = '1';
    button.style.opacity = '1';
    headerNav.style.display = 'none';
    premium.style.display = 'block';
})

// --------- area da mensagem Seja Premium

let premium = document.getElementById('premium');
let fechar = document.getElementById('fechar');
fechar.addEventListener('click', () => {
    premium.style.display = 'none';
})

// ---------------------------------------