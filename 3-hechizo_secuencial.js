const leer = require("prompt-sync")();
const EN_RANGO = 5;
const EN_RANGO2 = 10;

function main(params) {
    let cantIngredientes = 0;
    let tiempoPreparacion = 0;

    console.log("cantidad de ingredientes");
    cantIngredientes = Number(leer());
    console.log("tiempo de preparacion");
    tiempoPreparacion = Number(leer());

    console.log("***RESULTADO DE LA PREPARACION***");

    if (cantIngredientes >= EN_RANGO && cantIngredientes <= EN_RANGO2 && tiempoPreparacion === 3) {
        console.log(cantIngredientes >= EN_RANGO);
        console.log(tiempoPreparacion === 3);

    } else {
        console.log("Ingredientes en rango:", (cantIngredientes >= EN_RANGO && cantIngredientes <= EN_RANGO2));
        console.log("Tiempo correcto:", (tiempoPreparacion === 3));
        console.log("Resultado final: Preparación fallida");


    }


}
main();