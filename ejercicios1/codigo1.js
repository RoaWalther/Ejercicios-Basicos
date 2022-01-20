							//ARRAYS//

let pc1 = {
	nombre: "Walther",
	procesador: "Intel Core I5",
	ram: "8Gb",
	espacio: "1Tb"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];
let frase = `El nombre de mi pc es: <b> ${nombre} </b><br> tiene
			un procesador: <b>${procesador} </b><br> con una ram:
			<b>${ram} </b><br>y un espacio en memoria: <b>${espacio}</b><br><br>`

let div = document.createElement("DIV");
div.classList.add("frase");
div.style.color ="#fff";
div.style.background = "#555";
div.style.width= "90%";
div.style.margin = "auto";
div.innerHTML=frase;
document.body.appendChild(div);

			//CONDICIONALES y BUCLES//

let numero  = 0;


	while (numero < 3){
		numero++;
		console.log(numero + "<br>");
	}

	do {
		numero++;
		console.log(numero + "do while<br>");
	}
	while (numero < 6)
		console.log("<br><br>")


// //BUCLE FOR DETERMINADO

	for (let i = 0; i< 3; i++){
		if(i ==2){
			continue; 
		}
		console.log((i+1) + " For<br>");
	}
		console.log("<br><br>")

// //FOR IN devuelve la posición del elemento

let animales= ["gato", "perro", "loro"];

for(let animal in animales){
	console.log(animal + " ForIn<>");
}
//FOR OF devuelve el valor del elemneto
for(let animal of animales){
	console.log(animal + " ForOf");
}
	

			//FUNCIONES//

let n1= prompt("numero1");
let n2= prompt("numero2");

n1 = parseInt(n1) ;
n2 = parseInt(n2);

function suma(num1,num2){
	let res = num1+ num2;
	return res;
}

respuesta = suma(n1,n2);
	alert("La suma es: "+respuesta);

		//ejercicio validar tiempo y edad de un usuario para el ingreso a una discoteca

let free= false;
const validarUsuario = (time)=> {
	let edad = prompt("¿cual  es tu edad?");
	if(edad >= 18){
		if(time >= 2 && time < 7 && !free){
			alert("pasa gratis");
			free= true;
		}else{
			alert(`son las ${time} Horas puedes entrar pero paga la entrada`);
		}
	}else  {
		alert("No puedes ingresar eres menor");
	}
}

// validarUsuario(23);

		//ejercicio 2 asistencia y ausencias de alumnos//

let cantidad = prompt("cuantos alumnos son");
let alumnosTota = [];

if (cantidad >15) {
	alert("la cantidad de alumno debe ser menor a 15");
	cantidad = prompt("cuantos alumnos son");
}else{
	for (let i = 0; i < cantidad; i++) {
		alumnosTota[i]= [prompt("nombre del alumno "+ (i+1)),0];
	}
}

const tomarAsistencia = (nombre, p)=> {
	let asistio = prompt(nombre);
	if(asistio == "p" || asistio == "P"){
		alumnosTota[p][1]++;
	}
}

for (let i = 0; i<5; i++) {
	for (alumno in alumnosTota) {
		tomarAsistencia(alumnosTota[alumno][0],alumno);
	}
}

for (alumno in alumnosTota) {
		let resultado = `${alumnosTota[alumno][0]}: 
		 ______Asistencia: ${alumnosTota[alumno][1]}:
		 ______Ausencias: ${5-parseInt(alumnosTota[alumno][1])}`;

		 if(5-alumnosTota[alumno][1] > 2){
		 	resultado+= "<b style= 'color:red'> REPROBO ASISTENCIA</b> <br><br>";
		 	alert("entro aca")
		 }else {
		 	resultado+= "<br>";
		 }
			document.write(resultado);
	}

//ejercicio3 calculadora basica de suma, resta, multiplicacion y division

const sumar= (num1,num2)=> {
	return parseInt(num1)+ parseInt(num2);
}
const restar= (num1,num2)=> {
	return parseInt(num1)- parseInt(num2);
}
const multi= (num1,num2)=> {
	return parseInt(num1)* parseInt(num2);
}
const div= (num1,num2)=> {
	return parseInt(num1)/ parseInt(num2);
}
alert("que operación quieres realizar");
let operacion = prompt("1: sumar, 2: restar, 3: Multiplicar, 4: Dividir");

if(operacion==1){
	let numero1 = prompt("Introduzca el primer valor");
	let numero2 = prompt("Introduzca el segundo valor");

	let resultado = sumar(parseInt(numero1),parseInt(numero2));
	console.log(resultado);
}else if(operacion==2){
	let numero1 = prompt("Introduzca el primer valor");
	let numero2 = prompt("Introduzca el segundo valor");

	let resultado = restar(numero1,numero2);
	console.log(resultado);
}else if(operacion==3){
	let numero1 = prompt("Introduzca el primer valor");
	let numero2 = prompt("Introduzca el segundo valor");

	let resultado = multi(parseInt(numero1),parseInt(numero2));
	console.log(resultado);
}else if(operacion==4){
	let numero1 = prompt("Introduzca el primer valor");
	let numero2 = prompt("Introduzca el segundo valor");
	if(numero2 <= 0){
		alert(`"no es posible dividir entre =${numero2}"`)
	}else{
		let resultado = div(parseInt(numero1),parseInt(numero2));
		console.log(resultado);
	}
}else {
	alert("No se encontro operación");
}
