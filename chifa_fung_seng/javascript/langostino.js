function langostino(){
    document.getElementById("langostino1").classList.toggle("langostino2");
}

var a = 0;
var b = 0;

function veinte6(){
    document.getElementById("platoL").classList.toggle("platoL3");
    a = 20;
}

function veinteuno6(){
    document.getElementById("platoL").classList.toggle("platoL3");
    a = 21;
}

function veintedos6(){
    document.getElementById("platoL").classList.toggle("platoL3");
    a = 22;
}





// 打包

function llevar(){
    b = 1;
}


function enviar8() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoL").classList.toggle("platoL3");
    document.getElementById("langostino1").classList.toggle("langostino2");


    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}