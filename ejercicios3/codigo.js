//cadenas de texto

let cadena = "cadena de texto ejemplo WALTHER";
let cadena2 = " texto ";

let result = cadena.concat(" Hola"); //concatena en texto
let result1 = cadena.includes(cadena2); //busca si ese fragmento de cadena existe en la otra cadena y devuelve true si esta y false si no esta
let result2 =cadena.indexOf(cadena2)//devuelve la posicion del texto que encontro,si devuelce -1 es que no existe la cadena.
let result3 = cadena.padStart(40, "11");//rellena la logitud de la cadena con 11111
let result4 = cadena.padEnd(40, "11");//rellena el espacio con unos hasta completar la longitud pero al final
let result5 = cadena.repeat(2);//repite la cadena las veces que queramos
let result6 = cadena.split(" ");//busca segun le indiquemos y reemplaza o separa por comas
let result7 = cadena.substring(0,8);//busca por posiciones inicio y fin y coloca ese resultado
let result8 = cadena.toLowerCase();//convierte todo a minuscula
let result9 = cadena.toUpperCase();//convierte todo a Mayuscula
let result10 = cadena2.trim(); //Elimina los espacios en blanco
let result11 = cadena2.trimEnd(); //Elimina los espacios del final
let result12 = cadena2.trimStart(); //Elimina los espacios del principio


//metodos de arrays TRANSFORMADORES

let nombres= ["pedro","maria","jorge"];
//document.write("array original: "+nombres +"<br>");


let resul = nombres.pop();//le quita el ultimo elemento
//document.write(resul + "<br>");
let resul1 = nombres.shift();//le quita el primer elemento
//document.write(resul1 + "<br>");
let resul2 = nombres.push("carla","samuel");//ingresa mas elementos al array al final
//document.write(nombres+ "<br>");
let resul3 = nombres.reverse();//invierte el array
//document.write(resul3+ "<br>");
let resul4 = nombres.unshift("dos","tres");//ingresa elementos al principio
//document.write(nombres+ "<br>");
let resul5 = nombres.sort();//ordena de menor a myor o alfabeticamente
//document.write(resul5+ "<br>");
let resul6 = nombres.splice(0,2,"jonas","jesus");//agrega y elimina elementos segun la posicion y la cantidad de elementos a eliminar
//document.write(nombres+ "<br>");

let frutas= ["Manzana","Pera","Piña","Mango"];
//document.write("array original: <b>"+frutas +"</b><br>");

let res = frutas.join(" - ");//convierte a string y otroga un separador cualquiera que indiquemos
//document.write(res +"<br>")
let res1 = frutas.slice(0,2);//es como el substring asigna posicion inicial y final
//document.write(res1 +"<br>")

//metodos de arrays REPETIDORES

//document.write( "<br><br>METODOS REPETIDORES <br><br>");

let colores= ["Rojo","Blanco","Azul","Verde"];
//document.write("array original: <b>"+colores +"</b><br>");


let resp = colores.filter(color => color.length > 4);//hace iteraciones y se ejecutan como funcion, ademas se otorga que sea mientras "algo", creando un nuevo array que cumpla la condicion
//document.write(resp +"<br>")

colores.forEach(color => document.write(color +"<br>"));//ejecuta la funcion indicada una vez por elemento

let numero = Math.sqrt(16);//devuelvr la raiz cuadrada
//document.write("resultado: <b>" + numero +"</b><br>");
let numero1 = Math.cbrt(9);//devuelvr la raiz cubica
//document.write("resultado: <b>" + numero1 +"</b><br>");
let numero2 = Math.max(9,2,8,10);//devuelve el num mas grande
//document.write("resultado: <b>" + numero2 +"</b><br>");
let numero3 = Math.min(9,2,8,10);//devuelve el num mas pequeño
//document.write("resultado: <b>" + numero3 +"</b><br>");
let numero4 = Math.random()*99;//devuelve un numero aleatorio
//numero4 =Math.round(numero4);//redondea el ramdon para que no salgan decimales
numero4 = Math.floor(numero4+1)//igual que el round pero elimina el 100, se agraga mas 1 para eliminar el 0
document.write("resultado: <b>" + numero4 +"</b><br>");

for (var i = 0; i < 1000; i++) {
	let numero = Math.random()*99;
	numero = Math.floor(numero+1);
	document.write(numero + "<br>");
}

let numero5 = Math.trunc(9.9);



