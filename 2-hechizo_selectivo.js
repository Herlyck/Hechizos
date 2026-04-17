const leer = require("prompt-sync")();
const GRYFFINDOR= 90;
const HUFFLEPUFF= 70;
const RAVENCLAW= 50;

function main(params) {
let puntuacion=0;

console.log("puntuacion recibida");
puntuacion= Number(leer());

if (puntuacion>=GRYFFINDOR){
    console.log("vas a Gryffindor");
    
}else if(puntuacion>=HUFFLEPUFF && puntuacion<=GRYFFINDOR){
    console.log("vas a Hufflepuff");
    
}else if (puntuacion>=RAVENCLAW && puntuacion<=HUFFLEPUFF){
    console.log("vas a Ravenclaw");
}else{
    console.log("vas a Slytherin");
    
}

    

}
main();
