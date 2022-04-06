var calificacion = document.getElementById("calificacion");
var contenido = document.getElementById("content");
var btn = document.getElementById("btn");
var lista = document.getElementById("lista");

btn.addEventListener("click",function(){
    lista.innerHTML = `
    <div class="article">
    <h5>${calificacion.value}</h5>
    <p>${content.value}</p>
    </div>    
    ` + lista.innerHTML;

    calificacion.value = "" ;
    content.value = "" ;
})