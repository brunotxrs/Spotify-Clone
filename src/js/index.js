const barsSolid = document.getElementById('bars-solid');
const xmarkSolid = document.getElementById('xmark-solid');
const logo = document.getElementById('logo');
const logo1 = document.getElementById('logo-1')
const search = document.getElementById('search');
const search1 = document.getElementById('search-1');
const button = document.getElementById('button');
const button1 = document.getElementById('button-1');
const premium = document.getElementById('premium');
const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');
const section4 = document.getElementById('section-4');
const headerNav = document.getElementById('header_nav');
const sectionClip1 = document.getElementById('section-clip-1');
const sectionClip2 = document.getElementById('section-clip-2');
const sectionClip3 = document.getElementById('section-clip-3');
const sectionClip4 = document.getElementById('section-clip-4');

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
        premium.style.display = 'none';
        section1.classList.add('hidden');
        section2.classList.add('hidden');
        section3.classList.add('hidden');
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
        premium.style.display = '';
        section1.classList.remove('hidden');
        section2.classList.remove('hidden');
        section3.classList.remove('hidden');
        
    }
    
}

barsSolid.addEventListener('click', () => visivelNav(true));
xmarkSolid.addEventListener('click', () => visivelNav(false));

// ------------------------------------------------------
// ------- area do Premium --------
const fechar = document.getElementById('fechar');
fechar.addEventListener('click', () => {
    premium.classList.add('hidden');
})

//------------------------------------------

//--------Section First--------------------
function sectionFirst(){

    const artArray = [
        document.getElementById('art-1'),
        document.getElementById('art-2'),
        document.getElementById('art-3'),
        document.getElementById('art-4'),
        document.getElementById('art-5'),
        document.getElementById('art-6'),
        document.getElementById('art-7'),
        document.getElementById('art-8'),
        document.getElementById('art-9'),
        document.getElementById('art-10'),
        document.getElementById('art-11'),
        document.getElementById('art-12'),
        document.getElementById('art-13'),
        document.getElementById('art-14'),
        document.getElementById('art-15'),
        document.getElementById('art-16'),
        document.getElementById('art-17'),
        document.getElementById('art-18'),
        document.getElementById('art-19'),
        document.getElementById('art-20')
    ]
    const artMusicArray = [
        document.getElementById('artist-1'),
        document.getElementById('artist-2'),
        document.getElementById('artist-3'),
        document.getElementById('artist-4'),
        document.getElementById('artist-5'),
        document.getElementById('artist-6'),
        document.getElementById('artist-7'),
        document.getElementById('artist-8'),
        document.getElementById('artist-9'),
        document.getElementById('artist-10'),
        document.getElementById('artist-11'),
        document.getElementById('artist-12'),
        document.getElementById('artist-13'),
        document.getElementById('artist-14'),
        document.getElementById('artist-15'),
        document.getElementById('artist-16'),
        document.getElementById('artist-17'),
        document.getElementById('artist-18'),
        document.getElementById('artist-19'),
        document.getElementById('artist-20')
    
    ]
    
    function artist(){
        section1.classList.add('hidden');
        sectionClip1.classList.remove('hidden');
    }
    
    if(artArray[0]){
        artArray[0].addEventListener('click', () => {
            artist();
            artMusicArray[0].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[0].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[1]){
        artArray[1].addEventListener('click', () => {
            artist();
            artMusicArray[1].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[1].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[2]){
        artArray[2].addEventListener('click', () => {
            artist();
            artMusicArray[2].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[2].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[3]){
        artArray[3].addEventListener('click', () => {
            artist();
            artMusicArray[3].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[3].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[4]){
        artArray[4].addEventListener('click', () => {
            artist();
            artMusicArray[4].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[4].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[5]){
        artArray[5].addEventListener('click', () => {
            artist();
            artMusicArray[5].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[5].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[6]){
        artArray[6].addEventListener('click', () => {
            artist();
            artMusicArray[6].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[6].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[7]){
        artArray[7].addEventListener('click', () => {
            artist();
            artMusicArray[7].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[7].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[8]){
        artArray[8].addEventListener('click', () => {
            artist();
            artMusicArray[8].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[8].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[9]){
        artArray[9].addEventListener('click', () => {
            artist();
            artMusicArray[9].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[9].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[10]){
        artArray[10].addEventListener('click', () => {
            artist();
            artMusicArray[10].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[10].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[11]){
        artArray[11].addEventListener('click', () => {
            artist();
            artMusicArray[11].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[11].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[12]){
        artArray[12].addEventListener('click', () => {
            artist();
            artMusicArray[12].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[12].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[13]){
        artArray[13].addEventListener('click', () => {
            artist();
            artMusicArray[13].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[13].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[14]){
        artArray[14].addEventListener('click', () => {
            artist();
            artMusicArray[14].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[14].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[15]){
        artArray[15].addEventListener('click', () => {
            artist();
            artMusicArray[15].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[15].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[16]){
        artArray[16].addEventListener('click', () => {
            artist();
            artMusicArray[16].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[16].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[17]){
        artArray[17].addEventListener('click', () => {
            artist();
            artMusicArray[17].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[17].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[18]){
        artArray[18].addEventListener('click', () => {
            artist();
            artMusicArray[18].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[18].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }if(artArray[19]){
        artArray[19].addEventListener('click', () => {
            artist();
            artMusicArray[19].classList.remove('hidden');
        
            function click(visivel) {
                if(visivel) {
                    sectionClip1.classList.add('hidden');
                } else {
                    artist();
                    artMusicArray[19].classList.remove('hidden');
                }
            }
        
            barsSolid.addEventListener('click', () => click(true));
            xmarkSolid.addEventListener('click', () => click(false));
        
        }) 
    
    }

};

sectionFirst();

// ----------------------------------------

//-------Section Second---------------------
(function sectionSecond(){

    const boxAlbunsArray = [
        document.getElementById('box_albuns-1'),
        document.getElementById('box_albuns-2'),
        document.getElementById('box_albuns-3'),
        document.getElementById('box_albuns-4'),
        document.getElementById('box_albuns-5'),
        document.getElementById('box_albuns-6'),
        document.getElementById('box_albuns-7'),
        document.getElementById('box_albuns-8'),
        document.getElementById('box_albuns-9'),
        document.getElementById('box_albuns-10'),
        document.getElementById('box_albuns-11'),
        document.getElementById('box_albuns-12'),
        document.getElementById('box_albuns-13'),
        document.getElementById('box_albuns-14'),
        document.getElementById('box_albuns-15'),
        document.getElementById('box_albuns-16'),
        document.getElementById('box_albuns-17'),
        document.getElementById('box_albuns-18'),
        document.getElementById('box_albuns-19'),
    ]
    const musicAlbunsArray = [
        document.getElementById('album-1'),
        document.getElementById('album-2'),
        document.getElementById('album-3'),
        document.getElementById('album-4'),
        document.getElementById('album-5'),
        document.getElementById('album-6'),
        document.getElementById('album-7'),
        document.getElementById('album-8'),
        document.getElementById('album-9'),
        document.getElementById('album-10'),
        document.getElementById('album-11'),
        document.getElementById('album-12'),
        document.getElementById('album-13'),
        document.getElementById('album-14'),
        document.getElementById('album-15'),
        document.getElementById('album-16'),
        document.getElementById('album-17'),
        document.getElementById('album-18'),
        document.getElementById('album-19'),
    ]
    
    function album(){
        section1.classList.add('hidden');
        section2.classList.add('hidden');
        section3.classList.add('hidden');
        sectionClip1.classList.add('hidden');
        sectionClip2.classList.remove('hidden');
    }
    
    if(boxAlbunsArray[0]){
        boxAlbunsArray[0].addEventListener('click', () => {
            album()
            musicAlbunsArray[0].classList.remove('hidden');
        
             function albuns(visivel){
                 if(visivel){
                     sectionClip2.classList.add('hidden');           
                 }else {
                    album()
                     musicAlbunsArray[0].classList.remove('hidden');
                 }
            }
        
            barsSolid.addEventListener('click', () => albuns(true));
            xmarkSolid.addEventListener('click', () => albuns(false)); 
            
        })
    }if(boxAlbunsArray[1]){
        boxAlbunsArray[1].addEventListener('click', () => {
            album()
            musicAlbunsArray[1].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[1].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    
    }if(boxAlbunsArray[2]){
        boxAlbunsArray[2].addEventListener('click', () => {
            album()
            musicAlbunsArray[2].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[2].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    
    }if(boxAlbunsArray[3]){
        boxAlbunsArray[3].addEventListener('click', () => {
            album()
            musicAlbunsArray[3].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[3].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[4]){
        boxAlbunsArray[4].addEventListener('click', () => {
            album()
            musicAlbunsArray[4].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[4].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[5]){
        boxAlbunsArray[5].addEventListener('click', () => {
            album()
            musicAlbunsArray[5].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[5].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[6]){
        boxAlbunsArray[6].addEventListener('click', () => {
            album()
            musicAlbunsArray[6].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[6].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[7]){
        boxAlbunsArray[7].addEventListener('click', () => {
            album()
            musicAlbunsArray[7].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[7].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[8]){
        boxAlbunsArray[8].addEventListener('click', () => {
            album()
            musicAlbunsArray[8].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[8].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[9]){
        boxAlbunsArray[9].addEventListener('click', () => {
            album()
            musicAlbunsArray[9].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[9].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[10]){
        boxAlbunsArray[10].addEventListener('click', () => {
            album()
            musicAlbunsArray[10].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[10].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[11]){
        boxAlbunsArray[11].addEventListener('click', () => {
            album()
            musicAlbunsArray[11].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[11].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[12]){
        boxAlbunsArray[12].addEventListener('click', () => {
            album()
            musicAlbunsArray[12].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[12].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[13]){
        boxAlbunsArray[13].addEventListener('click', () => {
            album()
            musicAlbunsArray[13].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[13].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[14]){
        boxAlbunsArray[14].addEventListener('click', () => {
            album()
            musicAlbunsArray[14].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[14].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[15]){
        boxAlbunsArray[15].addEventListener('click', () => {
            album()
            musicAlbunsArray[15].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[15].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[16]){
        boxAlbunsArray[16].addEventListener('click', () => {
            album()
            musicAlbunsArray[16].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[16].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[17]){
        boxAlbunsArray[17].addEventListener('click', () => {
            album()
            musicAlbunsArray[17].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[17].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }if(boxAlbunsArray[18]){
        boxAlbunsArray[18].addEventListener('click', () => {
            album()
            musicAlbunsArray[18].classList.remove('hidden');
    
         function albuns(visivel){
             if(visivel){
                 sectionClip2.classList.add('hidden');           
             }else {
                 album();
                 musicAlbunsArray[18].classList.remove('hidden');
                }
            }
    
        barsSolid.addEventListener('click', () => albuns(true));
        xmarkSolid.addEventListener('click', () => albuns(false));
    
    })
    }
})();
// --------------------------------


//------------ Section three-------
(function sectionThree(){

    const radioArray = [
        document.getElementById('radio-1'),
        document.getElementById('radio-2'),
        document.getElementById('radio-3'),
        document.getElementById('radio-4'),
        document.getElementById('radio-5'),
        document.getElementById('radio-6'),
        document.getElementById('radio-7'),
        document.getElementById('radio-8'),
        document.getElementById('radio-9'),
        document.getElementById('radio-10'),
        document.getElementById('radio-11'),
        document.getElementById('radio-12'),
        document.getElementById('radio-13'),
        document.getElementById('radio-14'),
        document.getElementById('radio-15'),
        document.getElementById('radio-16'),
        document.getElementById('radio-17'),
        document.getElementById('radio-18'),
        document.getElementById('radio-19'),
        document.getElementById('radio-20')
    ];
    
    const boxRadioArray = [
        document.getElementById('box-radio-1'),
        document.getElementById('box-radio-2'),
        document.getElementById('box-radio-3'),
        document.getElementById('box-radio-4'),
        document.getElementById('box-radio-5'),
        document.getElementById('box-radio-6'),
        document.getElementById('box-radio-7'),
        document.getElementById('box-radio-8'),
        document.getElementById('box-radio-9'),
        document.getElementById('box-radio-10'),
        document.getElementById('box-radio-11'),
        document.getElementById('box-radio-12'),
        document.getElementById('box-radio-13'),
        document.getElementById('box-radio-14'),
        document.getElementById('box-radio-15'),
        document.getElementById('box-radio-16'),
        document.getElementById('box-radio-17'),
        document.getElementById('box-radio-18'),
        document.getElementById('box-radio-19'),
        document.getElementById('box-radio-20')
    ];
    
    function radio() {
        section1.classList.add('hidden');
        section2.classList.add('hidden');
        section3.classList.add('hidden');
        sectionClip1.classList.add('hidden');
    
        sectionClip3.classList.remove('hidden');
    }

    if(radioArray[0]){

        radioArray[0].addEventListener('click', () => {
            radio();
            boxRadioArray[0].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[0].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[1]){

        radioArray[1].addEventListener('click', () => {
            radio();
            boxRadioArray[1].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[1].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[2]){

        radioArray[2].addEventListener('click', () => {
            radio();
            boxRadioArray[2].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[2].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[3]){

        radioArray[3].addEventListener('click', () => {
            radio();
            boxRadioArray[3].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[3].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[4]){

        radioArray[4].addEventListener('click', () => {
            radio();
            boxRadioArray[4].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[4].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[5]){

        radioArray[5].addEventListener('click', () => {
            radio();
            boxRadioArray[5].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[5].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[6]){

        radioArray[6].addEventListener('click', () => {
            radio();
            boxRadioArray[6].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[6].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[7]){

        radioArray[7].addEventListener('click', () => {
            radio();
            boxRadioArray[7].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[7].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[8]){

        radioArray[8].addEventListener('click', () => {
            radio();
            boxRadioArray[8].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[8].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[9]){

        radioArray[9].addEventListener('click', () => {
            radio();
            boxRadioArray[9].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[9].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[10]){

        radioArray[10].addEventListener('click', () => {
            radio();
            boxRadioArray[10].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[10].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[11]){

        radioArray[11].addEventListener('click', () => {
            radio();
            boxRadioArray[11].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[11].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[12]){

        radioArray[12].addEventListener('click', () => {
            radio();
            boxRadioArray[12].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[12].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[13]){

        radioArray[13].addEventListener('click', () => {
            radio();
            boxRadioArray[13].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[13].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[14]){

        radioArray[14].addEventListener('click', () => {
            radio();
            boxRadioArray[14].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[14].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[15]){

        radioArray[15].addEventListener('click', () => {
            radio();
            boxRadioArray[15].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[15].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[16]){

        radioArray[16].addEventListener('click', () => {
            radio();
            boxRadioArray[16].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[16].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[17]){

        radioArray[17].addEventListener('click', () => {
            radio();
            boxRadioArray[17].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[17].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[18]){

        radioArray[18].addEventListener('click', () => {
            radio();
            boxRadioArray[18].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[18].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    } if(radioArray[19]){

        radioArray[19].addEventListener('click', () => {
            radio();
            boxRadioArray[19].classList.remove('hidden');
        
            function rad(visivel){
                if(visivel){
                    sectionClip3.classList.add('hidden');           
                }else {
                   radio()
                   boxRadioArray[19].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => rad(true));
           xmarkSolid.addEventListener('click', () => rad(false));
        
        })

    };
    
})();
// --------------------------------

// -----------Section Four---------

(function sectionFour(){

    const destaqueArray = [
        document.getElementById('destaque-1'),
        document.getElementById('destaque-2'),
        document.getElementById('destaque-3'),
        document.getElementById('destaque-4'),
        document.getElementById('destaque-5'),
        document.getElementById('destaque-6')
    ];
    
    const boxDestaqueArray = [
        document.getElementById('box-destaque-1'),
        document.getElementById('box-destaque-2'),
        document.getElementById('box-destaque-3'),
        document.getElementById('box-destaque-4'),
        document.getElementById('box-destaque-5'),
        document.getElementById('box-destaque-6')
    ];
    
    function destaque() {
        section1.classList.add('hidden');
        section2.classList.add('hidden');
        section3.classList.add('hidden');
        section4.classList.add('hidden');
        sectionClip1.classList.add('hidden');
    
        sectionClip4.classList.remove('hidden');
    }
    
    
    if(destaqueArray[0]){
        destaqueArray[0].addEventListener('click', () => {
            destaque()
            boxDestaqueArray[0].classList.remove('hidden');
    
            function dest(visivel){
                if(visivel){
                    sectionClip4.classList.add('hidden');           
                }else {
                    destaque()
                    boxDestaqueArray[0].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => dest(true));
           xmarkSolid.addEventListener('click', () => dest(false));
    
        });
    
    } if(destaqueArray[1]){
        destaqueArray[1].addEventListener('click', () => {
            destaque()
            boxDestaqueArray[1].classList.remove('hidden');
    
            function dest(visivel){
                if(visivel){
                    sectionClip4.classList.add('hidden');           
                }else {
                    destaque()
                    boxDestaqueArray[1].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => dest(true));
           xmarkSolid.addEventListener('click', () => dest(false));
    
        });
    
    } if(destaqueArray[2]){
        destaqueArray[2].addEventListener('click', () => {
            destaque()
            boxDestaqueArray[2].classList.remove('hidden');
    
            function dest(visivel){
                if(visivel){
                    sectionClip4.classList.add('hidden');           
                }else {
                    destaque()
                    boxDestaqueArray[2].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => dest(true));
           xmarkSolid.addEventListener('click', () => dest(false));
    
        });
    
    } if(destaqueArray[3]){
        destaqueArray[3].addEventListener('click', () => {
            destaque()
            boxDestaqueArray[3].classList.remove('hidden');
    
            function dest(visivel){
                if(visivel){
                    sectionClip4.classList.add('hidden');           
                }else {
                    destaque()
                    boxDestaqueArray[3].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => dest(true));
           xmarkSolid.addEventListener('click', () => dest(false));
    
        });
    
    } if(destaqueArray[4]){
        destaqueArray[4].addEventListener('click', () => {
            destaque()
            boxDestaqueArray[4].classList.remove('hidden');
    
            function dest(visivel){
                if(visivel){
                    sectionClip4.classList.add('hidden');           
                }else {
                    destaque()
                    boxDestaqueArray[4].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => dest(true));
           xmarkSolid.addEventListener('click', () => dest(false));
    
        });
    
    } if(destaqueArray[5]){
        destaqueArray[5].addEventListener('click', () => {
            destaque()
            boxDestaqueArray[5].classList.remove('hidden');
    
            function dest(visivel){
                if(visivel){
                    sectionClip4.classList.add('hidden');           
                }else {
                    destaque()
                    boxDestaqueArray[5].classList.remove('hidden');
                }
           }
        
           barsSolid.addEventListener('click', () => dest(true));
           xmarkSolid.addEventListener('click', () => dest(false));
    
        });
    
    }; 

})();

// --------------------------------
