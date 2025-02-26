const buscar = document.getElementById('buscar');
const ind =  document.getElementById('ind')
const pag3 = 'input.html'
const pagHome = '../../index.html';
const loading = document.getElementById('loader')
buscar.addEventListener('click', () => {
    location.href = pag3
});

function loadingShow(){
    loading.classList.remove('hidden')
}

function loadingOcult(){
    loading.classList.add('hidden')
}
function load() {
    loadingShow()

    setTimeout(() => {
        loadingOcult()
    }, 3000)
}

// Função para detectar pressionamento da tecla Backspace
// document.addEventListener('pop', function(event) {
//     ind.classList.add('hidden')    
//     if (event.key === 'Backspace') {
//         load()
      
//       // Redireciona para o index principal
//       location.href = pagHome;
      
//     }
// });

// window.addEventListener('popstate', () => {
//     ind.classList.add('hidden');        
//     load();
//     alert("ola")
// });



document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {

        alert("Você pressionou voltar ou mudou de aba!");
        ind.classList.add("hidden");        
        load();
        location.href = pagHome
    }
});


