const leer = require("prompt-sync")();
const DETALLE_NUCLEO= "***Detalles del nucleo [";


function main(params) {
    let nucleoVarita = 0;
    

    console.log("escriba el nucleo de varita(0-1-2):");
    nucleoVarita = Number(leer());
    
    if (nucleoVarita <= 2 && nucleoVarita>= 0 && !isNaN(nucleoVarita)) {
        process.stdout.write(DETALLE_NUCLEO + nucleoVarita);
    }

    switch (nucleoVarita) {
        case 0:
            console.log("] Fenix***");
            break;
        case 1:
            console.log("] Unicornio***");
            break;
        case 2:
            console.log("] Dragon***");
            break;
        
    }

    switch (nucleoVarita) {
        case 0:
            console.log("Fenix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales")
            break;
        case 1:
            console.log("Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.");
            break;
        case 2:
            console.log("Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.");
            break;
        default:
            console.log("No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido");
            break;
    }
    console.log("***Fin del Mensaje***");
    console.log("-----------------------------");
}
main();