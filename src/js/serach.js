const buscar = document.getElementById('buscar')
const bc = document.getElementById('bc')
const inputOuca = [
    document.getElementById('input'),
    document.getElementById('ouca')
]

const back = document.getElementById('back');
const digitar = document.getElementById('digitar')
const outros = document.getElementById('outros')


buscar.addEventListener('click', () => {
    bc.classList.add('ocult');
    inputOuca.forEach((element) => {
        element.classList.remove('ocult')
    })
});

back.addEventListener('click', () => {
    bc.classList.remove('ocult');
    outros.classList.add('ocult');
    inputOuca.forEach((element) => {
        element.classList.add('ocult')
    })

})

digitar.addEventListener('input', () => {
    outros.classList.remove('ocult');
    inputOuca[1].classList.add('ocult')


})