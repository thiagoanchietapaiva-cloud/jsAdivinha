let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let palpiteBia = (Math.random() * 100).toFixed();
let bia = document.querySelector("#bia");

function receberPalpite(input) {
    if (palpites.length < 5) {
        for (let i = 0; i > palpites.length; i++) {
            if (input.value == palpites[i]) {
                alert("Escolha um numero não utilizado!");
                input.value = "";
                return;
            }
        }
        if (input.value > palpiteBia) {
            alert("Numero de bia é um numero menor")
        } else if (input.value < palpiteBia) {
            alert("Numero de bia é um numero maior")
        } else {
            bia.src = "assets/biaFeliz.png"
        }

    palpites.push(input.value);
    input.value = "";
    textoPalpites.innerHTML = palpites.join("-");
    }   else {
    alert("suas chances acabaram");
    palpites = [];
    textoPalpites.innerHTML = "";
    input.value = "";

 }
}
