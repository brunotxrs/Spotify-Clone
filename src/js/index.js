// area do header
let logo = document.getElementById('logo');
let search = document.getElementById('search');
let button = document.getElementById('button');
let barsSolid = document.getElementById('bars-solid');
let xmarkSolid = document.getElementById('xmark-solid');
let headerNav = document.getElementById('header_nav')

barsSolid.addEventListener('click', () => {
    artistasPopularesBoxOne.style.display = 'none';
    barsSolid.style.display = 'none';
    xmarkSolid.style.display = 'block';
    logo.style.opacity = '0';
    search.style.opacity = '0';
    button.style.opacity = '0';
    headerNav.style.display = 'block';
    premium.style.display = 'none';

// deixa a area de musica oculta
    artistMusic.style.display = 'none';
    

    // area de artista fica oculta se estiver visivel
    if(artistasPopularesBoxOne.style.display === ''){

        artistasPopularesBoxOne.style.display = 'none';
        // quando clicar no artista a area da musica fica visivel
        artistasPopularesBoxOne.addEventListener('click', () => {
            artistasPopularesBoxOne.style.display = 'none';
        })
    }

    
      
    

})

// função redireciona para a página principal
document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        window.location.replace("index.html"); 
    }
});


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
let play;
let artista;
let artistMusic;

artista = document.getElementById('art-1');
artista.addEventListener('click', () => {
    play = document.getElementById('play-1');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-1');
        artistMusic.style.display = 'block';
    })
    
})
artista = document.getElementById('art-2');
artista.addEventListener('click', () => {
    play = document.getElementById('play-2');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-2');
        artistMusic.style.display = 'block';
    })
    
})
artista = document.getElementById('art-3');
artista.addEventListener('click', () => {
    play = document.getElementById('play-3');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-3');
        artistMusic.style.display = 'block';
    })
    
})
artista = document.getElementById('art-4')
artista.addEventListener('click', () => {
    play = document.getElementById('play-4');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-4');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-5')
artista.addEventListener('click', () => {
    play = document.getElementById('play-5');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-5');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-6')
artista.addEventListener('click', () => {
    play = document.getElementById('play-6');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-6');
        artistMusic.style.display = 'block';
    })
    
})


artista = document.getElementById('art-7')
artista.addEventListener('click', () => {
    play = document.getElementById('play-7');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-7');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-8')
artista.addEventListener('click', () => {
    play = document.getElementById('play-8');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-8');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-9')
artista.addEventListener('click', () => {
    play = document.getElementById('play-9');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-9');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-10')
artista.addEventListener('click', () => {
    play = document.getElementById('play-10');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-10');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-11')
artista.addEventListener('click', () => {
    play = document.getElementById('play-11');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-11');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-12')
artista.addEventListener('click', () => {
    play = document.getElementById('play-12');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-12');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-13')
artista.addEventListener('click', () => {
    play = document.getElementById('play-13');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-13');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-14')
artista.addEventListener('click', () => {
    play = document.getElementById('play-14');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-14');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-15')
artista.addEventListener('click', () => {
    play = document.getElementById('play-15');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-15');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-16')
artista.addEventListener('click', () => {
    play = document.getElementById('play-16');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-16');
        artistMusic.style.display = 'block';
    })
    
})


artista = document.getElementById('art-17')
artista.addEventListener('click', () => {
    play = document.getElementById('play-17');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-17');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-18')
artista.addEventListener('click', () => {
    play = document.getElementById('play-18');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-18');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-19')
artista.addEventListener('click', () => {
    play = document.getElementById('play-19');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-19');
        artistMusic.style.display = 'block';
    })
    
})

artista = document.getElementById('art-20')
artista.addEventListener('click', () => {
    play = document.getElementById('play-20');
    play.style.opacity = '1';
    play.addEventListener('click', () => {
        artistasPopularesBoxOne.style.display = 'none';
        artistMusic = document.getElementById('artist-20');
        artistMusic.style.display = 'block';
    })
    
})
