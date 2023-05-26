function jugar(){
    let dato =parseInt( document.querySelector("#input").value );

    let datoAleatoreo = Math.round( Math.random()*10);
    let respuesta = document.querySelector("p");

    if(dato == datoAleatoreo){
     respuesta.innerHTML = "Ganaste!!!";
    }else{
        respuesta.innerHTML = "perdiste!! tu número es: "+ dato + " y el número era: "+datoAleatoreo;
    }
}

let boton = document.querySelector("#button");


boton.onclick = jugar;