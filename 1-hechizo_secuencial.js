const leer = require("prompt-sync")();

function main(params) {
    let raicesMandragora = 0;
    let escarabajosTigre = 0;
    let pocion = 0;

    console.log("ingrese cantidad de Mandragora:");
    raicesMandragora = Number(leer());
    console.log("ingrese cantidad de escarabajos ojos de tigre");
    escarabajosTigre = Number(leer());

    pocion = raicesMandragora + escarabajosTigre;

    console.log("***RESUMEN DE INGREDIENTES***");
    console.log("raices de mandragora:", raicesMandragora);
    console.log("escarabajos de ojo de tigre:", escarabajosTigre);
    console.log("Total de ingredientes:", pocion);

}
main();
