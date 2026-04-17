const leer = require("prompt-sync")();
const EDAD = 14;
function main(params) {
    let edad=0;
    console.log("que edad tenes?");
    edadRecibida=Number(leer());
    
    if (edadRecibida>= EDAD) {
        console.log("puede comprar una varita");
        
    }else{
        console.log("no tenes la edad suficiente volve en 3 años.");
        
    }
}
main();