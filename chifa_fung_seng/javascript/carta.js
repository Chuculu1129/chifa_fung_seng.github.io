function sopa(){
    document.getElementById("sopa").classList.toggle("sopa1");
}

function arroz(){
    document.getElementById("arroces").classList.toggle("arroz2");
}

function tallarinn(){
    document.getElementById("tallarin").classList.toggle("tallarin3");
}

function pollo(){
    document.getElementById("pollo").classList.toggle("pollo3");
}

function chancho(){
    document.getElementById("chancho").classList.toggle("chancho3");
}

function langostino(){
    document.getElementById("langostino").classList.toggle("langostino3");
}

function res(){
    document.getElementById("res").classList.toggle("res3");
}

function tortilla(){
    document.getElementById("tortilla").classList.toggle("tortilla3");
}

function combinado(){
    document.getElementById("combinado").classList.toggle("combinado3");
}

function especial(){
    document.getElementById("platosE").classList.toggle("platosE3");
}

function combo(){
    document.getElementById("combo").classList.toggle("combo3");
}

// 分开。。。。。。。。。。。。。。

const a = " arroz blanco salteado en wok con";
const b = " y condimentos";
const c = " y arroz chaufa";
const d = " con col china , pakchoi , frejolito chino , pimenton , brocoli";
const e = "pollo de parte de pecho";
const f = "piña"

function volver(){
    document.getElementById("ventana").classList.toggle("especi");
}


function aeropuerto(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "arroz blanco salteado en wok con pollo , huevo , frejolito chino , fideo , cebolla china , sillao y condimentos.";
}

function chaufa(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "arroz blanco salteado en wok con pollo , cebolla china , huevo , sillao y condimentos";
}

function tallarin(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "tallarin chifa salteado con pollo , col china , frejolito chino , pimenton " + b;

}

function tallachancho(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "tallarin chifa salteado con chancho asado , col china , frejolito chino , pimenton" + b;

}

function pverdura(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "pollo de parte pecho sancochado salteado" + d + "</br>" + c;

}

function cverdura(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "chancho asado salteado" + d + "</br>" + c;

}

function ct(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "chancho asado salteado con piña y pimenton en salsa de tamarindo" + "</br>" + c;

}

function chi(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "pollo de parte de pierna apanado en chuño frito , con salta ostion" + "</br>" +  c;

}

function tipa(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "pollo de parte pecho envuelto en huevo y harinas frito , acompañado con salsa de tamarindo" + "</br>" + c;
}

function penrr(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "pollo de parte pecho enrrollado con col china y esparragos , revuelto en harina y huevo frito , acompañado con salsa de ostion" + "</br>" + c;
}

function enrrv(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "pollo enrrollado saltado " + d + c ;
}

function pyuyo(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = e + "salteado con yuyo chino" + d + c ;
}

function cp(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "arroz chaufa de pollo , acompañado con tallarin de pollo";
}

function cver(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "chancho asado salteado" + d + ", ajo" + c;
}

function pf(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = e + "salteado con frejolito chino" + c;
}

function kw(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "diversas carnes como pollo , chancho , langostino y huevo de codorniz , salteado en salsa de tamarindo . acompñado de 3 wantan frito " + c;
}

function tor(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "tortilla de huevo con pollo y verduras" + c;
}

function ls(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "carne de res salteado con cebolla roja , tomate , aji , con papas fritas" +c;
}

function pv(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "filetes de pescado frito salteado" + d + c ;
}

function ctt(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "chancho asado salteado con piña y pimenton en salsa de tamarindo y acompañado de tallarin chifa";
}

function pp(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = e + "salteado con" + f + "en salsa de tamarindo" + c;
}

function cv(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "carne de res salteado " + d + c;
}

function pver(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "filetes de pescado frito salteado" + d + c;
}

function acc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = a + "chancho asado , huevo , cebolla china" + b;
}

function comc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "chaufa de chancho asado con tallarin de chancho asado";
}

function pep(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "enrrollado de pollo salteado con" + f + " y pimenton en salsa de tamarindo" + c;
}

function ptc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "trozos de pollo parte pierna frito , salteado" + d + "y champiñones." + c;
}

function tpt(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "trozo de pollo parte pierna frito , salteado" + d + "y tallarin chifa.";
}

function ptaypa(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "carne de pollo , chancho , langostino , res y huevo de codorniz salteado" + d + c;
}

function af(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "alitas de pollo envuelto con harina y huevo frito" + c;
}

function tl(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "langostinos salteado" + d + "y tallarin chifa.";
}

function tcr(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "carne de res salteado" + d + "y tallarin chifa.";
}

function lsv(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "langostino saltado" + d + c;
}

function ptausi(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = e + "salteado" + d + ", tausi" + c;
}

function lik(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "pollo de parte de pierna apanado frito" + c;
}

function tri(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "chijaukay + tipakay + chaufa";
}

function chip(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "trozos de pollo frito , acompañado de jugo de limon" + c;
}

function lpc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "langostino salteado con" + f + " y pimenton en salsa de tamarindo" + c;
}

function tt(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "variedades de carnes como pollo , chancho , langostino , carne de res y huevo de codorniz salteado" + d + "y tallarin chifa";
}

function ac(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "arroz salteado con chancho asado , fideo , frejolito chino , huevo , cebolla china , sillao " + b;
}

function perrp(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "enrrollado de pollo salteado con" + f + " , pimenton " + c;
}

function ptcp(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "trozo de pollo frito salteado con " + f + " , pimenton en salsa de tamarindo " + c;
}

function cfac(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "chancho asado salteado con frejolito chino " + c;
}

function crfcc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "carne de res salteado con frejolito chino " + c;
}

function ptfcc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "trozos de pollo frito salteado con frejolito chino " + c;
}

function alpcc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "alita de pollo frito salteado con " + f + " , pimenton en salsa de tamarindo" + c;
}

function alvvcc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "alita de pollo frito salteado " + d + "</br>" + c;
}

function hcvc(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "huevo de codorniz salteado " + d + "</br>" + c;
}

function laac(){
    document.getElementById("ventana").classList.toggle("especi");
    document.getElementById("espe").innerHTML = "langostino revuelto con harina y huevo , frito " + c;
}









