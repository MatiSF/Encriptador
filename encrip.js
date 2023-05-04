const cambios = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  
  const msjInput = document.getElementById("msj");
  const resultadoP = document.getElementById("resultado");
  const encripBtn = document.getElementById("encrip");
  const desencripBtn = document.getElementById("desencrip");
  const copiarBtn = document.getElementById("copiar");
  
  //funcion encriptar mensaje
  function encriptar(msj) {
    let mensajeEncriptado = "";
    for (let i = 0; i < msj.length; i++) {
      if (cambios.hasOwnProperty(msj[i])) {
        mensajeEncriptado += cambios[msj[i]];
      } else {
        mensajeEncriptado += msj[i];
      }
    }
    return mensajeEncriptado;
  }
  
  //funcion desencriptar mensaje
  function desencriptar(msjEncriptado) {
    let mensajeDesencriptado = "";
    for (let i = 0; i < msjEncriptado.length; i++) {
      let encontrado = false;
      for (let letra in cambios) {
        if (cambios[letra] === msjEncriptado.substr(i, cambios[letra].length)) {
          mensajeDesencriptado += letra;
          encontrado = true;
          i += cambios[letra].length - 1;
          break;
        }
      }
      if (!encontrado) {
        mensajeDesencriptado += msjEncriptado[i];
      }
    }
    return mensajeDesencriptado;
  }
  
  //copiando
  function copiarTexto() {
    const textoAcopiar = resultadoP.innerText;
    navigator.clipboard.writeText(textoAcopiar)
      .then(() => alert("Texto copiado, veamos si funciona al reves: " + textoAcopiar))
      .catch((error) => console.error("Error al copiar el texto: ", error));
  }
  
  //boton encriptar evento
  encripBtn.addEventListener("click", () => {
    const mensaje = msjInput.value.toLowerCase();
    const mensajeEncriptado = encriptar(mensaje);
    resultadoP.innerText = mensajeEncriptado;
  });
  
  //boton desencriptar evento
  desencripBtn.addEventListener("click", () => {
    const mensajeEncriptado = resultadoP.innerText;
    const mensajeDesencriptado = desencriptar(mensajeEncriptado);
    resultadoP.innerText = mensajeDesencriptado;
  });
  
  //boton copiar evento
  copiarBtn.addEventListener("click", copiarTexto);
  