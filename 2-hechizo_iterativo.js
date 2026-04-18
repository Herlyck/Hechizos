const leer = require("prompt-sync")();
const HECHIZO = "PATRONUS";

function main(params) {
    let turnos = 5;
    let intento = "DEF";
    let vidaDementor = 1000;
    let vidaEstudiante = 350;
    let dañoDementor = 75;
    let dañoEstudiante = 267;


    for (i = 0; i < turnos; i++) {

        console.log("Ingrese hechizo");
        intento = leer();

        if (intento === HECHIZO) {
            console.log("***Iniciar simulacion***");
            console.log("turnos restantes", 4 - i);
            console.log("estudiante:", vidaEstudiante, "/dementor:", vidaDementor);

            console.log("usa el hechizo");
            console.log("Patronus");
            console.log("acertaste:", dañoEstudiante, "inflingido al dementor");
            vidaDementor -= dañoEstudiante;
            console.log("--------------------------------------");

        } else {
            console.log("***Iniciar simulacion***");
            console.log("turnos restantes", 4 - i);
            console.log("estudiante:", vidaEstudiante, "/ dementor:", vidaDementor);
            console.log("usa el hechizo");
            console.log("Patronus");
            console.log("fallaste:", dañoDementor, "Daño recibido");
            vidaEstudiante -= dañoDementor;
            console.log("--------------------------------------");
        }

    }
}
main();