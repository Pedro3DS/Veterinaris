function login(){
    var userbd = ["Pedro"]
    var username = document.getElementById("user_input").value
    
    if (userbd.includes(username)){
        var url = "veterinarismain.html"
        window.close()
        window.open(url)
    }
    else{
        document.getElementById("card").style.display = "block"
    }
}

function ok(){
    document.getElementById("card").style.display = "none"
}