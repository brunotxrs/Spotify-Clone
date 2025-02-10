// area do header
let logo = document.getElementById('logo');
let search = document.getElementById('search');
let button = document.getElementById('button');
let barsSolid = document.getElementById('bars-solid');
let xmarkSolid = document.getElementById('xmark-solid');
let headerNav = document.getElementById('header_nav');
let headerContainer = document.getElementById('header_container');

let single = document.getElementById('single')

barsSolid.addEventListener('click', () => {
    headerContainer.style.justifyContent = 'right'
    artistasPopularesBoxOne.classList.add('hidden');
    barsSolid.classList.add('hidden');
    xmarkSolid.style.marginRight = '20px'
    xmarkSolid.classList.remove('hidden');
    logo.classList.add('hidden');
    search.classList.add('hidden');
    button.classList.add('hidden');
    headerNav.classList.remove('hidden');
    premium.classList.add('hidden');
    single.classList.add('hidden');

// deixa a area de musica oculta
    artistMusic.style.display = 'none';

    

})

xmarkSolid.addEventListener('click', () => {
    artistasPopularesBoxOne.classList.remove('hidden');
    headerContainer.style.justifyContent = 'space-evenly';
    barsSolid.classList.remove('hidden')
    xmarkSolid.classList.add('hidden');
    logo.classList.remove('hidden');
    search.classList.remove('hidden');
    button.classList.remove('hidden');
    headerNav.classList.add('hidden');
    premium.classList.remove('hidden');
    single.classList.remove('hidden');

    artistMusic.style.display = 'block';

})

document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace" && document.activeElement.tagName !== "INPUT") {
        window.location.replace("index.html"); 
    }
});


// --------- area da mensagem Seja Premium

let premium = document.getElementById('premium');
let fechar = document.getElementById('fechar');
fechar.addEventListener('click', () => {
    premium.style.display = 'none';
})

// ---------------------------------------

// -----------area do artistas------------
let artistasPopularesBoxOne = document.getElementById('artistas_populares_box_one');
let play;
let artista;
let artistMusic;



artista = document.getElementById('art-1');
artista.addEventListener('click', () => {
    play = document.getElementById('play-1');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-1');
        artistMusic.classList.remove('hidden');
    })
    
})
artista = document.getElementById('art-2');
artista.addEventListener('click', () => {
    play = document.getElementById('play-2');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-2');
        artistMusic.classList.remove('hidden');
    })
    
})
artista = document.getElementById('art-3');
artista.addEventListener('click', () => {
    play = document.getElementById('play-3');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-3');
        artistMusic.classList.remove('hidden');
    })
    
})
artista = document.getElementById('art-4')
artista.addEventListener('click', () => {
    play = document.getElementById('play-4');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-4');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-5')
artista.addEventListener('click', () => {
    play = document.getElementById('play-5');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-5');
        artistMusic.classList.remove('hidden');
        
    })
    
})

artista = document.getElementById('art-6')
artista.addEventListener('click', () => {
    play = document.getElementById('play-6');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-6');
        artistMusic.classList.remove('hidden');
    })
    
})


artista = document.getElementById('art-7')
artista.addEventListener('click', () => {
    play = document.getElementById('play-7');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-7');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-8')
artista.addEventListener('click', () => {
    play = document.getElementById('play-8');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-8');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-9')
artista.addEventListener('click', () => {
    play = document.getElementById('play-9');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-9');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-10')
artista.addEventListener('click', () => {
    play = document.getElementById('play-10');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-10');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-11')
artista.addEventListener('click', () => {
    play = document.getElementById('play-11');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-11');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-12')
artista.addEventListener('click', () => {
    play = document.getElementById('play-12');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-12');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-13')
artista.addEventListener('click', () => {
    play = document.getElementById('play-13');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-13');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-14')
artista.addEventListener('click', () => {
    play = document.getElementById('play-14');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-14');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-15')
artista.addEventListener('click', () => {
    play = document.getElementById('play-15');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-15');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-16')
artista.addEventListener('click', () => {
    play = document.getElementById('play-16');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-16');
        artistMusic.classList.remove('hidden');
    })
    
})


artista = document.getElementById('art-17')
artista.addEventListener('click', () => {
    play = document.getElementById('play-17');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-17');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-18')
artista.addEventListener('click', () => {
    play = document.getElementById('play-18');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-18');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-19')
artista.addEventListener('click', () => {
    play = document.getElementById('play-19');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-19');
        artistMusic.classList.remove('hidden');
    })
    
})

artista = document.getElementById('art-20')
artista.addEventListener('click', () => {
    play = document.getElementById('play-20');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-20');
        artistMusic.classList.remove('hidden');
    })
    
})


let boxAlbuns1 = document.getElementById('box_albuns-1');
boxAlbuns1.addEventListener('click', () => {
    play = document.getElementById('play-21');
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        single.style.display = 'none';
    })

})