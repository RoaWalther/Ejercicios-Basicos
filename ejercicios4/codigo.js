

const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable","true");
titulo.setAttribute("dir","rtr");
titulo.setAttribute("hidden","true");
titulo.setAttribute("removeAttribute","false");

const input = document.querySelector(".input-normal");

document.write(input.className);
document.write(input.value);
input.type = "file";//cambia el tipo de caja
input.accept= "image/gif";//es para dra accesoa a solo gif o png o jpg
input.form ="id del formulario"// se utiliza si unboton esta por fuera del form.
input.minLength= 10; //defini la minima cantidad de caracteres a enviar
input.placeholder ="hola mundo";
input.required = "required";//campo requerido


//atribute style

const titulo1 = document.querySelector(".titulo1");

titulo1.style.color = "red";
titulo1.style.backgroundColor = "#000";
titulo1.style.border = "1px solid #009";
titulo1.style.margenTop = "50px";
titulo1.style.padding = "5px";

//para agreagar una clase 

nombreClase = "grande";
let valor = titulo1.classList.contains(nombreClase);
titulo1.classList.add(nombreClase);//agreaga ootra clase al tag
nombreClase2 ="pequeño";
titulo1.classList.replace(nombreClase,nombreClase2);//reemplaza la clase grande por la clase pequeño.



///obtencion y modificacioen de elementos

let resultado = titulo.textContent;//devuelve el texto de cualquier modo
let result = titulo.innerHTML;//devuelve el contenido html de un elemento
let res = titulo.outerHTML;//devuelve el codigo html completo del elemento

//creacion de lementos

document.write("<br><br>");


const contene = document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();

for (var i = 0; i <= 3; i++) {
	const item = document.createElement("LI");
	item.innerHTML = `Elemento numero ${i+1} de la lista`;
	contene.appendChild(item);
}

contene.appendChild(fragmento);

console.log(contene);

//obtencion y modificacion de child= hijos

const primerHijo = contene.firstElementChild;
const ultimoHijo = contene.lastElementChild;
const hijos = contene.children;

console.log(primerHijo);
console.log(ultimoHijo);
console.log(hijos);


for (hijo of hijos) {
	console.log(hijo);
}


//metodos de child

const h3_nuevo = document.createElement("H3");
h3_nuevo.innerHTML ="Titulo nuevo";

h3_anterior = document.querySelector(".hh3");

contene.replaceChild(h3_nuevo,h3_anterior); //reemplaza un elemento por otro


//parents

console.log(contene.parentNode);//muestra el cotenedror del nodo seleccionado.
console.log(contene.parentElement);//muestra el cotenedror del nodo seleccionado.

console.log(h3_nuevo.nextElementSibling);//el elemento hermano que le sigue
console.log(h3_nuevo.previousElementSibling);//el elemento hermano que esta antes





