# Encriptador Sencillo

## Descripción

Este es un proyecto educativo creado para Alura Latam que implementa un encriptador y desencriptador de texto simple utilizando HTML, CSS y JavaScript. La aplicación permite a los usuarios encriptar y desencriptar mensajes utilizando un algoritmo básico de sustitución.

## Funcionalidades

- **Encriptar Texto**: Permite transformar el texto ingresado en un formato encriptado.
- **Desencriptar Texto**: Convierte el texto encriptado de vuelta a su forma original.
- **Interfaz Amigable**: Utiliza HTML y CSS para proporcionar una interfaz de usuario clara y atractiva.

## Tecnologías Utilizadas

- **HTML**: Estructura del contenido y los elementos de la interfaz.
- **CSS**: Estiliza la interfaz para una mejor experiencia de usuario.
- **JavaScript**: Implementa la lógica de encriptación y desencriptación.

## Cómo Usar

1. **Clonar el Repositorio**:

    ```bash
    git clone https://github.com/tuusuario/encriptador-sencillo.git
    ```

2. **Abrir el Proyecto**:
    - Navega al directorio del proyecto y abre el archivo `index.html` en tu navegador web.

3. **Interacción**:
    - Ingresa el texto que deseas encriptar en el campo de entrada.
    - Haz clic en el botón "Encriptar" para ver el texto encriptado.
    - Para desencriptar, ingresa el texto encriptado y haz clic en "Desencriptar".

## Estructura del Proyecto

- `index.html`: Archivo principal de la aplicación con la estructura HTML.
- `styles.css`: Archivo de estilos que define la apariencia de la aplicación.
- `script.js`: Archivo de JavaScript que contiene la lógica de encriptación y desencriptación.

## Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encriptador Sencillo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Encriptador Sencillo</h1>
        <textarea id="inputText" placeholder="Ingresa el texto aquí..."></textarea>
        <button id="encryptButton">Encriptar</button>
        <button id="decryptButton">Desencriptar</button>
        <textarea id="outputText" placeholder="Texto encriptado/desencriptado..." readonly></textarea>
    </div>
    <script src="script.js"></script>
</body>
</html>
