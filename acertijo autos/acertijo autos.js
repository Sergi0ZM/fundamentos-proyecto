//mostar un alert con el mensaje "hola mundo"
function carro(){

    let car1 = document.getElementById("car1").value;
    let car2 = document.getElementById("car2").value;
    let car3 = document.getElementById("car3").value;
    let car4 = document.getElementById("car4").value;
    let car5 = document.getElementById("car5").value;
    let car6 = document.getElementById("car6").value;
    let car7 = document.getElementById("car7").value;
    let car8 = document.getElementById("car8").value;

    if(car1 =="Shadow" && car2 =="McLaren" && car3 =="March" && car4 =="Ferrari" && car5 =="Lola" && car6 =="Lotus" && car7 =="Iso" && car8 =="Tyrrell"){
        document.getElementById("marca1").innerHTML = "Felicidades, has resulto el acertijo";
    }else{
        document.getElementById("marca1").innerHTML = "Lo siento, no has acertado, vuelve a intentarlo";
    }


}