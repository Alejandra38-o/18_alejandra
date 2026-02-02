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
if (esViernes == true) {
    console.log("Pues sí que es viernes, nos quedan 45 min para irnos");

}

var nombreUsuario = prompt("Intruduzca su nombre");
console.log("El nombre de usuario es: ", nombreUsuario);
document.write("<h1>" + nombreUsuario + "</h1>");



function enviarFormulario() {
    console.log("Llama a la función formulario enviarFormulario()");
    var div = document.getElementById("mensaje");
    //Las pass coinciden

    if(comprobarPass()){
    //console.log('El nombre del usuario es: ' + nombre);
    //document.writeln("<h1>" + nombre + "</h1>");
    //document.writeln("<h1>Password OK</h1>");
    var nombre = document.getElementById("nombre").value;
    div.innerHTML = nombre + "Password OK";
    div.style.backgroundColor = "green";

    }
    else{
        //document.writeln("<h1>ERROR! Password no coiciden</h1>")
        var nombre = document.getElementById("nombre").value;
        div.innerHTML = nombre + "Password OK";
        di.style.backgroundColor = "red";
    }

function comprobarPass(){
    var pass1 = document.getElementById("pass1").value;
    var pass2  = document.getElementById("pass2").value;
    return pass1 == pass2
}

function cambiarColor(color){
    var div = document.getElementById("mensaje");
    div.style.backgroundColor = color;
}
}