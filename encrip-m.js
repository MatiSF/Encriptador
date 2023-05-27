const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            
        }
        
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            
        }
        
    }
    return stringDesencriptado
}

// Evento y funcion del boton copiar, extraido de mi version.
const copiarBtn = document.querySelector(".btn-copiar");

copiarBtn.addEventListener("click", copiarTexto);

function copiarTexto() {
    const textoAcopiar = mensaje.value;
    navigator.clipboard.writeText(textoAcopiar)
      .then(() => alert("Texto copiado, veamos si funciona al reves: " + textoAcopiar))
      .catch((error) => console.error("Error al copiar el texto: ", error));
  }
  