function login(){
    var userbd = {
        "email" : "Pedro",
        "senha" : "123"
    }
    var username = document.getElementById("user_input").value
    const password = document.getElementById("password").value
    
    if (userbd["email"].includes(username)){
        if (userbd["senha"].includes(password)){
            var url = "veterinarismain.html"
            window.open(url)
            window.close()
        }
        else{
            document.getElementById("card").style.display = "block"
        }
    }
    else{
        document.getElementById("card").style.display = "block"
    }
}

function ok(){
    document.getElementById("card").style.display = "none"
}