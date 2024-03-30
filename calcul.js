const som = document.getElementById('display');

function somme(input) {
    som.value += input;
}

function clear() {
    som.value = '';
}

function calcul() {
    som.value = eval(som.value);
}
