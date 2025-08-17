// Versión inicial
function saludar() {
    console.log("Hola mundo");
}

saludar();

function convertir(valor, desde, hacia) {
  if (desde === "m" && hacia === "km") {
    return valor / 1000;
  }
  if (desde === "km" && hacia === "m") {
    return valor * 1000;
  }
  if (desde === "C" && hacia === "F") {
    return (valor * 9) / 5 + 32;
  }
  if (desde === "F" && hacia === "C") {
    return ((valor - 32) * 5) / 9;
  }
  return null;
}

console.log(convertir(1500, "m", "km"))
console.log(convertir(1, "km", "m"))
console.log(convertir(100, "C", "F"))
console.log(convertir(32, "F", "C"))


