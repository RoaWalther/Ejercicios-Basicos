

const crearLlaves  =(nombre,modelo,precio)=>{
	img = "<img class='llave-img' src= '/Img/JavaScript-Junior/../llave.png' >";
	nombre = `<h2> ${nombre} </h2>`;
	modelo = `<h3> ${modelo} </h3>`;
	precio = `<p> Precio: <b> ${precio}</b> </p>`;

	return [img,nombre,modelo,precio];
}

let fragmento = document.createDocumentFragment();

for (var i = 1; i <= 12; i++) {
	let modeloRamdon= parseInt(Math.random()*1000);
	let precioRamdon = parseInt(Math.random()*1000000);
	let llave = crearLlaves(`llave: ${i}`,
		`Modelo: ${modeloRamdon}`, ` $${precioRamdon}`);
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{
		document.querySelector(".key-data").value = `Modelo: 
		${modeloRamdon}, Precio: $${precioRamdon}`;
	});
	div.tabIndex = i;
	div.classList.add(`item${i}`, "flex-item");
	div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
	fragmento.appendChild(div);
}

document.querySelector(".flex-container").appendChild(fragmento);
