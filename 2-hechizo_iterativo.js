const leer = require("prompt-sync")();
const HECHIZO = "PATRONUS";
const TURNOS = 5;
function main(params) {
    
    let hechizoIngresado = "DEF";
    let vidaDementor = 1000;
    let vidaEstudiante = 350;
    let danioDementor = 75;
    let danioEstudiante = 267;


    for (i = 0; i < TURNOS; i++) {

        console.log("Ingrese hechizo");
        hechizoIngresado = leer();
        console.log("***Iniciar simulacion***");
        console.log("turnos restantes", (TURNOS - 1) - i);
        console.log("estudiante:", vidaEstudiante, "/dementor:", vidaDementor);
        console.log("usa el hechizo");
        console.log(hechizoIngresado);

        if (hechizoIngresado === HECHIZO) {
            console.log("acertaste:", danioEstudiante, "inflingido al dementor");
            vidaDementor -= danioEstudiante;
        } else {
            console.log("fallaste:", danioDementor, "Daño recibido");
            vidaEstudiante -= danioDementor;   
        }
        console.log("--------------------------------------");
    }
    console.log("***Simulacion finalizada***");
}
main();