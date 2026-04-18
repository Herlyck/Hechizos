const leer = require("prompt-sync")();
const NOMBRE_HECHIZO = "wingardium leviosa";
const NOMBRE_HECHIZO2 = "Expecto Patronum";
const NOMBRE_HECHIZO3 = "Expelliarmus";


function main(params) {
    let cantIntentos = 2;
    let intento = "def";

    for (i = 0; i < cantIntentos; i++) {
        console.log("Ingrese el nombre del hechizo:");
        intento = leer();
        if (intento === NOMBRE_HECHIZO || intento === NOMBRE_HECHIZO2 || intento === NOMBRE_HECHIZO3) {
                  
            console.log("***Iniciar simulacion***");
            console.log("Hechizo correcto:", intento);
            console.log("----------------------------------");
            
        } else {
            console.log("----------------------------------");
            console.log("***Iniciar simulacion***");
            console.log("Hechizo incorrecto:", intento);
            console.log("intentos restantes:",1-i);
            console.log("----------------------------------");
        }
    }
}
main();