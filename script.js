// Encriptar / Desencriptar un texto:
// Para encriptar se siguen las siguientes directivas:
// La letra "e" es convertida a "enter"
// La letra "i" es convertida a "imes"
// La letra "a" es convertida a "ai"
// La letra "o" es convertida a "ober"
// La letra "u" es convertida a "ufat"
// Para desencriptar se invierten las directivas:

var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
var textoEncriptado = "";
var textoDesencriptado = "";

// Validar el ingreso de datos en el textArea para encriptar/desencriptar
function validarEntrada(event) {
    var input = event.target.value;
    var textoValido = input.replace(/[^a-z\s]/g, '');
    event.target.value = textoValido;
}
  
// Asignar el evento oninput al textArea
var textarea = document.getElementById("texto");
textarea.addEventListener("input", validarEntrada);

// Encriptar el texto ingresado en el textArea y mostrar el resultado
function encriptar() {
    var textoaEncriptar = document.getElementById("texto").value;
    textoEncriptado = textoaEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoEncriptado.includes(matrizCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    document.getElementById("mensaje").value = textoEncriptado;

    // Mostrar o eliminar la imagen de fondo del cuadro de resultado
    if (textoEncriptado == "") {
        document.getElementById("mensaje").style.backgroundImage = "url('imagenes/muneco.png')";
    } else {
        document.getElementById("mensaje").style.backgroundImage = "none";
    }
    
    // Limpiar el textArea de ingreso de datos
    document.getElementById("texto").value = "";
}

// Desencriptar el texto ingresado en el textArea y mostrar el resultado
function desencriptar() {
    var textoaDesencriptar = document.getElementById("texto").value;
    textoDesencriptado = textoaDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoDesencriptado.includes(matrizCodigo[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    document.getElementById("mensaje").value = textoDesencriptado;

    // Mostrar o eliminar la imagen de fondo del cuadro de resultado
    if (textoDesencriptado == "") {
        document.getElementById("mensaje").style.backgroundImage = "url('imagenes/muneco.png')";
    } else {
        document.getElementById("mensaje").style.backgroundImage = "none";
    }

    // Limpiar el textArea de ingreso de datos
    document.getElementById("texto").value = "";
}

// Copiar el resultado al Portapapeles
function copiar() {
    navigator.clipboard.writeText(document.getElementById("mensaje").value)
    alert("Copiado al Portapapeles");
}