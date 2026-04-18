const leer = require("prompt-sync")();
const HECHIZO_NIVEL_1 = 3245;
const HECHIZO_NIVEL_1B = 2312;
const HECHIZO_NIVEL_2 = 5231;
const HECHIZO_NIVEL_2B = 124;

function main(params) {
    let codigoHechizo = 0;

    console.log("ingrese codigo de hechizo");
    codigoHechizo = Number(leer());

    switch (codigoHechizo) {
        case HECHIZO_NIVEL_1:
            console.log([HECHIZO_NIVEL_1], "Wingardium Leviosa");
            break;
        case HECHIZO_NIVEL_1B:
            console.log([HECHIZO_NIVEL_1B],"Expelliarmus");
            break;
        case HECHIZO_NIVEL_2:
            console.log([HECHIZO_NIVEL_2],"Expecto Patronum");
            break;
        case HECHIZO_NIVEL_2B:
            console.log([HECHIZO_NIVEL_2B],"Avada Kedavra");
            break;
        default:
            console.log("codigo incorrecto");
            
            break;
    }
}
main();