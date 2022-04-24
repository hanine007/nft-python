function submitForm() {
    /*if (checkPwd() && checkDate() && checkEmail() && requiredCheck()) {
        document.forms["registerForm"].submit();
        document.location.href="index.html"
    }*/
    
    var nbError = 0;
    if(!checkLastname()){
        nbError++;
    }
    if(!checkFirstname()){
        nbError++;
    }
    if(!checkUsername()){
        nbError++;
    }
    if(!checkPwd()){
        nbError++;
    }
    if(!checkEmail()){
        nbError++;
    }
    if(!checkDate()){
        nbError++;
    }
    if(nbError == 0){
        document.forms["registerForm"].submit();
        //document.location.href="index.html"
    }
    else {
        alert("Un des champs du formulaire n'est pas bien remplit.")
    }
}


function checkLastname() {
    var inputName = document.getElementById('lastname');
    if (inputName.value=="") {
        inputName.className = "box-input error";
        return false;
    }
    else{
        inputName.className = "box-input success";
        return true;
    }
}

function checkFirstname() {
    var inputName = document.getElementById('firstname');
    if (inputName.value=="") {
        inputName.className = "box-input error";
        return false;
    }
    else{
        inputName.className = "box-input success";
        return true;
    }
}

function checkUsername() {
    var inputName = document.getElementById('username');
    if (inputName.value == "") {
        inputName.className = "box-input error";
        return false;
    }
    else{
        inputName.className = "box-input success";
        return true;
    }
}

function checkPwd() {
    var inputName = document.getElementById('userpwd');
    var password = inputName.value;
    
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
        inputName.className = "box-input success";
        return true;
    }
    else{
        inputName.className = "box-input error";
        return false;
    }
}


function checkEmail() {
    var inputName = document.getElementById('useremail');
    var address = inputName.value;
    if (/\S+@\S+\.\S+/.test(address)) {
        inputName.className = "box-input success";
        return true;
    }
    else{
        inputName.className = "box-input error";
        return false;
    }
}

function checkDate() {
    var inputName = document.getElementById('birthdate');
    var date = inputName.value;
    var splitDate = date.split('/');
    var myDate = splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0];
    var d = new Date(myDate);
    var myParse = Date.parse(d);
    if (isNaN(myParse)) {
        inputName.className = "box-input error";
        return false;
    }
    else {
        inputName.className = "box-input success";
        return true;
    }

}

