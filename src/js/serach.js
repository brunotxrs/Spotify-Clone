const buscar = document.getElementById('buscar');
const ind =  document.getElementById('ind')
const pag3 = 'input.html'
const pagHome = '../../index.html'
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


document.addEventListener('DOMContentLoaded', () => {
    // Garante que o histórico tenha um estado inicial para capturar o botão de voltar
    history.pushState(null, null, location.href);

    window.addEventListener('popstate', function (event) {
        ind.classList.add('hidden'); // Esconde o elemento
        
        load(); // Chama a função que deseja executar

        // Redireciona para a página principal
        location.href = pagHome;

        // Mantém o usuário na página atual (evita voltar para a anterior)
        history.pushState(null, null, location.href);
    });
});
