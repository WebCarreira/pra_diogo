const input = document.getElementById("ufcdInput");
const botao = document.getElementById("searchBtn");
const erro = document.getElementById("erroMsg");

function pesquisarUFCD() {
    const valor = input.value.trim();
    erro.style.display = "none";

    if (valor === "") {
        erro.textContent = "Introduza um número de UFCD.";
        erro.style.display = "block";
        return;
    }

    if (ufcds.hasOwnProperty(valor)) {
        window.location.href = ufcds[valor];
    } else {
        erro.textContent = "UFCD não encontrada.";
        erro.style.display = "block";
    }
}

botao.addEventListener("click", pesquisarUFCD);

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        pesquisarUFCD();
    }
});