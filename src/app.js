// Versión inicial
const readline = require('readline');

// Función de bienvenida
function mostrarBienvenida() {
    console.log('\n' + '='.repeat(60));
    console.log('    🚀 BIENVENIDO A MI APLICACIÓN JAVASCRIPT BÁSICA 🚀');
    console.log('='.repeat(60));
    console.log('\n📝 Este es un código básico en JavaScript que incluye:');
    console.log('   • Funciones interactivas con readline');
    console.log('   • Manejo de entrada del usuario');
    console.log('   • Cálculos de edad con fechas');
    console.log('   • Sistema de menú navegable');
    console.log('\n💡 Características técnicas:');
    console.log('   • Node.js con módulo readline nativo');
    console.log('   • Interfaz de consola amigable');
    console.log('   • Validación de datos de entrada');
    console.log('\n🎯 ¡Explora las diferentes opciones del menú!');
    console.log('='.repeat(60) + '\n');
}

const readline = require('readline');

function saludar() {
    console.log("Hola mundo");
}

mostrarBienvenida();
saludar();
function saludarInteractivo() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('¿Cuál es tu nombre? ', (nombre) => {
        console.log(`¡Hola ${nombre}! Bienvenido/a.`);
        rl.close();
        setTimeout(mostrarMenu, 1500);
    });
}

function calcularEdad() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Ingresa tu fecha de nacimiento (DD/MM/AAAA): ', (fechaNacimiento) => {
        try {
            const [dia, mes, año] = fechaNacimiento.split('/');
            const fechaNac = new Date(año, mes - 1, dia);
            const hoy = new Date();
            
            if (fechaNac > hoy) {
                console.log('La fecha de nacimiento no puede ser en el futuro.');
            } else {
                let edad = hoy.getFullYear() - fechaNac.getFullYear();
                const mesActual = hoy.getMonth();
                const diaActual = hoy.getDate();
                
                if (mesActual < fechaNac.getMonth() || 
                    (mesActual === fechaNac.getMonth() && diaActual < fechaNac.getDate())) {
                    edad--;
                }
                
                console.log(`Tienes ${edad} años.`);
            }
        } catch (error) {
            console.log('Formato de fecha inválido. Usa DD/MM/AAAA.');
        }
        rl.close();
        setTimeout(mostrarMenu, 1500);
    });
}

// Función para mostrar un menú de opciones
function mostrarMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('\n=== MENÚ INTERACTIVO ===');
    console.log('1. Saludo simple');
    console.log('2. Saludo personalizado');
    console.log('3. Calcular edad');
    console.log('4. Salir');
    
    rl.question('Selecciona una opción (1-4): ', (opcion) => {
        switch(opcion) {
            case '1':
                saludar();
                rl.close();
                setTimeout(mostrarMenu, 1000);
                break;
            case '2':
                rl.close();
                saludarInteractivo();
                break;
            case '3':
                rl.close();
                calcularEdad();
                break;
            case '4':
                console.log('¡Hasta luego!');
                rl.close();
                break;
            default:
                console.log('Opción no válida. Intenta de nuevo.');
                rl.close();
                setTimeout(mostrarMenu, 1000);
                break;
        }
    });
}

// Iniciar la aplicación interactiva
mostrarMenu();
