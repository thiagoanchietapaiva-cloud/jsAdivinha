let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let bia = document.querySelector("#bia");

let areaJogo = document.querySelector("#areaJogo");
let msgAcertou = document.querySelector("#msgAcertou");
let msgErrou = document.querySelector("#msgErrou");
let numeroCertoAcertou = document.querySelector("#numeroCertoAcertou");
let numeroCertoErrou = document.querySelector("#numeroCertoErrou");
let btnJogarDeNovo = document.querySelector("#btnJogarDeNovo");

let palpiteBia = Math.floor(Math.random() * 101);
console.log("BIA PENSOU:", palpiteBia);

function receberPalpite(input) {
    let chute = Number(input.value);
    if (input.value === "" || isNaN(chute)) return;

    if (palpites.includes(chute)) {
        alert("Escolha um numero não utilizado!");
        input.value = "";
        return;
    }

    // Quando acerta mostra a imagem q ja esta por tras 

    if (chute === palpiteBia) {
        bia.src = "./assets/biaFeliz.png";
        numeroCertoAcertou.textContent = palpiteBia;
        msgAcertou.classList.remove("hidden");
        areaJogo.classList.add("hidden");
        btnJogarDeNovo.classList.remove("hidden");
        palpites.push(chute);
        textoPalpites.innerHTML = palpites.join(" - ");
        return;
    }

    palpites.push(chute);
    textoPalpites.innerHTML = palpites.join(" - ");

    if (chute > palpiteBia) {
        alert("Numero da Bia é um numero menor");
    } else {
        alert("Numero da Bia é um numero maior");
    }

    input.value = "";

    // Quando erra aaparece a imagem e some o imput 

    if (palpites.length >= 5) {
        bia.src = "./assets/biaTriste.png";
        numeroCertoErrou.textContent = palpiteBia;
        msgErrou.classList.remove("hidden");
        areaJogo.classList.add("hidden");
    }
}

function resetarJogo() {
    palpites = [];
    textoPalpites.innerHTML = "";
    document.getElementById("campo").value = "";
    msgAcertou.classList.add("hidden");
    msgErrou.classList.add("hidden");
    areaJogo.classList.remove("hidden");
    btnJogarDeNovo.classList.add("hidden");
    bia.src = "./assets/biaPensa.png";
    palpiteBia = Math.floor(Math.random() * 101);
    console.log("NOVO:", palpiteBia);
}