const buscar = document.getElementById("buscar");
const ind = document.getElementById("ind");
const pag3 = "input.html";
const pagHome = "../../index.html";
const loading = document.getElementById("loader");

buscar.addEventListener("click", () => {
    location.href = pag3;
});

function loadingShow() {
    loading.classList.remove("hidden");
}

function loadingOcult() {
    loading.classList.add("hidden");
}

function load(callback) {
    loadingShow();
    setTimeout(() => {
        loadingOcult();
        if (callback) callback();
    }, 2000); 
}


document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        ind.classList.add("hidden");        
        load(() => {
            location.href = pagHome;
        });
    }
});


