const barsSolid = document.getElementById('bars-solid');
const xmarkSolid = document.getElementById('xmark-solid');
const logo = document.getElementById('logo');
const logo1 = document.getElementById('logo-1')
const search = document.getElementById('search');
const search1 = document.getElementById('search-1');
const button = document.getElementById('button');
const button1 = document.getElementById('button-1');
const premium = document.getElementById('premium');
const sectionArtist = document.getElementById('section_artist');
const sectionAlbuns = document.getElementById('section_albuns');
const headerNav = document.getElementById('header_nav');

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
const fechar = document.getElementById('fechar');
fechar.addEventListener('click', () => {
    premium.classList.add('hidden');
})

//------------------------------------------

const artistBox = document.getElementById('artist_box');
const playButtons = document.querySelectorAll('[id^="play-"]');

playButtons.forEach(play => {
    play.addEventListener('click', () => {
        artistBox.classList.add('hidden');

        const artistId = play.id.replace('play-', 'artist-');
        const artist = document.getElementById(artistId);
        
        if (artist) {
            artist.classList.remove('hidden');
        }
    });
});


//-------area da Musica Albuns----------------

var artistMusicBox = document.getElementById('artist-music-box')

var single = document.getElementById('single')
var musicAlbuns = document.getElementById('music_albuns')

const play21 = document.getElementById('play-21');
const album1 = document.getElementById('album-1')
play21.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album1.classList.remove('hidden');
  
})

const play22 = document.getElementById('play-22');
const album2 = document.getElementById('album-2')
play22.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album2.classList.remove('hidden');
  
})