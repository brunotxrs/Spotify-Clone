var barsSolid = document.getElementById('bars-solid');
var xmarkSolid = document.getElementById('xmark-solid');
var logo = document.getElementById('logo');
var logo1 = document.getElementById('logo-1')
var search = document.getElementById('search');
var search1 = document.getElementById('search-1');
var button = document.getElementById('button');
var button1 = document.getElementById('button-1');
var premium = document.getElementById('premium');
var sectionArtist = document.getElementById('section_artist');
var sectionAlbuns = document.getElementById('section_albuns');
var headerNav = document.getElementById('header_nav');

// -------------função do Nav-----------------
function visivelNav(show) {

    if(show){
        headerNav.classList.remove('hidden');
        xmarkSolid.classList.remove('hidden');
        logo.style.opacity = '0';
        logo1.classList.add('curso-auto');
        search.style.opacity = '0';
        search1.classList.add('curso-auto');
        button.style.opacity = '0';
        button1.classList.add('curso-auto');
        barsSolid.classList.add('hidden');
        premium.classList.add('hidden');
        sectionArtist.classList.add('hidden');
        sectionAlbuns.classList.add('hidden');
        return;
    } else {
        headerNav.classList.add('hidden');
        xmarkSolid.classList.add('hidden');
        logo.style.opacity = '1';
        logo1.classList.remove('curso-auto');
        search.style.opacity = '1';
        search1.classList.remove('curso-auto');
        button.style.opacity = '1';
        button1.classList.remove('curso-auto');
        barsSolid.classList.remove('hidden');
        premium.classList.remove('hidden');
        sectionArtist.classList.remove('hidden');
        sectionAlbuns.classList.remove('hidden');
    }
    
}

barsSolid.addEventListener('click', () => visivelNav(true));
xmarkSolid.addEventListener('click', () => visivelNav(false));

// ------------------------------------------------------------------

// ------- area do Premium --------
var fechar = document.getElementById('fechar');
fechar.addEventListener('click', () => {
    premium.classList.add('hidden');
})

//------------------------------------------

// -------------- area dos artistas ------------------
var artistBox = document.getElementById('artist_box');
var play1 = document.getElementById('play-1');
var artist1 = document.getElementById('artist-1')
play1.addEventListener('click', () => {
    artistBox.classList.add('hidden');
    artist1.classList.remove('hidden');    
})

var play2 = document.getElementById('play-2');
var artist2 = document.getElementById('artist-2')
play2.addEventListener('click', () => {
    artistBox.classList.add('hidden');
    artist2.classList.remove('hidden');    
})

var play3 = document.getElementById('play-3');
var artist3 = document.getElementById('artist-3')
play3.addEventListener('click', () => {
    artistBox.classList.add('hidden');
    artist3.classList.remove('hidden');    
})

//-------area da Musica Albuns----------------
var artistMusicBox = document.getElementById('artist-music-box')
var play21 = document.getElementById('play-21');
var album1 = document.getElementById('album-1')
var single = document.getElementById('single')
var musicAlbuns = document.getElementById('music_albuns')
var album1 = document.getElementById('album-1')
play21.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album1.classList.remove('hidden');
    
})