

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;



function asignartextElemnto(elemento, text) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = text;
    return;

}

function verificarIntento() {
    let numerousuario = parseInt(document.getElementById('valorUsuario').value);

    if (numerousuario === numeroSecreto) {
        asignartextElemnto('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numerousuario > numeroSecreto) {
            asignartextElemnto('p', 'el numero secreo es menor')
        } else {
            asignartextElemnto('p', 'el numero secreto es mayor')
        }

        intentos++;
        limpiarCaja();
    }

    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


//recursividad
function generarNumerosSecretos() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si el numero generado esta en la lista
    // recorre la lista y verifica que el valor este en la lista includes()
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignartextElemnto('p', 'ya se sortearon todos los numeros')
    } else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            //return generarNumerosSecretos();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
        }
    }
}



function condicionesIniciales() {
    asignartextElemnto('h1', 'Juego del numero secreto');
    asignartextElemnto('p', `ingrese un numero entre 1 y ${numeroMaximo}`)
    numeroSecreto = generarNumerosSecretos();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    condicionesIniciales()
    //generer el numero aleatorio

    //deshabilitar el boton de nuevo juego
    //inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}
condicionesIniciales();


