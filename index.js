let boton = document.querySelector("#boton");
let input = document.querySelector("#dato");
let pElegir = document.querySelectorAll("p");
let iteradorNumeroAnimado = 0;
let numeroRandom = 0;

function adivinar() {
    numeroRandom = Math.round(Math.random() * 10);
    let dato = parseInt(input.value);

    if (verificarnumeros(dato)) {
        pElegir[1].innerText = "Elige un número del 1 al 10 ";
        pElegir[1].style.color = "white";
        pElegir[1].style.fontSize = "2em";
        numeroAnimado();
    } else {
        pElegir[1].innerText = "Ingrese solo 1 numero del 1 al 10"
        pElegir[1].style.color = "red";
        pElegir[1].style.fontSize = "3em";
    }
    setTimeout( "ganastePerdiste()",13000);
   
}

//verifica que sean numeros del 1 al 10 regresa true
function verificarnumeros(dato) {
    let pattern =[1,2,3,4,5,6,7,8,9,10];
    let result = pattern.includes(dato);
    return result;
}


function ganastePerdiste() {
   
     let   numeber = (numeroRandom == parseInt(input.value))?" ganaste" : " perdiste ";
    pElegir[1].innerText = numeber
    pElegir[1].style.color = "orange";
}

function numeroAnimado() {
    pElegir[0].innerText = iteradorNumeroAnimado++;
    const myTimeout = setTimeout("numeroAnimado()", 500);
    if (iteradorNumeroAnimado > 10) {
        clearTimeout(myTimeout);

    }
    if (iteradorNumeroAnimado > 10) {
        numeroAnimadoParar();
    }
}

function numeroAnimadoParar() {

    pElegir[0].innerText = iteradorNumeroAnimado--;
    const myTimeout2 = setTimeout("numeroAnimadoParar()", 1000);
    if (iteradorNumeroAnimado < numeroRandom) {

        clearTimeout(myTimeout2);

    }
}

function rotarDardo(){
    const dardo = document.querySelector("img");
    dardo.className = "rotar"+ numeroRandom;
    ;
    
}

function rotarDardoInicial(){
    const dardo = document.querySelector("img");
    dardo.className = "rotarInicial";
  
}

boton.addEventListener("click", adivinar);
boton.addEventListener("mouseout", rotarDardoInicial);
boton.addEventListener("click", rotarDardo);
