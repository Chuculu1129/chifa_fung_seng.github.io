function menu() {
    document.getElementById("menu").classList.toggle("part-11");
}

function carta(){
    document.getElementById("carta1").classList.toggle("carta3");
}



var x = 0;
var y = 0;
var z = 0;

// 按钮

function menus() {
    document.getElementById("menus1").classList.toggle("menus3");
}






// aeropuerto
function aeropuerto() {
    document.getElementById("plato1").classList.toggle("plato3");
    x = 13;
}

// chaufa
function chaufa() {
    document.getElementById("plato1").classList.toggle("plato3");
    x = 11;
}

// tallarin de pollo
function tallarinP() {
    document.getElementById("plato1").classList.toggle("plato3");
    x = 12;
}

// tallarin de chancho
function tallarinC() {
    document.getElementById("plato1").classList.toggle("plato3");
    x = 12.50;
}

// menu de 13.50
function shisankuaiban() {
    document.getElementById("plato1").classList.toggle("plato3");
    x = 13.50;
}

// menu 14.00
function shisikuai() {
    document.getElementById("plato1").classList.toggle("plato3");
    x = 14.00;
}

// pollo con yuyo
function polloY() {
    document.getElementById("plato1").classList.toggle("plato3");
    x = 15.50;
}

// kamlu wantan 
function kalu() {
    document.getElementById("plato1").classList.toggle("plato3");
    x = 14.50;
}

// chaufa de chancho
function chaufaC() {
    document.getElementById("plato1").classList.toggle("plato3");
    x =12.50;
}

// pollo trozo con champi;on
function pollotrozo() {
    document.getElementById("plato1").classList.toggle("plato3");
    x =15;
}

// taypa chaufa
function taypaC() {
    document.getElementById("plato1").classList.toggle("plato3");
    x =16.50;
}

// triple
function triple() {
    document.getElementById("plato1").classList.toggle("plato3");
    x =18.50;
}

// tallarin taypa
function taypaT() {
    document.getElementById("plato1").classList.toggle("plato3");
    x =17.50;
}




// ////////////////////////////////////////////

// ????????




////////////////////////////////////


// con sopa
function sopa() {
    y = 1.50;
}

// con wantan frito

function wantan() {
    z = 1;
}

// 发送单餐价到右区域
function enviar() {
    let p = document.getElementById("suma");
    let r = x + y + z;
    let c = document.getElementsByName("text");

    p.innerHTML = p.innerHTML + `
    <p id="suma" name="platoP">${r}</p>
    `;

    x = 0;
    y = 0;
    z = 0;

    document.getElementById("plato1").classList.toggle("plato3");
    document.getElementById("menus1").classList.toggle("menus3");


    // 把勾选框的勾都取消
    for (var i = 0; i < c.length; i++) {
        c[i].checked = false;
    }


}

// 右区域结算总消费

function sumar() {

    let numero = document.getElementsByName("platoP");
    const total = document.getElementById("total");

    for (var i = 1; i < numero.length; i++) {
        var e = 1;

        if(i>1){
            e=2;
        }

        var xx = numero[0].innerHTML;
        var yy = numero[i].innerHTML;
        var ff = Number(e-1)*Number(xx);
        var zz = Number(xx) + Number(yy) - Number(ff);
        var ii = Number(total.innerHTML)+ Number(zz);
        total.innerHTML = ii;
    }

}

// 找钱计算

function dar(){
    let paga = document.getElementById("pagaCon").value;
    let vuelto = document.getElementById("vueltito");
    let vv = Number(paga) - Number(total.innerHTML);

    vuelto.innerHTML = vv ;

}

// 新计算

function nuevo(){
    location.reload();
}