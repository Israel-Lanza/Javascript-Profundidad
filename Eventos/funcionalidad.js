//Evento --- Los eventos son las cosas que suceden, que ocurre, cuando el usuario interactua con la pagina. Click a un boton, mover el raton, escribir en un formulario, escribir en el teclado, cada accion
//del usuario en js tiene su evento correspondiente. Será cualquier tipo de interacción
//Se puede capturar esos eventos y ejecutar una funcion haciendo la logica cuando suceda el evento


//Escuchador de eventos. Lo necesitamos para escuchar los eventos. Será como ponerle "orejas", por ejemplo a un boton se las pondremos para escuchar cuando el usuario hace click en ese botón y luego hacer nuestra funcionalidad

//<<<<<<<<<<---------------------Eventos de Raton-------------------->>>>>>>>>>>>> !!!Cuidado!! Los nombres de los eventos tienen que ir todos en minusculas

//Evento click

let boton = document.querySelector("#botoncillo");
//console.log(boton);


/*boton.addEventListener("click" , function(){
    alert("Haz dado click");
});*/


/*Estructura de los eventos. Asi funcionan la mayoría, que no todas: 
1- Seleccionamos un elemento del dom (let boton = document.querySelector("#botoncillo");)
2- Le ponemos a escuchar un evento (boton.addEventListener)
3- Le decimos el nombre del evento que queremos ("click")
4- Ejecutamos la función con la funcionalidad dentro (function(){
    alert("Haz dado click");
});)
*/

//Cada vez que se captura un evento se genera el objeto event que contiene la información de lo que ha pasado con ese evento (que tecla se presiono, donde hizo click el usuario, etc)

boton.addEventListener("click" , function(event){/*Para conseguir ese objeto/variable dentro de la propia funcion se le pasa un parametro (en este caso event pero como quieras llamarle)
    y asi capturaremos el propio evento*/
    alert("Haz dado click");
    console.log(event);//en la consola veremos el objeto event con toda la información relacionada con el evento
});



//Evento doble click

let botonDoble = document.querySelector("#botonDoble");

botonDoble.addEventListener("dblclick", function(){
    alert("Haz dado dos clicks");
});


//Mouse Over

let cajaTexto = document.querySelector("#cajaTexto");

cajaTexto.addEventListener("mouseover", function(){
    console.log("Haz pasado por encima de la textarea");
});



//Mouse Out

cajaTexto.addEventListener("mouseout",function(){
    console.warn("Has salido de la textarea");
});


//mouse move
cajaTexto.addEventListener("mousemove",function(){
    console.error("Te estas moviendo dentro de la textarea");
});




//<<<<<<<<<<---------------------Eventos de Teclado-------------------->>>>>>>>>>>>>

let campoTexto = document.querySelector("#campoTexto");

campoTexto.addEventListener("keydown", function(event){//al presionar alguna tecla

    console.log("Has presionado la tecla: " + event.key); //Aqui lo que hacemos es recoger el evento y mostrar por consola la tecla que hemos apretado. Saldrán todas las teclas que pulsemos

});

campoTexto.addEventListener("keyup", function(event){//al levantar la tecla

    console.warn("Has soltado la tecla: " + event.key);

});

campoTexto.addEventListener("keypress", function(event){//cuando mantiene pulsada la tecla. El recomendable es usar el keydown

    console.error("Estas manteniendo pulsada la tecla: " + event.key);

});




//<<<<<<<<<<---------------------Eventos de formulario-------------------->>>>>>>>>>>>>

let superformulario = document.querySelector("#superformulario");//Accedemos al elemento que contiene este id, en este caso el formulario

superformulario.addEventListener("submit", function(event){//le ponemos a la escucha cuando lo envie, osea cuando aprete el boton de enviar

    event.preventDefault(); //Evitamos el comportamiento por defecto del formulario(osea se evita el refrescar la pagina al enviar datos)

    let nombre = document.querySelector("#nombre").value; //Aqui recogemos valores del input con el id nombre 
    let correo = document.querySelector("#email").value; //Aqui recogemos valores del input con el id email 
    let genero = document.querySelector("#genero").value; //Aqui recogemos valores del input con el id genero

    alert(nombre); //sacamos por pantalla emergente los valores recogidos
    alert(correo);
    alert(genero);
});


//Otra forma de obtener valores del input
let inputNombre = document.querySelector("#nombre");

/*
///como this no puede acceder ya que en las funciones callback no se puede comentare esta parte pero para que se vea la funcion callback y la explicación del this
inputNombre.addEventListener("input", () => { //funcion callback (mirar aqui para mas info : https://www.freecodecamp.org/espanol/news/funciones-callback-en-javascript-que-son-los-callback-en-js-y-como-usarlos/)

    console.log("El usuario ha escrito: "+this.value); //this referencia al objeto padre osea en este caso al inputNombre. Si fuese en una clase referencia a la clase
    console.log("El usuario ha escrito: "+inputNombre.value) //Con esto nos vale. quitar la linea de arriba y dejar esta. 
});
*/

inputNombre.addEventListener("input", function(){ 

    console.log("El usuario ha escrito: "+this.value); //this referencia al objeto padre osea en este caso al inputNombre. Si fuese en una clase referencia a la clase

});



//Evento change
let selectGenero = document.querySelector("#genero");

selectGenero.addEventListener("change", function(){//Cuando el valor cambie, en este caso en el select de genero

    console.warn("Has cambiado el select a: "+this.value);

});


