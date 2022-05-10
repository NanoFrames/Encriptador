var entradaTexto= document.querySelector(".cuadroTexto");
var salidaTexto =  document.querySelector(".textoModificado");


function btEncriptar(){
	var textoEncriptado = encriptar(entradaTexto.value);
	salidaTexto.value= textoEncriptado;
	
	
	revisionTexto();
	opacidad();
}
function btDesencriptar(){
	var textoDesencriptado = desencriptar(entradaTexto.value);
	salidaTexto.value = textoDesencriptado;


	revisionTexto();
	opacidad();	
}

function revisionTexto(){
	let minusculas = /[a-z]/g;
	let caracteresEsp = /\s+$/g;
	let MAYUSCULAS = /[A-Z]/g;

	if(entradaTexto.value.match(MAYUSCULAS) || entradaTexto.value.match(caracteresEsp)){
		alert("Solo letras minúsculas, sin tildes o caracteres especiales");
	}
}

function encriptar (parrafoEncriptar){
	var codigoEncriptacion= [["e","enter"],["i","imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
	parrafoEncriptar= parrafoEncriptar.toLowerCase();

	for (var j = 0; j < codigoEncriptacion.length; j++) {
		if (parrafoEncriptar.includes(codigoEncriptacion[j][0])){
			parrafoEncriptar=parrafoEncriptar.replaceAll(codigoEncriptacion[j][0],codigoEncriptacion[j][1]);
		}
	}
	return parrafoEncriptar;	
}
function desencriptar(parrafoDesencriptar){
	var codigoDesencriptacion = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
	parrafoDesencriptar = parrafoDesencriptar.toLowerCase();

	for(var j=0; j < codigoDesencriptacion.length; j++){
		if (parrafoDesencriptar.includes(codigoDesencriptacion[j][0])){
			parrafoDesencriptar = parrafoDesencriptar.replaceAll(codigoDesencriptacion[j][0],codigoDesencriptacion[j][1]);
		}
	}
	return parrafoDesencriptar;
} 

function btCopiar(){
	var textoCopiado = document.getElementById("textoModificado");
	textoCopiado.select();
	navigator.clipboard.writeText(textoCopiado.value);
}

function opacidad(){

	let opacando = salidaTexto.value;
	var opacidando;
	
	if(opacando.length !== 0){
		opacidando= document.getElementById("sinTexto").style.opacity= "0";
		opacidando.select();
	}else{
		opacidando= document.getElementById("sinTexto").style.opacity= "100";
		opacidando.select();
	}
}