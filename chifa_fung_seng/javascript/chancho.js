function chancho(){
    document.getElementById("chancho1").classList.toggle("chancho2");
}

var a = 0;
var b = 0;

function veinte4(){
    document.getElementById("platoCH").classList.toggle("platoCH3");
    a = 20;
}

function dieznueve4(){
    document.getElementById("platoCH").classList.toggle("platoCH3");
    a = 19;
}

function diezocho4(){
    document.getElementById("platoCH").classList.toggle("platoCH3");
    a = 18;
}


// 打包

function llevar(){
    b = 1;
}

function enviar7() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoCH").classList.toggle("platoCH3");
    document.getElementById("chancho1").classList.toggle("chancho2");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}