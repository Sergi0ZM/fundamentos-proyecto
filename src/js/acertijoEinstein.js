//Variables declaradas como globales para poder ser usadas en multiples funciones
let contadorc1=0;
let contadorc2=0;
let contadorc3=0;
let contadorc4=0;
let contadorc5=0;
//suma para que no halla un sola acomulacion de puntos y se cuente las respuestas correctas
let suma;

//en cada funcion ira un if y un else, el else se usara en caso de que la persona 
//desmarque la opcion que se le esta contando y de esta manera no halla conteo erroneo
//de respuestas correctas

function nacionalidad(){
    
    let nacionalidadcasa1 = document.getElementById("casa1nacionalidad").value;
    let nacionalidadcasa2 = document.getElementById("casa2nacionalidad").value;
    let nacionalidadcasa3 = document.getElementById("casa3nacionalidad").value;
    let nacionalidadcasa4 = document.getElementById("casa4nacionalidad").value;
    let nacionalidadcasa5 = document.getElementById("casa5nacionalidad").value;

    if(nacionalidadcasa1=="Noruego" ){
        contadorc1=1;
    }else{
        contadorc1=0;
    }
    if(nacionalidadcasa2=="Danes"){
        contadorc2=1
    }else{
        contadorc2=0;
    }
    if(nacionalidadcasa3=="Britanico"){
        contadorc3=1
    }else{
        contadorc3=0;
    }
    if(nacionalidadcasa4=="Aleman"){
        contadorc4=1
    }else{
        contadorc4=0;
    }
    if(nacionalidadcasa5=="Sueco"){
        contadorc5=1
    }else{
        contadorc5=0;
    }
    suma=contadorc1+contadorc2+contadorc3+contadorc4+contadorc5;
    //enviar mensaje al span de id respuestasnacionalidad
    let spanNacionalidad = document.getElementById("respuestasnacionalidad");
    spanNacionalidad.innerHTML = "  "+suma+ "/5";   
    
}

function color(){
    let color1 = document.getElementById("casa1color").value;
    let color2 = document.getElementById("casa2color").value;
    let color3 = document.getElementById("casa3color").value;
    let color4 = document.getElementById("casa4color").value;
    let color5 = document.getElementById("casa5color").value;

    if(color1=="Amarilla" ){
        contadorc1=1;
    }
    else{
        contadorc1=0;
    }
    if(color2=="Azul"){
        contadorc2=1
    }else{
        contadorc2=0;
    }
    if(color3=="Roja"){
        contadorc3=1
    }else{
        contadorc3=0;
    }
    if(color4=="Verde"){
        contadorc4=1
    }else{
        contadorc4=0;
    }
    if(color5=="Blanca"){
        contadorc5=1
    }
    else{
        contadorc5=0;
    }
    suma=contadorc1+contadorc2+contadorc3+contadorc4+contadorc5;
    //enviar mensaje al span de id respuestasnacionalidad
    let spanColor = document.getElementById("respuestascolor");
    spanColor.innerHTML = "  "+suma+ "/5";
}

function cigarrillos(){
    let cigarrillos1 = document.getElementById("casa1cigarrillos").value;
    let cigarrillos2 = document.getElementById("casa2cigarrillos").value;
    let cigarrillos3 = document.getElementById("casa3cigarrillos").value;
    let cigarrillos4 = document.getElementById("casa4cigarrillos").value;
    let cigarrillos5 = document.getElementById("casa5cigarrillos").value;

    if(cigarrillos1=="Dunhill" ){
        contadorc1=1;
    }else{
        contadorc1=0;
    }
    if(cigarrillos2=="Blends"){
        contadorc2=1
    }else{
        contadorc2=0;
    }
    if(cigarrillos3=="Pall Mall"){
        contadorc3=1
    }else{
        contadorc3=0;
    }
    if(cigarrillos4=="Prince"){
        contadorc4=1
    }else{
        contadorc4=0;
    }
    if(cigarrillos5=="Blue Master"){
        contadorc5=1
    }
    else{
        contadorc5=0;
    }

    suma=contadorc1+contadorc2+contadorc3+contadorc4+contadorc5;
    //enviar mensaje al span de id respuestasnacionalidad
    let spanCigarrillos = document.getElementById("respuestascigarrillos");
    spanCigarrillos.innerHTML = "  "+suma+ "/5";
}

function bebida(){
    let bebida1 = document.getElementById("casa1bebida").value;
    let bebida2 = document.getElementById("casa2bebida").value;
    let bebida3 = document.getElementById("casa3bebida").value;
    let bebida4 = document.getElementById("casa4bebida").value;
    let bebida5 = document.getElementById("casa5bebida").value;

    if(bebida1=="Agua" ){
        contadorc1=1;
    }else{
        contadorc1=0;
    }
    if(bebida2=="Te"){
        contadorc2=1
    }else{
        contadorc2=0;
    }
    if(bebida3=="Leche"){
        contadorc3=1
    }else{
        contadorc3=0;
    }
    if(bebida4=="Cafe"){
        contadorc4=1
    }else{
        contadorc4=0;
    }
    if(bebida5=="Cerveza"){
        contadorc5=1
    }else{
        contadorc5=0;
    }

    suma=contadorc1+contadorc2+contadorc3+contadorc4+contadorc5;
    //enviar mensaje al span de id respuestasnacionalidad
    let spanBebida = document.getElementById("respuestasbebida");
    spanBebida.innerHTML = "  "+suma+ "/5";
}

function mascota(){
    let mascota1 = document.getElementById("casa1mascota").value;
    let mascota2 = document.getElementById("casa2mascota").value;
    let mascota3 = document.getElementById("casa3mascota").value;
    let mascota4 = document.getElementById("casa4mascota").value;
    let mascota5 = document.getElementById("casa5mascota").value;

    if(mascota1=="Gato" ){
        contadorc1=1;
    }else{
        contadorc1=0;
    }
    if(mascota2=="Caballo"){
        contadorc2=1
    }else{
        contadorc2=0;
    }
    if(mascota3=="Pajaro"){
        contadorc3=1
    }else{
        contadorc3=0;
    }
    if(mascota4=="Pez"){
        contadorc4=1
        alert("Felicidades, has ganado")
    }else{
        contadorc4=0;
    }
    if(mascota5=="Perro"){
        contadorc5=1
    }
    else{
        contadorc5=0;
    }
    suma=contadorc1+contadorc2+contadorc3+contadorc4+contadorc5;
    //enviar mensaje al span de id respuestasnacionalidad
    let spanMascota = document.getElementById("respuestasmascotas");
    spanMascota.innerHTML = "  "+suma+ "/5";
}