 //soy un comentario; console.log es como un print.
/* alert ventana que te salta un mensaje.......*/
alert("prueba de código");
var mensaje = "hola mundo que tal";
console.log(mensaje);
console.log(document);
console.log(localStorage);


var esViernes = true;
console.log("Es viernes y queremos irnos: " + esViernes);
//debugger
if(esViernes == true){
    console.log("Pues sí que es viernes, nos quedan 45 min para irnos");

}

var nombreUsuario = prompt("Intruduzca su nombre");
console.log("El nombre de usuario es: " , nombreUsuario);
document.write("<h1>" + nombreUsuario + "</h1>");
