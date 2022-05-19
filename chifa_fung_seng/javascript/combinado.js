function combinado(){
    document.getElementById("combinado1").classList.toggle("combinado2");
}

var a = 0;
var b = 0;

function diezsiete5(){
    document.getElementById("platoCM").classList.toggle("platoCM3");
    a = 17;
}


function diezocho5(){
    document.getElementById("platoCM").classList.toggle("platoCM3");
    a = 18;
}

function veinte5(){
    document.getElementById("platoCM").classList.toggle("platoCM3");
    a = 20;
}

function veinteuno5(){
    document.getElementById("platoCM").classList.toggle("platoCM3");
    a = 21;
}



// 打包

function llevar(){
    b = 1;
}

function enviar11() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoCM").classList.toggle("platoCM3");
    document.getElementById("combinado1").classList.toggle("combinado2");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}