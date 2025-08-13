// saludo.js
function saludar(nombre = "mundo") {
    const horaActual = new Date().toLocaleTimeString();
    console.log(`Hola ${nombre}, la hora es ${horaActual}`);
}

saludar("Juan");
