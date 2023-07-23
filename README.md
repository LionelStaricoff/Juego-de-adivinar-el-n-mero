## Juego de adivinar el número
<h2> Juego  realizado en js, html y css </h2>
<pre>Se utiliza manipulación del Dom  para traer los elementos del HTML
     y guardarlo en una variable.
     
     traer el botón:
     <p><code> let boton = document.querySelector("#boton"); </code></p>
     Traer el input:
     <p><code> let input = document.querySelector("#dato"); </code></p>
     
   Traer todos los parrafos y guardardarlos en un arreglo:
   <p><code> let pElegir = document.querySelectorAll("p"); </code></p></pre>
 
 <h2>Se inicializa el juego haciendo click en el botón <code> boton.addEventListener("click", adivinar); </code></h2>
 <pre>La funcion adivinar genera un número aleatoreo y lo guarda en la       variable <code>numeroRandom</code>,
toma el valor del input y lo convierte a número, lego verifica si el dato esta entre la lista del 1 al 10 con la funcion <code>verificarnumeros(dato)</code>.
Si todo esta corrcto toma el valor del primer parrafo setea sus valores por defecto y ejecuta la funcion <code>numeroAnimado();</code>. Esta funcion realiza una animacion colocando dentro des parrafo un conteo del 1 al 10 y regresa hasta el número realizado de forma aleatorea.
Por último verifica si el número aleatorio es igual al número colocado en el input y coloca en el segundo párrafo ganaste o perdiste según corresponda con un lapso temporal con la función <code>setTimeout("numeroAnimado()", 500);</code>.</pre>
 
<br>

<h2><code> boton.addEventListener("mouseout", rotarDardoInicial); </code> </h2>
<pre>Esta función sirve parra hacer funcionar el evento del ratón cuando sale fuera del botón y regresar la imagen del dardo al número inicial 1</pre>
  
<br>
<h2><code> boton.addEventListener("click", rotarDardo); </code></h2>
<pre>Por ultimo esta función verifica el número aleatorio que salio y cambia la clase de la imagen flecha para que la rote según el número<pre>

<h2><a href="https://www.youtube.com/watch?v=kiGmv0H6KMs"> Mira como fnciona: <img src="https://github.com/LionelStaricoff/conversor/blob/main/youtube.png?raw=true" width="100" height="100"> </a></h2> 


<p>&copy <a href="https://linkedin.com/in/lionel-staricoff">[Website](https://linkedin.com/in/lionel-staricoff)https://linkedin.com/in/lionel-staricoff</a> </p>
   
