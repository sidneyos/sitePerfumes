function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "1234") {
        location.href = "perfil.html";
    } else {
        alert('usuario ou senha incorretos!')
    }

}