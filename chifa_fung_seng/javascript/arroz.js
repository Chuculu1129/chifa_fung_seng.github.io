function arroz(){
    document.getElementById("arroz1").classList.toggle("arroz2");
}

var a = 0;
var b = 0;


function quince(){
    document.getElementById("platoA").classList.toggle("platoA3");
    a = 15;
}

function catorce1(){
    document.getElementById("platoA").classList.toggle("platoA3");
    a = 14;
}

function diesiseis1(){
    document.getElementById("platoA").classList.toggle("platoA3");
    a = 16;
}

function cuarenta(){
    document.getElementById("platoA").classList.toggle("platoA3");
    a = 40;
}

function cuarentatres(){
    document.getElementById("platoA").classList.toggle("platoA3");
    a = 43;
}




function llevar(){
    b = 1;
}

function enviar4() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoA").classList.toggle("platoA3");
    document.getElementById("arroz1").classList.toggle("arroz2");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}