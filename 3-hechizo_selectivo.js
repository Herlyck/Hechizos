const leer = require("prompt-sync")();

function main(params) {
  let nombrePlanta="def";
  let especiePlanta="mandragora";
  let especiePlanta2="valeriana";
  let especiePlanta3="bubotuber";
  let especiePlanta4="whomping willow";


  console.log("que tipo de planta es?");
  nombrePlanta=leer();
  if (nombrePlanta===especiePlanta || nombrePlanta===especiePlanta2) {
    console.log("planta presentada:", nombrePlanta)
    console.log("buen ejemplar toma asiento para iniciar el examen");
    
    
  } else if(nombrePlanta===especiePlanta3){
    console.log("planta presentada:", nombrePlanta);
    console.log("No es posible iniciar el examen con esta palanta peligrosa");
    
  }else{
    if(nombrePlanta===especiePlanta4){
        console.log("No es posible iniciar el examen con esta palanta peligrosa");
        
    }
    else{
        console.log("planta no admitida");
        
    }
  }

  
}
main();