function carne(){
    document.getElementById("carne1").classList.toggle("carne2");
}

var a = 0;
var b = 0;

function diezocho7(){
    document.getElementById("platoCR").classList.toggle("platoCR3");
    a = 18;
}

function veinte7(){
    document.getElementById("platoCR").classList.toggle("platoCR3");
    a = 20;
}

function dieznueve7(){
    document.getElementById("platoCR").classList.toggle("platoCR3");
    a = 19;
}



// 打包

function llevar(){
    b = 1;
}

function enviar9() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoCR").classList.toggle("platoCR3");
    document.getElementById("carne1").classList.toggle("carne2");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}