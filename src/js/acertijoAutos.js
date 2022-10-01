function carro() {
  
    let counter = 0; // Counter is reset at each execution

    let car1 = document.getElementById("car1").value;
    let car2 = document.getElementById("car2").value;
    let car3 = document.getElementById("car3").value;
    let car4 = document.getElementById("car4").value;
    let car5 = document.getElementById("car5").value;
    let car6 = document.getElementById("car6").value;
    let car7 = document.getElementById("car7").value;
    let car8 = document.getElementById("car8").value;
    let spanMarca = document.getElementById("marca1");
    
    if (car1 == "Shadow") {
        counter++;
        console.log(counter)
    } if (car2 == "McLaren") {
        counter++;
        console.log(counter);
    } if (car3 == "March") {
        counter++;
        console.log(counter);
    } if (car4 == "Ferrari") {
        counter++;
        console.log(counter);
    } if (car5 == "Lola") {
        counter++;
        console.log(counter);
    } if (car6 == "Lotus") {
        counter++;
        console.log(counter);
    } if (car7 == "Iso") {
        counter++;
        console.log(counter);
    } if (car8 == "Tyrrell") {
        counter++;
        console.log(counter);
    } else {
        console.log('count-ERROR')
    }
    //  para finalizar
    if (counter >=0) {
        spanMarca.innerHTML = "Sigue intentando, aciertos: " + counter + "/8";
    } 
    if (counter >= 5) {
        spanMarca.innerHTML = "Estás cerca, aciertos: " + counter + "/8";
    }

    if (counter == 8) {
        spanMarca.innerHTML = "Felicidades, has resuelto el acertijo!";
    }
}

// todos los derechos para novoa, romero, cousin, sergei, y jose.
//  en colaboración con D1N0C0D3 

