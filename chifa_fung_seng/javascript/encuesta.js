const btn1 = document.getElementById("boton1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const elejir = document.getElementById("elejir");
const box = document.getElementById("encuesta1");
const lis = document.getElementById("PL");

function comenzar(){
    btn1.style.display = "none";
    document.getElementById("expli1").style.display = "none";
    document.getElementById("encuesta1").style.display = "block";
    
}

btn2.addEventListener("click", function(){
    elejir.innerHTML = "Prefieres mas ... ";
   document.getElementById("bon").style.display = "none";
   document.getElementById("bon2").style.display = "block";

})

btn4.addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon2").style.display = "none";
    lis.style.display = "block";
    document.getElementById("P1").style.display = "block";

})

document.getElementById("btn5").addEventListener("click" , function(){
    document.getElementById("bon2").style.display = "none";
    document.getElementById("bon3").style.display = "block";

})

document.getElementById("btn8").addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon3").style.display = "none";
    document.getElementById("P2").style.display = "block";
    document.getElementById("PL").style.display = "block";

})

document.getElementById("btn9").addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon3").style.display = "none";
    document.getElementById("P3").style.display = "block";
    document.getElementById("PL").style.display = "block";

})

document.getElementById("btn10").addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon3").style.display = "none";
    document.getElementById("P4").style.display = "block";
    document.getElementById("PL").style.display = "block";

})

document.getElementById("btn11").addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon3").style.display = "none";
    document.getElementById("P5").style.display = "block";
    document.getElementById("PL").style.display = "block";

})

document.getElementById("btn12").addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon3").style.display = "none";
    document.getElementById("P6").style.display = "block";
    document.getElementById("PL").style.display = "block";

})

document.getElementById("btn6").addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon2").style.display = "none";
    document.getElementById("P7").style.display = "block";
    document.getElementById("PL").style.display = "block";

})

document.getElementById("btn7").addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon2").style.display = "none";
    document.getElementById("P8").style.display = "block";
    document.getElementById("PL").style.display = "block";

})

document.getElementById("btn3").addEventListener("click" , function(){
    elejir.innerHTML = "Tal vez los siguientes plato te puede interezar";
    document.getElementById("bon").style.display = "none";
    document.getElementById("P9").style.display = "block";
    document.getElementById("PL").style.display = "block";

})

function vol(){
    window.location.replace("carta.html");
}
