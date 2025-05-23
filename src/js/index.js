const barsSolid = document.getElementById('bars-solid');
const xmarkSolid = document.getElementById('xmark-solid');
const logo = document.getElementById('logo');
const imgLogoMobile = document.getElementById('img-logo-mobile');
const searchMobile = document.getElementById('search-mobile');
const buttonOpenApp = document.getElementById('button-abrir-app');
const button1 = document.getElementById('button-1');
const premium = document.getElementById('premium');
const section = [
    document.getElementById('section-1'),
    document.getElementById('section-2'),
    document.getElementById('section-3'),
    document.getElementById('section-4'),
    document.getElementById('section-5')

];
const sectionClip = [
    document.getElementById('section-clip-1'),
    document.getElementById('section-clip-2'),
    document.getElementById('section-clip-3'),
    document.getElementById('section-clip-4'),
    document.getElementById('section-clip-5')
];
const headerNavList = document.getElementById('header_navL-list');
const spanButton = document.getElementById('span');
const footer = document.getElementById('footer');
const loader = document.getElementById('loader')
const pag =  'src/html/search.html'


barsSolid.addEventListener('click', () => {
    
    barsSolid.classList.add('hidden');
    xmarkSolid.classList.remove('hidden');
    headerNavList.classList.remove('hidden');
    imgLogoMobile.style.opacity = '0';
    searchMobile.style.opacity = '0';
    buttonOpenApp.style.opacity = '0';
    premium.style.display = 'none';
    section.forEach((dados) => {
        dados.classList.add('hidden');
    });
    footer.classList.add('hidden');
    
})


xmarkSolid.addEventListener('click', () => {
    barsSolid.classList.remove('hidden');
    headerNavList.classList.add('hidden');
    xmarkSolid.classList.add('hidden');
    imgLogoMobile.style.opacity = '1';
    searchMobile.style.opacity = '1';
    buttonOpenApp.style.opacity = '1';
    premium.style.display = '';
    section.forEach((dados) => {
        dados.classList.remove('hidden');
    })
    footer.classList.remove('hidden');
})

// ------- area do Premium -------------
const fechar = document.getElementById('fechar');
fechar.addEventListener('click', () => {
    premium.classList.add('hidden');
    
})
//------------------------------------------


// ir para outra pagina a de buscar
function carregandoShow(){
    premium.classList.add('hidden')
    section.forEach((element) => {
        element.classList.add('hidden')
    })
    tags.forEach((elements) => {
        elements.classList.add('hidden')
    })

    loader.classList.remove('hidden');
}

function carregandoOcult(){
    loader.classList.add('hidden');
}

function loading(){
    carregandoShow();

    setTimeout(() => {
        carregandoOcult()
    }, 3000);
}



searchMobile.addEventListener('click', () => {
    loading()
    location.href = pag
    
})
// ------------------------------------------------------

//---------- Interação carregando --------------------- 
const tags = [
    document.getElementById('header'),
    document.getElementById('footer')
];
const rodape = document.querySelectorAll('[id^="ft"]');

function showLoader() {
    loader.classList.remove('hidden');
    premium.style.display = 'none';
    tags.forEach((i) => {
        i.classList.add('hidden')
    });

    rodape.forEach((r, n) => {
        rodape[3].style.display = 'none';
        if(n <= 2){
            r.classList.add('hidden')
        };
        
    });
    
};

function hideLoader() {
    loader.classList.add('hidden');
    premium.style.display = '';

    tags.forEach((i) => {
        i.classList.remove('hidden');
    });
};

function carregando(){
    showLoader();

    setTimeout(() => {
        hideLoader(); 
    }, 2000);
      
};

// --------------------------------------

//--------Section First--------------------
function sectionFirst() {
    const art = document.querySelectorAll('[id^="art-"]');
    const artMusic = document.querySelectorAll('[id^="artist-"]');

    function artist() {
        section[0].classList.add('hidden');
        sectionClip[0].classList.remove('hidden');
    }

    function addHidden() {
        sectionClip[0].classList.add('hidden');
    };

    function music(ifr) {
        artMusic.forEach((element, date) => {
            element.classList.toggle('hidden', date !== ifr);
        });
    };

    art.forEach((num, index) => {
        num.addEventListener('click', () => {

            artist();
            music(index);
            carregando();

            function click(visivel) {
                visivel ? addHidden() : (artist(), music(index));
            }

            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        });
    });
};

sectionFirst();
//------------------------------------------

// -----Section two---------------
(function sectionSecond(){
    const boxAlbum = document.querySelectorAll('[id^="box_albuns-"]')
    const musicAlbum = document.querySelectorAll('[id^="album-"]')

    function album(){
        section.forEach((elemento) => {
            elemento.classList.add('hidden');
        })
        
        sectionClip[0].classList.add('hidden');
        sectionClip[1].classList.remove('hidden');
    };

    function addHidden(){
        sectionClip[1].classList.add('hidden'); 
    };

    function boxMusic(result){
        musicAlbum.forEach((element, date) => {
            element.classList.toggle('hidden', date !== result);
        });
    };

    boxAlbum.forEach((num, result) => {
        num.addEventListener('click', () => {
            album();
            boxMusic(result);
            carregando();

            function albuns(visivel) {
                visivel ? addHidden() : (album(), boxAlbum(result));
            }

            barsSolid.addEventListener('click', () => albuns(true));
            xmarkSolid.addEventListener('click', () => albuns(false));

        });

    });

})();
// -------------------------------

// -----------Section three---------
(function sectionThree(){

    const radioArtist = document.querySelectorAll('[id^="radio-"]');
    const radioIframe = document.querySelectorAll('[id^="box-radio-"]');

    function boxRadio(ifr){
        radioIframe.forEach((ele, id) => {
        ele.classList.toggle('hidden', id !== ifr);

       })
    };

    function radioSect() {
        
        section.forEach((elemento) => {
            elemento.classList.add('hidden');
        })
        sectionClip[0].classList.add('hidden');
    
        sectionClip[2].classList.remove('hidden');
    };
    function addHidden() {
        sectionClip[2].classList.add('hidden'); 
    };

    radioArtist.forEach((art, id) => {
        art.addEventListener('click', () => {
            radioSect();
            boxRadio(id);
            carregando()

            function iframe(visivel) {
                visivel ? addHidden() : (radioSect(), boxRadio(id));
            }

            barsSolid.addEventListener('click', () => iframe(true));
            xmarkSolid.addEventListener('click', () => iframe(false));

        });
    });
    
})();
// --------------------------------

// -----------Section Four---------
(function sectionFour(){
  
    const destaqueArtist = document.querySelectorAll('[id^="destaque-"]');
    const iframeDestaque = document.querySelectorAll('[id^="box-destaque-"]');

    function ifraDest(ifr){
        iframeDestaque.forEach((elem, id) => {
            elem.classList.toggle('hidden', id !== ifr);
        });
    };

    function destaqueSect() {
        
        section.forEach((elemento) => {
            elemento.classList.add('hidden');
        });
        
        sectionClip[0].classList.add('hidden');
    
        sectionClip[3].classList.remove('hidden');
    };
    
    function addHidden(){
        sectionClip[3].classList.add('hidden');
    };

    destaqueArtist.forEach((art, id) => {
        art.addEventListener('click', () => {
            destaqueSect();
            ifraDest(id);
            carregando();

            function iframe(visivel) {
                visivel ? addHidden() : (destaqueSect(), ifraDest(id));
            }

            barsSolid.addEventListener('click', () => iframe(true));
            xmarkSolid.addEventListener('click', () => iframe(false));

        })  
    });
     

})();
// --------------------------------

// -----------Section Five---------
function time(){
    const timeHour = new Date();
    const hour = timeHour.getHours();

    if(hour <= 7 || hour >= 17){
        section[4].classList.add('hidden')
        
    };
};

(function sectionFive(){
    time();

    const acompanharArtist = document.querySelectorAll('[id^="acompanhar-"]');
    const iframeAcompanhar = document.querySelectorAll('[id^="box-acompanhar-"]');
    
    function ifrAcom(ifr){
        iframeAcompanhar.forEach((elem, id) => {
            elem.classList.toggle('hidden', id !== ifr);
        });
    };

    function acompanharSect() {
        section.forEach((elemento) => {
            elemento.classList.add('hidden');
        });
        
        sectionClip[0].classList.add('hidden');
    
        sectionClip[4].classList.remove('hidden');
    };
    
    function addHidden() {
        sectionClip[4].classList.add('hidden');
    };

    acompanharArtist.forEach((elem, id) => {
        elem.addEventListener('click', () => {
            acompanharSect();
            ifrAcom(id);
            carregando();

            function iframe(visivel) {
                visivel ? addHidden() : (acompanharSect(), ifrAcom(id));
            }

            barsSolid.addEventListener('click', () => iframe(true));
            xmarkSolid.addEventListener('click', () => iframe(false));

        });
    });


    
})();
// ----------------------


const home = document.getElementById('home');
home.addEventListener('click', () => {
    home.classList.add('homeOcult');
    const homeAfterClick = document.getElementById('homeAfterClick');
    homeAfterClick.classList.remove('homeOcult');
    const pageHome = './index.html';
    location.href = pageHome;
})

const btnMostra = document.querySelectorAll('#btn-mostra');
btnMostra[0].addEventListener('click', () => {
    const pagArtist = 'src/html/artista_populares.html'

    location.href = pagArtist
})

btnMostra[1].addEventListener('click', () => {
    const pagAlbuns = 'src/html/albuns.html'

    location.href = pagAlbuns
})

btnMostra[2].addEventListener('click', () => {
    const pagRadio = 'src/html/radio_pop.html'

    location.href = pagRadio
})

btnMostra[3].addEventListener('click', () => {
    const pagDestaque = 'src/html/destaques.html'

    location.href = pagDestaque
})
