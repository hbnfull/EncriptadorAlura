// Función para normalizar los caracteres, eliminando acentos
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para encriptar el texto
function encriptar() {
    let frase = document.getElementById("textoEncriptado").value;
    
    // Normaliza el texto para eliminar acentos
    frase = normalizarTexto(frase.toLowerCase());

    const encriptaciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const textoEncriptado = frase.replace(/[eiaou]/g, letra => encriptaciones[letra]);

    actualizarTextoResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptar() {
    let frase = document.getElementById("textoEncriptado").value;
    
    // Normaliza el texto para eliminar acentos
    frase = normalizarTexto(frase.toLowerCase());

    const desencriptaciones = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const textoDesencriptado = frase.replace(/(enter|imes|ai|ober|ufat)/g, palabra => desencriptaciones[palabra]);

    actualizarTextoResultado(textoDesencriptado);
}

// Función para actualizar el resultado del texto y limpiar el área de entrada
function actualizarTextoResultado(texto) {
    const resultadoElemento = document.getElementById("textoResultado");
    resultadoElemento.value = texto;
    document.getElementById("textoEncriptado").value = "";
    resultadoElemento.style.backgroundImage = "none";
}

// Función para copiar el texto al portapapeles
async function copiarTexto() {
    const texto = document.getElementById("textoResultado").value;

    if (texto) {
        try {
            await navigator.clipboard.writeText(texto);
            mostrarPopup("Texto copiado");
            actualizarTextoResultado("");
            document.getElementById("textoResultado").style.backgroundImage = "url('../images/Munheco.svg')";
        } catch (err) {
            mostrarPopup("No se pudo copiar el texto");
        }
    } else {
        mostrarPopup("Texto no encontrado");
    }
}

// Función para mostrar un mensaje emergente (popup)
function mostrarPopup(mensaje) {
    const popup = document.createElement("div");
    popup.textContent = mensaje;
    popup.classList.add("popup");
    document.body.appendChild(popup);

    setTimeout(() => {
        document.body.removeChild(popup);
    }, 2000);
}

// Añadir eventos a los botones
document.getElementById("btnEncriptar").addEventListener("click", encriptar);
document.getElementById("btnDesencriptar").addEventListener("click", desencriptar);
document.getElementById("btnCopiar").addEventListener("click", copiarTexto);
