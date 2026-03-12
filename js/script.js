let habilidades = [
["HTML","Intermedio"],
["CSS","Intermedio"],
["GitHub","Básico"],
["JavaScript","Básico"]
];

function cargarHabilidades(){

let tabla = document.getElementById("tablaHabilidades");

let html="";

for(let i=0;i<habilidades.length;i++){

html += `
<tr>
<td>${habilidades[i][0]}</td>
<td>${habilidades[i][1]}</td>
</tr>
`;

}

tabla.innerHTML = html;

}

cargarHabilidades();

let visitasPerfil = 0;

function verPerfil(){

visitasPerfil++;

let mensaje="";

switch(visitasPerfil){

case 1:
mensaje="Bienvenido a mi perfil!";
break;

case 2:
mensaje="Gracias por visitar mi perfil!";
break;

case 3:
mensaje="Gracias por visitar mi perfil, otra vez!";
break;

default:
mensaje="Felicitaciones, llegaste al ultimo mensaje!";

}

document.getElementById("perfilMensaje").innerHTML = mensaje;

}

function validarFormulario(){

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let mensaje = document.getElementById("mensaje").value;

let resultado = "";

if(nombre === "" || correo === "" || mensaje === ""){

resultado = "Por favor completa todos los campos";

}else{

resultado = "Mensaje enviado correctamente";

}

document.getElementById("mensajeFormulario").innerHTML = resultado;

return false;

}