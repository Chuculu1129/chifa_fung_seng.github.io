

function login() {
    var contra = document.getElementById("numero");
    var ingre = contra.value;
    var clave = 201129;


    if (ingre != clave) {
        document.getElementById("noti").innerHTML = "请输入正确密码!";



    }
    else {
        window.open('calculador.html');

    }
}


