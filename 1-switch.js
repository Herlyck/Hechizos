const leer = require("prompt-sync")();
const POCION = "Felix Felicis";
const POCION_2 = "Polvo de Flu";
const POCION_3 = "Pocion Multijugos";


function main(params) {
    let pocionNueva = "def";

    console.log("ingrese pocion:");
    pocionNueva = leer();

    switch (pocionNueva) {
        case POCION:
            console.log("***Info de pocion Felix Felicis***");
            console.log("Es extremadamente compleja y peligrosa.");
            console.log("***Fin del informe***");
            break;

        case POCION_2:
            console.log("***Info de pocion Polvo De Flu***");
            console.log("Polvo de Flu - es compleja pero útil en la red de transportación.");
            console.log("***Fin del informe***");
            break;

        case POCION_3:
            console.log("***Info de pocion Pocion Multijugos***");
            console.log("es complicada pero muy útil para transformaciones temporales.");
            console.log("***Fin del informe***");
            break;

        default:
            console.log("No tenemos información sobre esa poción en nuestros registros.");
            console.log("***Fin del informe***");
            break;





    }
}
main();

