
//ejercicios

let dineroC = prompt("cuanto dinero tienes Walther");
let dineroR = prompt("cuanto dinero tienes Rober");
let dineroP = prompt("cuanto dinero tienes Pedro");
dineroC = parseInt(dineroC);

if (dineroC >= 0.6 && dineroC < 1) {
    alert("compra un helado de agua");
    alert("te sobra"+ (dineroC - 0.6));
}
else if (dineroC >= 1 && dineroC < 1.6) {
    alert("compra un helado de crema");
    alert("te sobra"+(dineroC - 1));
}
else if (dineroC >= 1.6 && dineroC < 1.7) {
    alert("compra un helado de coco");
    alert("te sobra"+(dineroC - 1.6));
}
else if (dineroC >= 1.7 && dineroC < 1.8) {
    alert("compra un helado de fresa");
    alert("te sobra"+(dineroC - 1.7));
}
else if (dineroC >= 1.8 && dineroC < 2.9) {
    alert("compra un helado de piña");
    alert("te sobra"+(dineroC - 1.8));
}
else if (dineroC >= 2.9) {
     alert("compra un helado de chocolate o pote de helados");
     alert("te sobra"+(dineroC - 2.9));
 }
 else{
    alert("no te alcanza para nada");
 }
 //roberto

 if (dineroR >= 0.6 && dineroR < 1) {
    alert("compra un helado de agua");
}
else if (dineroR >= 1 && dineroR < 1.6) {
    alert("compra un helado de crema");
}
else if (dineroR >= 1.6 && dineroR < 1.7) {
    alert("compra un helado de coco");
}
else if (dineroR >= 1.7 && dineroR < 1.8) {
    alert("compra un helado de fresa");
}
else if (dineroR >= 1.8 && dineroR < 2.9) {
    alert("compra un helado de piña");
}
else if (dineroR >= 2.9) {
     alert("compra un helado de chocolate o pote de helado");
 }
 else{
    alert("no te alcanza para nada");
 }
 //pedro

 if (dineroP >= 0.6 && dineroP < 1) {
    alert("compra un helado de agua");
}
else if (dineroP >= 1 && dineroP < 1.6) {
    alert("compra un helado de crema");
}
else if (dineroP >= 1.6 && dineroP < 1.7) {
    alert("compra un helado de coco");
}
else if (dineroP >= 1.7 && dineroP < 1.8) {
    alert("compra un helado de fresa");
}
else if (dineroP >= 1.8 && dineroP < 2.9) {
    alert("compra un helado de piña");
}
else if (dineroP >= 2.9) {
     alert("compra un helado de chocolate o pote de helado");
 }
 else{
    alert("no te alcanza para nada");
 }