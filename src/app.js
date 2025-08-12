

// ya estaba
function saludar() {
    console.log("Hola mundo"); // lo deje para implementar lo del error
}


// CALCULADORA

/**
 * ESTAS FUNCIONES FUERON GENERADAS CON IA (ChatGPT/Claude)
 * Verificadas manualmente con múltiples casos de prueba
 */

function sumar(a, b) { return a + b; }

function restar(a, b) { return a - b; }

function multiplicar(a, b) { return a * b; }

function dividir(a, b) { return a / b; }

/**
 * ESTA FUNCIÓN LA ESCRIBÍ YO COMPLETAMENTE
 * Maneja casos edge y validaciones
 */
function dividirSeguro(a, b) {
    if (b === 0) {
        console.log("Error: No se puede dividir por cero");
        return null;
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log("Error: Ambos parámetros deben ser números");
        return null;
    }
    return dividir(a, b);
}

/**
 * ESTA FUNCIÓN TAMBIÉN ES MÍA
 * Interfaz principal de la calculadora
 */
function calculadora(operacion, num1, num2) {
    console.log(`Calculando: ${num1} ${operacion} ${num2}`);
    
    switch(operacion) {
        case '+':
            return sumar(num1, num2);
        case '-':
            return restar(num1, num2);
        case '*':
            return multiplicar(num1, num2);
        case '/':
            return dividirSeguro(num1, num2);
        default:
            console.log("Operación no válida. Usa: +, -, *, /");
            return null;
    }
}

// ==========================================
// EJECUCIÓN Y PRUEBAS
// ==========================================

// Código original
saludar();

// Nuevas funcionalidades - ESTAS PRUEBAS LAS ESCRIBÍ YO
console.log("\n=== PROBANDO CALCULADORA ===");
console.log("5 + 3 =", calculadora('+', 5, 3));
console.log("10 - 4 =", calculadora('-', 10, 4));
console.log("7 * 2 =", calculadora('*', 7, 2));
console.log("15 / 3 =", calculadora('/', 15, 3));
console.log("10 / 0 =", calculadora('/', 10, 0)); // Debe mostrar error

// CASOS EDGE QUE YO AGREGUÉ PARA VERIFICAR EL CÓDIGO DE IA
console.log("\n=== CASOS EDGE ===");
console.log("Texto + número:", calculadora('+', "hola", 5));
console.log("Operación inválida:", calculadora('%', 10, 5));