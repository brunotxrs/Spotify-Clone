const buscar = document.getElementById('buscar');
const ind =  document.getElementById('ind')
const pag3 = 'input.html'
const pag1 = '/index.html'
const loading = document.getElementById('loader')
buscar.addEventListener('click', () => {
    location.href = pag3
});

// function loadingShow(){
//     loading.classList.remove('hidden')
// }

// function loadingOcult(){
//     loading.classList.add('hidden')
// }
// function load() {
//     loadingShow()

//     setTimeout(() => {
//         loadingOcult()
//     }, 3000)
// }

// Função para detectar pressionamento da tecla Backspace
// document.addEventListener('keydown', function(event) {
//     ind.classList.add('hidden')    
//     if (event.key === 'Backspace') {
//         load()
      
//       // Redireciona para o index principal
//       location.assign(pag1);
      
//     }
// });
