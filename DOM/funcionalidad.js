//DOM (Document Object Model) Es el plano de todos los elementos que forman la pagina web
//Nos permite acceder a todas las etiquetas de la pagina 


//getElementById -Seleccionar elementos por su ID

let caja = document.getElementById("caja");

/*Modificar caracteristicas de un elemento seleccionado. En la variable caja esta guardado el elemento con el id=caja y con caja. accedemos a sus propiedades como vemos abajo*/ 
caja.innerHTML = "<h2>Hola soy Isra</h2>"; //El innerHTML lo pone como html y no como texto plano
/*propiedades de css en javascript
caja.style.background = "lightblue"; //pone de color de fondo del div con la clase caja de azul claro
caja.style.maxWidth = "50%"; //Le ponemos un ancho maximo
caja.style.margin = "0 auto"; //Le ponemos un margen a la caja
caja.style.padding = "35px"; //padding
caja.style.textAlign = "center"; //Lo alineamos al centro
caja.style.fontFamily = "Arial"; //Le cambiamos el tipo de fuente
*/

caja.classList.add("cajita");//Le añade al div, que ya tiene un id, una clase llamada cajita y asi accede al css y le cambia los estilos ya que lo tenemos referenciado en el css para aplicarle estilos
caja.classList.add("cajaza");
caja.classList.add("cajon");


/*caja.className = "cajaza cajon"   //Se pueden agregar clases al elemento seleccionado. Mejor usarlo para conocer las clases que tenemos dentro del DOM (en el elemento seleccionado)*/
console.log(caja.className);//Veremos que clases tiene el elemento


function cambiarColor(color, radius){ //Probar la llamada a la función en la consola y pasarle parametros para ver los cambios
    caja.style.background = color;
    caja.style.borderRadius = radius;
}


console.log(caja);
console.log(caja.innerText);//Lo pone en la consola como texto plano



//getElementsByClassName -- Nos permite seleccionar multiples elementos con una clase
/*
let articulos = document.getElementsByClassName("articulo"); //Nos devuelve un array con los elementos que tengan la clase articulo
console.log("Elementos con la clase articulo");
console.log(articulos);

for(var i = 0;i < articulos.length; i++){//Para recorrer el array y mostrar por consola todos los elementos que tenemos guardados en la variable articulos y para modificarlos
    ///console.log(articulos[i]);
    articulos[i].classList.add("articuloBase");

    articulos[i].innerHTML += "<a href='https://marca.com'>Leer mas</a>"//Añadir mas html

    ///Añadir un nodo del dom (añadir mas html)
    let enlace = document.createElement("a");//Creamos el elemento a añadir
    enlace.setAttribute("href", "https://google.com");//Le añadirmos un atributo, en este caso la dirección a la que queremos que vaya al clicar en el enlace. Se puede cambiar cualquier tipo de propiedad o atributo que tenga cualquier elemento del dom seleccionado
    enlace.setAttribute("target", "_blank");
    enlace.style.color = "green";


    let textoEnlace = document.createTextNode("Sigue leyendo");//Le añadimos el texto que tendra el enlace

    enlace.append(textoEnlace);//Aqui introducimos el texto dentro de la etiqueta a (que esta guardado en la variable enlace)
    articulos[i].append(enlace);//Y aqui introducimos lo anterior dentro de los elementos con las clases articulos (Que serán dentro de los articulos)


    if(i === 0){
        articulos[i].classList.add("articuloAmarillo");
    }

    if(i === articulos.length-1){//Para coger la ultima posicion 
        articulos[i].classList.add("articuloUltimo");

        articulos[i].innerHTML = "<h2>Sigue leyendo mas cosas en isra.com</h2>" //Al poner innerHTML le quita todo lo que tenia y le pone el valor puesto. Si quisiesemos mantener lo que teniamos y añadirle el h2 deberiamos poner +=
    }
}
*/

// getElementByTagName --- Nos permite seleccionar multiples elementos con el nombre de la etiqueta

let etiqueta = document.getElementsByTagName("article");
console.log(etiqueta[2].innerHTML);



// querySelector :RECOMENDABLE ----- Nos permite seleccionar un elemento, uno solo ya sea por clase, id, etiqueta

let seccionArticulos = document.querySelector("#articulos"); //Cogemos el elemento que tenga el id articulos

//seccionArticulos.style.background = "lightblue"; //Le cambiamos el color del fondo
seccionArticulos.style.padding = "40px";

console.log(seccionArticulos); 


//querySelector y clases

let primerArticulo = document.querySelector(".articulo"); //Selecciona el primer elemento con la clase articulo. Solo selecciona el primero
primerArticulo.style.borderRadius = "10px";

console.log(primerArticulo);


// querySelectorAll : RECOMENDABLE --- Nos permite seleccionar todos los elementos, todos los que coincidan con el selector css que le pasamos, nos devuelve una lista (array)

let articulo = document.querySelectorAll(".articulo"); //Selecciona tooodos los elementos con la clase articulo
/*let articulosEtiqueta = document.querySelector("#articulos > article")Imagina que queremos cogerlos por etiquetas (article) pero no queremos que el estilo afecte a todos los articles.
Como querySelector es un selector de css podriamos indicar que solo queremos las etiquetas que esten dentro de un elemento con el id #articulos e incluso seleccionar los atributos, etc al estilo de los selectores de css*/

//ForEach es recomendable si queremos pasar por todos los elementos si o si ya que al no permitir la interrupcion pasara por todos los elementos. Si queremos buscar algun valor y parar cuando lo encontremos el bucle for es el indicado
articulo.forEach((articulo, i) => { //forEach es un metodo de los arrays que se utiliza para iterar sobre los elementos de un array y ejecutar una función determinada en cada uno de los elementos. No tiene un contador y no permite la interrupcion o salto de iteración
    //para cada elemento con la clase articulo sacaremos por consola lo que tiene el elemento con esa clase. Hay varias porque coge varios elementos (si tuviesemos varios con la clase seleccionada)
    //Le pasamos la i para que actue como indice
    //console.log(articulo);

    articulo.classList.add("articuloBase");

    articulo.innerHTML += "<a href='https://marca.com'>Leer mas</a>"//Añadir mas html

    ///Añadir un nodo del dom (añadir mas html)
    let enlace = document.createElement("a");//Creamos el elemento a añadir
    enlace.setAttribute("href", "https://google.com");//Le añadirmos un atributo, en este caso la dirección a la que queremos que vaya al clicar en el enlace. Se puede cambiar cualquier tipo de propiedad o atributo que tenga cualquier elemento del dom seleccionado
    enlace.setAttribute("target", "_blank");
    enlace.style.color = "green";


    let textoEnlace = document.createTextNode("Sigue leyendo");//Le añadimos el texto que tendra el enlace

    enlace.append(textoEnlace);//Aqui introducimos el texto dentro de la etiqueta a (que esta guardado en la variable enlace)
    articulo.append(enlace);//Y aqui introducimos lo anterior dentro de los elementos con las clases articulos (Que serán dentro de los articulos)


    if(i === 0){
        articulo.classList.add("articuloAmarillo");
    }

    if(i === articulo.length-1){//Para coger la ultima posicion 
        articulo.classList.add("articuloUltimo");

        articulo.innerHTML = "<h2>Sigue leyendo mas cosas en isra.com</h2>" //Al poner innerHTML le quita todo lo que tenia y le pone el valor puesto. Si quisiesemos mantener lo que teniamos y añadirle el h2 deberiamos poner +=
    }

});




//MODIFICACIONES

const tarjeta = document.querySelector("#tarjeta");//Cogemos el elemento con el id tarjeta (#tarjeta--> es la forma de seleccionarlo por el id, como en css)

console.log(tarjeta);

tarjeta.textContent = "Contenido nuevo de mi tarjeta" //A parte de ver su contenido con textContent podemos cambiarle el contenido

tarjeta.innerHTML = "<strong>Contenido en HTML de mi tarjeta</strong>"; //Tambien podemos cambiarle el contenido de esta forma

tarjeta.setAttribute("data-id", 12); //Le agregamos con setAttribute un id con el valor 12
//tarjeta.setAttribute("class", "Hola que tal"); //Le agregamos la clase hola que tal que en verdad serán tres formas de llamar a esa clase por Hola, por que, y por tal. Tambien nos vale tarjeta.ClassName

console.log(tarjeta.getAttribute("id")); //para sacar el valor de, en este caso, el id. Nos valdria para cualquier atributo 

tarjeta.style.border = "1px solid blue";
tarjeta.style.backgroundColor = "steelblue";
tarjeta.style.padding = "30px";


tarjeta.classList.add("destacar2"); //Le añadimos una clase al elemento con el id #tarjeta

//eliminar contenido
tarjeta.classList.remove("destacar");//Eliminamos la palabra destacar en el elemento que hemos seleccionado

tarjeta.classList.remove("remarcado");

tarjeta.classList.toggle("small"); //con toggle agregamos el valor que le estamos indicando (small) si no existe. Si existe la elimina


//Añadir contenido y eliminar
const titular = document.createElement("h2"); //Creamos un elemento h2

titular.textContent = "Esta es la tarjeta";

//tarjeta.append(titular); //Agregaremos el contenido de titular (que es el h2 con el texto Esta es la tarjeta) dentro del elemento seleecionado (en este caso es tarjeta que sera el elemento con id tarjeta). Lo agrega al final
tarjeta.insertBefore(titular, tarjeta.firstChild);//seleccionamos el elemento con el id tarjeta que está guardado en la variable tarjeta, luego le decimos que inserte antes, para que no se ponga al final, el h2 (que es el elemento creado) y que se ponga antes que su primer hijo



//tarjeta.querySelector("strong").remove(); //Seleccionamos la etiqueta strong y la eliminamos de esta forma
