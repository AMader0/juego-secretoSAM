let numerosecreto = 0;
console.log(numerosecreto);
let intentos = 0;
let listaNumeroSorteados = [];
let numeromaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

//Aquí se va a capturar lo que el usuario ingrese para que se compare con el valor aleatorio
function verificarIntentoUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    // console.log(numeroDeUsuario);
    //COMPARANDO VALORES -> devuelve un booleano = ture o false
    // console.log(numeroDeUsuario === numerosecreto);
    console.log(intentos);
    if (numeroDeUsuario === numerosecreto) {
        asignarTextoElemento(
            `p`,
            `Ganaste en ${intentos} ${intentos === 1 ? `vez` : `veces`}`
        );
        //para quitar el disabled del boton nuevo juegoo cuando se acierten los numeros
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numerosecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Hola mundo");
    asignarTextoElemento("p", `Ingresa un número de 1 al ${numeromaximo}`);

    //Genera el número secreto
    numerosecreto = generarNumeroSecroto();
    intentos = 1;
    //console.log(numerosecreto);
}

//Esta es una función recursiva
function generarNumeroSecroto() {
    let numeroGenerado = Math.floor(Math.random() * numeromaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    //Si ya salieron todos los numeros, cerramos el juego

    if (listaNumeroSorteados.length == numeromaximo) {
        asignarTextoElemento('p', 'Ya salieron todos los números, el juego ha terminado');
    } else {
        //Vamos a validar aquí si el número generado está incluido en la lista de los números que ya salieron
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            //Si está incluido, volvemos a generar otro número
            //Aquí usamos la función recursiva, que se llama a sí misma
            return generarNumeroSecroto();
        } else {
            //Si no está incluido, lo agregamos a la lista, con el metodo push
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();

    //Indicar mensaje de intervalo de número (ingresa un número de 1 al 10)
    condicionesIniciales();

    //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
