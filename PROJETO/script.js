
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "toyota" && senha =="123"){
        location.href = "home.html";
    }
    else{
    alert('Usuario ou senha incorretos');
    }
}
