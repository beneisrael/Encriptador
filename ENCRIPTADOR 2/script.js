//e -- > enter 
//o -- > ober 
//i -- > imes 
//a -- > ai 
//u -- > ufat 

function analizar(){

   
}

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas -- e else { 
    //g es para toda La Linea u oración
    //m es para que afecte a multiples lineas o parrafo

    
//var regex = /[A-ZÁÉÍÓÚÑ\W]/; // Letras minúsculas, espacios y otros caracteres especiales

    if (/[A-ZÁÉÍÓÚÑ\W]/.test(texto)){
        alert("Error: El texto debe contener solo letras, sin acentos.");
        //return;
    }
   
    
    var txtCifrado = texto.replace(/e/g,"enter");
    var txtCifrado = txtCifrado.replace(/o/g,"ober");
    var txtCifrado = txtCifrado.replace(/i/g,"imes");
    var txtCifrado = txtCifrado.replace(/a/g,"ai");
    var txtCifrado = txtCifrado.replace(/u/g,"ufat");
       

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;    
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
    
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas -- e else { 
    //g es para toda La Linea u oración
    //m es para que afecte a multiples lineas o parrafo
    var txtCifrado = texto.replace(/ober/g,"o");
    var txtCifrado = txtCifrado.replace(/imes/g,"i");
    var txtCifrado = txtCifrado.replace(/ufat/g,"u");
    var txtCifrado = txtCifrado.replace(/enter/g,"e");
    var txtCifrado = txtCifrado.replace(/ai/g,"a");
   

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;    
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

//function copiar(){
//    var contenido = document.querySelector("#texto2");
//    contenido.select();
//    document.execCommand("copy");
//    alert("¡Se copio!");  

//}

function copiar(){
    let texto2 = document.getElementById("texto2");
    let copiar = document.getElementById("copiar");

    navigator.clipboard.writeText(texto2.textContent);
    copiar.textContent="Copiado";  
    alert("¡Se copio!");

    
    
}