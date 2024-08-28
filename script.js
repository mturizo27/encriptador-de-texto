const inputText = document.querySelector(".input__text");
const outText = document.querySelector(".out__text");
const $copyBtn = document.getElementById("copy")
const $copyOutText = document.getElementById("out__text")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputText.value)
    outText.value = textoEncriptado
    inputText.value = "";
    outText.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputText.value)
    outText.value = textoEncriptado
    inputText.value = "";  
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

$copyBtn.addEventListener('click', e => {
    $copyOutText.select();
    document.execCommand('copy');
})