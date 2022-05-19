function pollo(){
    document.getElementById("pollo1").classList.toggle("pollo2");
}

var a = 0;
var b = 0;

function veinte3(){
    document.getElementById("platoP").classList.toggle("platoP3");
    a = 20;
}

function dieznueve3(){
    document.getElementById("platoP").classList.toggle("platoP3");
    a = 19;
}

function diezocho3(){
    document.getElementById("platoP").classList.toggle("platoP3");
    a = 18;
}

function diezsiete3(){
    document.getElementById("platoP").classList.toggle("platoP3");
    a = 17;
}




// 打包

function llevar(){
    b = 1;
}

function enviar6() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoP").classList.toggle("platoP3");
    document.getElementById("pollo1").classList.toggle("pollo2");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}