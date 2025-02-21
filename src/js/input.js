const back = document.getElementById('back');
const clean = document.getElementById('clean');
const digite = document.getElementById("digitar");

const outros = document.getElementById('outros');
const ouca = document.getElementById('ouca');
const navegar = document.getElementById('navegar');
const container = document.getElementById('container');
const loader = document.getElementById('loader')
back.addEventListener('click', () => {
    location.href = 'search.html';
});

function toggleElements(...elements) {
    elements.forEach(element => element.classList.toggle('ocult'));
}

function showAndOcult(){
    toggleElements(clean, outros, ouca, navegar);
    clean.addEventListener('click', () => {
        location.reload();
    });
}



function callApi() {
    const url = 'http://localhost:3000/artistas';
    const termoBusca = digite.value.toLowerCase().trim(); // Pegando o valor correto

    fetch(url)
        .then(response => {
            console.log("📡 Resposta da API recebida:", response);
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados");
            }
            return response.json();
        })
        .then(artistas => {
            console.log("📦 Todos os artistas recebidos:", artistas);

            if (!Array.isArray(artistas) || artistas.length === 0) {
                container.innerHTML = "<p>Nenhum artista encontrado.</p>";
                return;
            }

            // 🔍 Filtrando corretamente
            const artistasFiltrados = artistas.filter(artista =>
                artista.nome.toLowerCase().includes(termoBusca)
            );

            console.log("🎯 Artistas filtrados:", artistasFiltrados);

            if (artistasFiltrados.length === 0) {
                container.innerHTML = "<p>Nenhum artista encontrado.</p>";
                return;
            }

            // 🧹 Limpando container antes de adicionar novos artistas
            container.innerHTML = "";
            container.classList.remove('ocult'); // Exibindo o container

            // 🖼️ Criando elementos no DOM para cada artista encontrado
            artistasFiltrados.forEach(artista => {
                const div = document.createElement('div');
                const span = document.createElement('span');
                const img = document.createElement('img');
                const p = document.createElement('p');

                img.src = artista.urlImg;
                img.alt = artista.nome;
                p.textContent = artista.nome;

                div.classList.add('artista');
                span.classList.add('img_box');

                span.appendChild(img);
                span.appendChild(p);
                div.appendChild(span);
                container.appendChild(div); // Adicionando ao container
            });
        })
        .catch(error => console.error("❌ Erro na requisição:", error));
}

function loadingShow(){
    loader.classList.remove('hidden')
};

function loadingOcult(){
    loader.classList.add('hidden')
}

function loading(){
    loadingShow()
    setTimeout(() => {
        loadingOcult()
    },2000)
}


let timeout; // Variável para armazenar o tempo do debounce
// 📌 Evento para ativar a busca enquanto o usuário digita
digite.addEventListener('input', (event) => {
    showAndOcult();
    clearTimeout(timeout); // Cancela a chamada anterior
    loading()
    timeout = setTimeout(() => {
        console.log("📝 Digitado:", event.target.value);
        callApi();
    }, 2000); // Aguarda 200ms antes de chamar a API
});

