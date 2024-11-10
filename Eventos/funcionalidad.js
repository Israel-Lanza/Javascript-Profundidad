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



