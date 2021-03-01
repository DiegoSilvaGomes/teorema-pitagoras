let catOposto = document.querySelector('#catOposto');
let catAdjacente = document.querySelector('#catAdjacente');
let resultado = document.querySelector('.resultado');

function hipot() {
    let hipotenusa = Math.hypot(catOposto.value, catAdjacente.value)
    resultado.innerHTML = `Hipotenusa = ${hipotenusa}`
}

