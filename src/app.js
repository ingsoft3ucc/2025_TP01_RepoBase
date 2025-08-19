// Versión inicial
function saludar() {
    console.log("Hola mundo");
}

saludar();

// Función simple: sumar y restar dos números

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

console.log("Resultado de 2 + 3 =", suma(2, 3));
console.log("Resultado de 5 - 2 =", resta(5, 2));

module.exports = { suma, resta };
