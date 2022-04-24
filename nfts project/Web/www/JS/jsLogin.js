
var div = document.getElementById("myDiv")
var form = document.getElementById("loginForm")
form.addEventListener('submit', function (e) {
    e.preventDefault()
    div.innerHTML = ""
    var data = new FormData(form)
   
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if(this.responseText.startsWith("Le")){
                div.innerText = this.responseText;
            }
            else{
                form.innerText = this.responseText;
            }
            
        }
    }

    xhr.open('post', form.getAttribute('action'), true)
    xhr.send(data)
}
)

function link_inscription() {
    document.location.href="index.html"
}

function link_chat() {
    document.location.href="contact.html"
}

(function () {
    var input = document.getElementById("username");
    var input2 = document.getElementById("userpwd");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("connect").click();
        }
    })
    input2.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("connect").click();
        }
    })
})()