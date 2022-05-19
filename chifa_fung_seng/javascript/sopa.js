function sopas(){
    document.getElementById("sopas1").classList.toggle("sopas3");

}



var a = 0;
var b = 0;

function oncecincuenta(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 11.50;
}

function nuevecincuenta(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 9.50;
}

function docecincuenta(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 12.50;
}

function dossiete(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 27;
}

function sopera2(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 40;
}

function sopera3(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 33;
}

function sopera4(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 48;
}

function diez(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 10;
}

function cinco(){
    document.getElementById("platoC").classList.toggle("platoC3");
    a = 5;
}

// arroz






function llevar(){
    b = 1;
}

function enviar3() {
    let p = document.getElementById("suma");
    let r = a + b ;
    let c = document.getElementsByName("texto");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    a = 0;
    b = 0;
   

    document.getElementById("platoC").classList.toggle("platoC3");
    document.getElementById("sopas1").classList.toggle("sopas3");

    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}