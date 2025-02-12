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

const play23 = document.getElementById('play-23');
const album3 = document.getElementById('album-3')
play23.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album3.classList.remove('hidden');
  
})

const play24 = document.getElementById('play-24');
const album4 = document.getElementById('album-4')
play24.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album4.classList.remove('hidden');
  
})

const play25 = document.getElementById('play-25');
const album5 = document.getElementById('album-5')
play25.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album5.classList.remove('hidden');
  
})

const play26 = document.getElementById('play-26');
const album6 = document.getElementById('album-6')
play26.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album6.classList.remove('hidden');
  
})

const play27 = document.getElementById('play-27');
const album7 = document.getElementById('album-7')
play27.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album7.classList.remove('hidden');
  
})

const play28 = document.getElementById('play-28');
const album8 = document.getElementById('album-8')
play28.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album8.classList.remove('hidden');
  
})

const play29 = document.getElementById('play-29');
const album9 = document.getElementById('album-9')
play29.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album9.classList.remove('hidden');
  
})

const play30 = document.getElementById('play-30');
const album10 = document.getElementById('album-10')
play30.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album10.classList.remove('hidden');
  
})

const play31 = document.getElementById('play-31');
const album11 = document.getElementById('album-11')
play31.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album11.classList.remove('hidden');
  
})

const play32 = document.getElementById('play-32');
const album12 = document.getElementById('album-12')
play32.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album12.classList.remove('hidden');
  
})

const play33 = document.getElementById('play-33');
const album13 = document.getElementById('album-13')
play33.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album13.classList.remove('hidden');
  
})

const play34 = document.getElementById('play-34');
const album14 = document.getElementById('album-14')
play34.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album14.classList.remove('hidden');
  
})

const play35 = document.getElementById('play-35');
const album15 = document.getElementById('album-15')
play35.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album15.classList.remove('hidden');
  
})

const play36 = document.getElementById('play-36');
const album16 = document.getElementById('album-16')
play36.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album16.classList.remove('hidden');
  
})

const play37 = document.getElementById('play-37');
const album17 = document.getElementById('album-17')
play37.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album17.classList.remove('hidden');
  
})

const play38 = document.getElementById('play-38');
const album18 = document.getElementById('album-18')
play38.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album18.classList.remove('hidden');
  
})

const play39 = document.getElementById('play-39');
const album19 = document.getElementById('album-19')
play39.addEventListener('click',  () => {
    artistBox.classList.add('hidden');
    artistMusicBox.classList.add('hidden');
    single.classList.add('hidden');
    musicAlbuns.classList.remove('hidden');
    album19.classList.remove('hidden');
  
})

// ---------------------------------------