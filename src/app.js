// Versión inicial
function saludar() {
    console.log("Hola mundo")
}

saludar();


//funcion para saludar con el nombre

function saludarConNombre(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludar();
saludarConNombre("Ignacio");

//funcion para obtener la fecha actual

function obtenerFechaActual() {
    const fecha = new Date();
    return fecha.toLocaleDateString();
}

console.log("Fecha actual:", obtenerFechaActual());
