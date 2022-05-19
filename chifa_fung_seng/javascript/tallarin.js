function tallarin(){
    document.getElementById("tallarin1").classList.toggle("tallarin2");
}

var a = 0;
var b = 0;

function veintiuno(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 21;
}

function diesiocho(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 18;
}

function diesiseis(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 16;
}

function diesisiete(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 17;
}


function veinte2(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 20;
}

function cuatroseis(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 46;
}

function cincodos(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 52;
}

function seisdos(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 62;
}

function dieznueve2(){
    document.getElementById("platoT").classList.toggle("platoT3");
    a = 19;
}



function llevar(){
    b = 1;
}

function enviar5() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoT").classList.toggle("platoT3");
    document.getElementById("tallarin1").classList.toggle("tallarin2");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}