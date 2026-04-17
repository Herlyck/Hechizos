const leer = require("prompt-sync")();


function main(params) {
    let cantIngredientes = 0;
    let enRango = 5;
    let enRango2 = 10;
    let tiempoPreparacion=0; 

    console.log("cantidad de ingredientes");
    cantIngredientes = Number(leer());
    console.log("tiempo de preparacion");
    tiempoPreparacion=Number(leer());

    

    if (cantIngredientes >= enRango && cantIngredientes <= enRango2 && tiempoPreparacion===3) {
        console.log("***RESULTADO DE LA PREPARACION***");
        
        console.log("cantidad dentro del rango: true");

        console.log("Tiempo de preparacion exacto: true");
        

    } else {
        console.log("***RESULTADO DE LA PREPARACION***");
        
        console.log("cantidad dentro del rango: false");

        console.log("Tiempo de preparacion exacto: false");

    }

   
}
main();