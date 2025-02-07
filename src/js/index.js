// area do header
let logo = document.getElementById('logo');
let search = document.getElementById('search');
let button = document.getElementById('button');
let barsSolid = document.getElementById('bars-solid');
let xmarkSolid = document.getElementById('xmark-solid');
let headerNav = document.getElementById('header_nav')

barsSolid.addEventListener('click', () => {
// deixa a area de musica oculta
    artistaOneMusic.style.display = 'none';

    // area de artista fica oculta se estiver visivel
    if(artistasPopularesBoxOne.style.display === ''){

        artistasPopularesBoxOne.style.display = 'none';
        // quando clicar no artista a area da musica fica visivel
        artistasPopularesBoxOne.addEventListener('click', () => {
            artistasPopularesBoxOne.style.display = 'none';
            artistaOneMusic.style.display = 'block';
        })
    }
    barsSolid.style.display = 'none';
    xmarkSolid.style.display = 'block';
    logo.style.opacity = '0';
    search.style.opacity = '0';
    button.style.opacity = '0';
    headerNav.style.display = 'block';
    premium.style.display = 'none';

})

xmarkSolid.addEventListener('click', () => {
// area do artista estiver oculta ela ficara visivel
    if(artistasPopularesBoxOne.style.display === 'none'){
        artistasPopularesBoxOne.style.display = '';
    }

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

// -----------area do artistas------------
let artistasPopularesBoxOne = document.getElementById('artistas_populares_box_one');
let artistaOne = document.getElementById('artista_one');
let artistaOneMusic = document.getElementById('artista_one_music');

artistaOne.addEventListener('click', () => {
    artistasPopularesBoxOne.style.display = 'none';
    artistaOneMusic.style.display = 'block';
})