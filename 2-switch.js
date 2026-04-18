const leer = require("prompt-sync")();
function main(params) {
    let nucleoVarita=0;

    console.log("escriba el nucleo de varita(0-1-2):");
    nucleoVarita=Number(leer());

    switch (nucleoVarita) {
        case 0:
            console.log("***Detalles del nucleo [0] Fenix***");
            console.log("Fenix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales") 
            console.log("***Fin del Mensaje***");
            console.log("-----------------------------");
           
            
            break;
        case 1:
            console.log("***Detalles del nucleo [1] Unicornio***");
            console.log("Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.");
            console.log("***Fin del Mensaje***");
            console.log("-----------------------------");
            
            break;
        case 2:
            console.log("***Detalles del nucleo [2] Dragon***");
            console.log("Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.");
            console.log("***Fin del Mensaje***");
            console.log("-----------------------------");
            
            break;
        default:
            console.log("***Detalles del nucleo [2] Dragon***");
            console.log("No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido");
            console.log("***Fin del Mensaje***");
            console.log("-----------------------------");
            
            break;
    }
    



}
main();