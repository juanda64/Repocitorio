console.log("listo");
const btncontar = document.getElementById("btncontar");
const txtSalida = document.getElementById("txtSalida");
btncontar.addEventListener("click", precionado);

const txtInput = document.getElementById("Input");
const txtSalida1 = document.getElementById("txtSalida1");
const btnLeer = document.getElementById("btnLeer");
btnLeer.addEventListener("click", LeerEsccribir);

const NumInput = document.getElementById("NumInput");
const txtSalida2 = document.getElementById("txtSalida2");
const btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", Multiplo3);

const txtCifrar = document.getElementById("txtCifrar");
const txtSalida3 = document.getElementById("txtSalida3");
const btnCifrar = document.getElementById("btnCifrar");
btnCifrar.addEventListener("click", CifrarTxt);

const txtNota = document.getElementById("txtNota");
const txtPalabra = document.getElementById("txtPalabra");
const txtLetra = document.getElementById("txtLetra");
const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", Ahorcado);

let contar = 0;
function precionado() {
    console.log("precionado");
    contar += 1;
    txtSalida.innerText = contar;
}

function LeerEsccribir() {
    txtSalida1.innerText = txtInput.value;
}

function Multiplo3() {
    var num = parseInt(NumInput.value);
    if (num % 3 === 0) {
        txtSalida2.innerText = num + " es multiplo de 3";
    } else {
        txtSalida2.innerText = num + " NO es multiplo de 3";
    }

}

function CifrarTxt() {
    const vowelMapping = {
        'a': 'x',
        'e': 'y',
        'i': 'z',
        'o': 'w',
        'u': 'k'
    };
    var txt = txtCifrar.value
    const txtCifrado = txt
        .toLowerCase() // Convertir todo a minúsculas para manejar las vocales sin importar el caso
        .replace(/[aeiou]/g, match => vowelMapping[match] || match) // Reemplazar las vocales según el mapeo
        .replace(/\s/g, ''); // Eliminar espacios en blanco

    txtSalida3.innerText = txtCifrado;
}
const palabras = ["estructura", "cifrado", "prueba", "registro", "mapeo", "materia", "petroleo", "guitarra"];
var x = Math.floor(Math.random() * 7);
const PalabraSecreta = palabras[x];
let palabraActual = "_ ".repeat(PalabraSecreta.length);
var Intentos = 6;
txtNota.innerText = "Bienvenido al juego Ahorcado";
txtPalabra.innerText = "Ingrese la letra, tiene " + Intentos + " intentos";

function Ahorcado() {
    var letra = txtLetra.value.toLowerCase();
    
    if (PalabraSecreta.includes(letra)) {
        let palabraTemp = palabraActual.split('');
        for (var i = 0; i < PalabraSecreta.length; i++) {
            if (PalabraSecreta[i] === letra) {
                palabraTemp[i] = letra;
            }
        }
        palabraActual = palabraTemp.join('');
        txtNota.innerText = "Correcto, ha ingresado : " + letra + "\n intentos restantes: " + Intentos;
    } else {
        Intentos -= 1;
        txtNota.innerText = "Incorrecto, ha ingresado : " + letra + "\n intentos restantes: " + Intentos;
    }
    
    txtPalabra.innerText = palabraActual;
    
    if (Intentos == 0) {
        txtNota.innerText = "Has perdido, la palabra era: " + PalabraSecreta;
    } else if (!palabraActual.includes("_")) {
        txtNota.innerText = "Felicidades has adivinado la palabra";
    }
    txtLetra.value = "";
}


