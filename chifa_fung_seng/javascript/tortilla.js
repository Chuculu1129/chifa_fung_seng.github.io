function tortilla(){
    document.getElementById("tortilla1").classList.toggle("tortilla2");
}

var a = 0;
var b = 0;

function trece8(){
    document.getElementById("platoTR").classList.toggle("platoTR3");
    a = 13;
}

function catorce8(){
    document.getElementById("platoTR").classList.toggle("platoTR3");
    a = 14;
}

function doce8(){
    document.getElementById("platoTR").classList.toggle("platoTR3");
    a = 12;
}



// 打包

function llevar(){
    b = 1;
}


function enviar10() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoTR").classList.toggle("platoTR3");
    document.getElementById("tortilla1").classList.toggle("tortilla2");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}