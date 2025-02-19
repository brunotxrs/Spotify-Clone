const buscar = document.getElementById('buscar');
const bc = document.getElementById('bc');
const inputOuca = [
    document.getElementById('input'),
    document.getElementById('ouca')
]

const back = document.getElementById('back');
const digitar = document.getElementById('digitar');
const outros = document.getElementById('outros');
const navegar = document.getElementById('navegar');
const clean = document.getElementById('clean');
const container = document.getElementById('container')

buscar.addEventListener('click', () => {
    bc.classList.add('ocult');
    inputOuca.forEach((element) => {
        element.classList.remove('ocult')
    });
});

back.addEventListener('click', () => {
    location.reload()
});

function callApi(buscar){
    const url = `http://localhost:3000/artistas?name_like=${buscar}`;

    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))

}

// função de fazer o objeto da api aparecer 
function displayResults(result){
    outros.classList.remove('ocult');
    inputOuca[1].classList.add('ocult');
    navegar.classList.add('ocult');
    clean.classList.remove('ocult')

    const name = document.getElementById('name');
    const img = document.getElementById('img');

    result.forEach(element => {
        name.innerText = element.nome;
        img.src = element.urlImg;
    });

    container.classList.remove('hidd');
    
}


// quando houver ação de digita 
document.addEventListener('input', () => {

    const search = digitar.value.toLowerCase();

    if(search === ''){
        outros.classList.add('ocult');
        inputOuca[1].classList.remove('ocult');
        navegar.classList.remove('ocult');
        clean.classList.add('ocult');
        
        return;
    }

    // chamando a api
    callApi(search)

    
});

// limpar o input apos clicar o botão de limpar 
clean.addEventListener('click', () => {

    digitar.value = ''
    clean.classList.add('ocult');
    container.style.display = 'none'

    outros.classList.add('ocult');
    inputOuca[1].classList.remove('ocult');
    navegar.classList.remove('ocult');
    clean.classList.add('ocult');

});
