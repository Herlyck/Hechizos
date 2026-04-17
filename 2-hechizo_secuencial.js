const leer = require("prompt-sync")();


function main(params) {
    let estudiantes = 0;
    let estudiantesVarita = 0;
    let cantLibros = 0;
    let total = 0;

    console.log("cantidad de estudiantes");
    estudiantes = Number(leer());

    console.log("Estudiantes con varita");
    estudiantesVarita = Number(leer());

    console.log("cantidad de libros:");
    cantLibros = Number(leer());
    

    console.log("estudiantes:", estudiantes);
    console.log("estudiantes con varita:", estudiantesVarita);
    console.log("cantidad de libros:", cantLibros);


    total = (estudiantesVarita*3+cantLibros*2);
    console.log("Total de materiales:", total);
}
main();