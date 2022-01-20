//ejercicio 1 realizar una calculadora basica con Math()

document.write("<br><br><br> EJERCICIO 1<br><br>")


class Calculadora {

	sumar(num1,num2) {
	return parseInt(num1)+ parseInt(num2);
	}
	restar(num1,num2) {
	return parseInt(num1)- parseInt(num2);
	}
	multi(num1,num2) {
	return parseInt(num1)* parseInt(num2);
	}
	div(num1,num2) {
	return parseInt(num1)/ parseInt(num2);
	}
	potenciar(num1,exp){
		let numero = num1;
		for (var i = 1; i <exp; i++) {
			numero =numero*num1;
		}
		return numero;
		// num1**exp;
		// return num1;
	}
	raizCuadrada(num1){
		return parseInt(Math.sqrt(num1));
	}
	raizCubica(num1){
		return parseInt(Math.cbrt(num1));
	}

}

const calculadora = new Calculadora();

alert("que operación quieres realizar");
let operacion = prompt("1:sumar, 2:restar, 3:Multiplicar,"+
	" 4:Dividir, 5:Potencia, 6:RaizCuadrada, 7:RaizCubica");

if(operacion==1){
	let numero1 = prompt("Introduzca el primer valor");
	let numero2 = prompt("Introduzca el segundo valor");

	let resultado = calculadora.sumar(parseInt(numero1),parseInt(numero2));
	document.write(resultado);
}else if(operacion==2){
	let numero1 = prompt("Introduzca el primer valor");
	let numero2 = prompt("Introduzca el segundo valor");

	let resultado = calculadora.restar(numero1,numero2);
	document.write(resultado);
}else if(operacion==3){
	let numero1 = prompt("Introduzca el primer valor");
	let numero2 = prompt("Introduzca el segundo valor");

	let resultado = calculadora.multi(parseInt(numero1),parseInt(numero2));
	document.write(resultado);
}else if(operacion==4){
	let numero1 = prompt("Introduzca el primer valor");
	let numero2 = prompt("Introduzca el segundo valor");
	if(numero2 <= 0){
		alert(`"no es posible dividir entre = ${numero2}"`)
	}else{
		let resultado = calculadora.div(parseInt(numero1),parseInt(numero2));
		document.write(resultado);
	}
}else if(operacion==5){
	let numero1 = prompt("Introduzca el valor");
	let numero2 = prompt("Introduzca la potencia");

	let resultado = calculadora.potenciar(parseInt(numero1),parseInt(numero2));
	document.write(resultado);
}else if(operacion==6){
	let numero1 = prompt("Introduzca el valor para la Raiz");

	let resultado = calculadora.raizCuadrada(parseInt(numero1));
	document.write(resultado);
}else if(operacion==7){
	let numero1 = prompt("Introduzca el valor para la Raiz");

	let resultado = calculadora.raizCubica(parseInt(numero1));
	document.write(resultado);
}else {
	alert("No se encontro operación");
}

//segundo ejercicio 

document.write("<br> SEGUNDO EJERCICIO <br><br>");

const obtenerInfomacion = (materia)=> {
	materias= {
		fisica: ["luis","predo","pedro","pardo"],
		quimica: ["perdo","maria","pedro","jonas"],
		logica: ["perdo","predo","luis","pardo"],
		matematicas: ["maria","predo","pedro","jonas"],
	}
	if (materias[materia] !== undefined) {
		return [materias[materia],materia,materias];
	}else {
		return materias;
	}

}

 const mostarInfo =(materia)=> {
 	let informacion = obtenerInfomacion(materia);

if (informacion !== false) {
	let profesor = informacion[0][0];
	let personas = informacion[0];
	personas.shift();
	document.write(`El profesor de: ${informacion[1]} 
    <br>es: <b> ${profesor} </b> Y sus Estudiantes son: ${personas} <br>`);
}
 }

const cantidadClases = (alumno)=> {

	let informacion = obtenerInfomacion();
	let cantpersonas = 0;
	let clases = [];
	for(info in informacion){
		if(informacion[info].includes(alumno)){
			cantpersonas++;
			clases.push(" "+ info);

		}
	}
	return `<b style= 'color: blue'> ${alumno} </b> esta en 
			${cantpersonas} clases que son: <b>${clases} <b/> <br>`;
}

mostarInfo("fisica");
mostarInfo("quimica");
mostarInfo("logica");
mostarInfo("matematicas");
document.write(cantidadClases("maria"));

document.write("<br> TERCER EJERCICIO <br><br>");

let materias2 = {
		fisica: ["luis","predo","pedro","pardo"],
		quimica: ["perdo","maria","pedro","jonas"],
		logica: ["perdo","predo","luis","pardo"],
		matematicas: ["maria","predo","pedro","jonas"],
	}

const isncribir = (alumno1, materia1)=>{
	personas = materias2[materia1];
	if (personas.length >= 21) {
		document.write(`Lo siento ${alumno1} ya esta lleno el cupo en ${materia1} <br>`);
	} else {
			personas.push(alumno1);
			if (materia1 == "fisica") {
				materias2 = {
					fisica: personas,
					quimica: materias2["quimica"],
					logica: materias2["logica"],
					matematicas: materias2["matematicas"],
				}
			}else if (materia1 == "quimica") {
				materias2 = {
					fisica: materias2["fisica"],
					quimica: personas,
					logica: materias2["logica"],
					matematicas: materias2["matematicas"],
				}
			}else if (materia1 == "logica") {
				materias2 = {
					fisica: materias2["fisica"],
					quimica: materias2["quimica"],
					logica: personas,
					matematicas: materias2["matematicas"],
				}
			}else if (materia1 == "matematicas") {
				materias2 = {
					fisica: materias2["fisica"],
					quimica:  materias2["quimica"],
					logica: materias2["logica"],
					matematicas: personas,
				}
			}
			document.write(`Felicidades ${alumno1} te has inscrito a ${materia1} de manera correcta <br>`);
		}
	
}
document.write(materias2["fisica"] +"<br>");

for (var i = 0; i <20 ; i++) {
	isncribir("pedrito"+ (i+1),"fisica");
	isncribir("pedrito"+ (i+1),"quimica");
	isncribir("pedrito"+ (i+1),"matematicas");
	isncribir("pedrito"+ (i+1),"logica");
}

 document.write(` <br><br>Materia: fisica y sus a lumnos inscritos son: ${materias2["fisica"]}<br><br>`);
 document.write(`Materia: quimica y sus a lumnos inscritos son: ${materias2["quimica"]}<br><br>`);
 document.write(`Materia: matematicas y sus a lumnos inscritos son: ${materias2["matematicas"]}<br><br>`);
 document.write(`Materia: logica y sus a lumnos inscritos son: ${materias2["logica"]}<br><br>`);

