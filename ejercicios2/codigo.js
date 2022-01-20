//clases y constructores
class Animal {
	//constructor
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad    = edad;
		this.color   = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad}
		años, y soy de color ${this.color}`;
	}

	//metodo
	verInfo(){
		document.write(this.info + "<br>");
	}

}

//herencia: hereda todo lo de la clase principal

class Perro extends Animal {
	constructor(especie,edad,color,raza){
		super(especie,edad,color,raza);
		this.raza = raza;
		this.info = `Soy ${this.especie}, tengo ${this.edad}
		años, y soy de color ${this.color}, mi raza es: ${raza}`;
	}

	set setRaza(newRaza){
		this.raza =newRaza;
	}
	
	get getRaza(){
		return this.raza;
	}
}

const perro = new Perro("Perro", 5, "marron","pitbull");
const gato  = new Animal("Egipcio", 6, "negro");
const pajaro  = new Animal("perico", 6, "arcoiris");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();
// document.write(perro.getRaza); 

//ejercicio1

class Celulares {
	constructor(color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.ram = ram;
		this.encendido = false;
	}

	prenderApagar(){
		if(this.encendido ==false){
			alert("celular prendido");
			this.encendido= true;
		}else {
			alert("el celular apagado");
			this.encendido= false;
		}
	}

	reiniciar(){
		if(this.encendido ==true){
			alert("reiniciando celular");
			this.encendido= true;
		}else {
			alert("el celular esta apagado");
		}
	}

	tomarFotos(){
		alert(`foto tomada con una resolución de: 
			${this.resolucionDeCamara}`);
	}

	grabarVideo(){
			alert(`ggrabando video en:  
			${this.resolucionDeCamara}`);
		}

		mobileInfo(){
			return `
			Color:<b> ${this.color}<br></b>
			Peso: ${this.peso}<br>
			Tamaño: ${this.tamaño}<br>
			Camara: ${this.resolucionDeCamara}<br>
			Memoria Ram: ${this.ram}<br>`
		}

}

class CelularAltaGama extends Celulares {
	constructor(color,peso,tamaño,rdc,ram,rdce){
		super(color,peso,tamaño,rdc,ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("Grabando en Camara lenta");
	}
	reconomientoFacial(){
		alert("Iniciando Reconomiento Facial");
	}
	infoAltaGama(){
		return this.mobileInfo()+ `Resolución de Camara Extra: ${this.resolucionDeCamaraExtra}`
	}
}

const celular1 = new Celulares("rojo",150,"5'","full hd","2Gb");
const celular2 = new Celulares("Negro",150,"5.2'","full hd","1Gb");
const celular3 = new CelularAltaGama("rojo",150,"5.9'","full hd","8Gb","full hd 4k");
// celular1.prenderApagar();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.prenderApagar();

document.write(celular1.mobileInfo()+"<br>"
	+celular2.mobileInfo()+"<br>" +celular3.infoAltaGama()+"<br>");

document.write("<br><br>")

class App {
	constructor(descargas,puntuacion, peso){
		this.descargas =descargas;
		this.puntuacion = puntuacion;
		this.peso= peso;
		this.iniciada = false;
		this.instalada = false;
	}

	instalar(){
		if(this.instalada==false){
			this.instalada =true;
			alert("App instalada correctamente");
		}
	}

	desInstalar(){
		if(this.instalada==true){
			this.instalada =false;
			alert("App desInstalada correctamente");
		}
	}

	abrir(){
		if(this.iniciada== false && this.instalada== true){
			this.iniciada=true;
			alert("App iniciada");
		}
	}

	cerrar(){
		if(this.iniciada== true && this.instalada== true){
			this.iniciada=false;
			alert("App cerrada");
		}
	}

	appInfo(){
		return `Descargas: <b>${this.descargas} </b> <br>
		Puntuación: ${this.puntuacion} <br>
		Peso: ${this.peso} <br>`
	}

}

const app = new App("16.000","5 estrellas","45Mg");

document.write(app.appInfo());

app.instalar();
app.abrir();
app.cerrar();
app.desInstalar();

