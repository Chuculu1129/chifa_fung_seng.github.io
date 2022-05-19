function especial(){
    document.getElementById("especial1").classList.toggle("especial2");
}

var a = 0;
var b = 0;

function veinteuno9(){
    document.getElementById("platoE").classList.toggle("platoE3");
    a = 21;
}

function diezocho9(){
    document.getElementById("platoE").classList.toggle("platoE3");
    a = 18;
}


// 打包

function llevar(){
    b = 1;
}

function enviar12() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoE").classList.toggle("platoE3");
    document.getElementById("especial1").classList.toggle("especial2");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}