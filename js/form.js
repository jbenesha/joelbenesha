
//<!-- HIT226 WEB STRUCTURE 
//S280615
//JOEL BENESHA
//LIVING STYLE GUIDES  -->
// javascript


//----------------Check is local storage is suppported--------------------------\\

function supports_html5_storage(){
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
}



if(Modernizr.eventlistener){ //check if addEventListener is supported
    attachEvents();
  }else{  //inform or change elements that use listeners!
  console.log("event listener not supported");
    }

//----------------VARIABLES--------------------------\\
var nameInput = document.getElementById('name');
var mailInput = document.getElementById('mail');
var msgInput = document.getElementById('msg');

var nameOutput = document.getElementById('receiverName');
var mailOutput = document.getElementById('receiverMail');
var msgOutput = document.getElementById('receiverMsg');


var output = document.getElementById("receiverOutput");

var enterBtn = document.getElementById('enter');
var retrieveBtn = document.getElementById('readDatabase');
var resetBtn = document.getElementById('resetDatabase');

var storageIndex = 0;

var enterBtnListenerName = listenerDecorator(storeName);

var retrieveBtnListener = listenerDecorator(retrieveText);
var resetBtnListener = listenerDecorator(resetDatabase);
addListeners();

//----------------EventListener--------------------------\\

function addListeners() {
    if (!document.addEventListener) {
        enterBtn.attachEvent('onclick', enterBtnListenerName);

        retireveBtn.attachEvent('onclick', retrieveBtnListener);
        resetBtn.attachEvent('onclick', resetBtnListener);
    } else {
        enterBtn.addEventListener('click', enterBtnListenerName, false);


        retrieveBtn.addEventListener('click', retrieveBtnListener, false);
        resetBtn.addEventListener('click', resetBtnListener, false);
    }
}

//----------------ListenerDecorator--------------------------\\

function listenerDecorator(functionToCall) {
    var returnableListener = function(e) {
        if (typeof e === undefined) {
            e = window.event;
        }
        if (typeof e.preventDefault !== undefined) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        functionToCall();
    }
    return returnableListener;
}

//----------------STORING DATA--------------------------\\
function storeName() {
    var name = nameInput.value;
    var mail = mailInput.value;
    var msg = msgInput.value;
    if (name !== null) {
        localStorage.setItem(storageIndex++, name);

        nameInput.value = "";
        nameInput.focus();
        output.innerHTML = "";
        nameOutput.innerHTML = "Data Entered";
    }

    if (mail !== null) {
        localStorage.setItem(storageIndex++, mail);
        mailInput.value = "";

    }
    if (msg !== null) {
        localStorage.setItem(storageIndex++, msg);

        msgInput.value = "";
    }

}


//----------------RETRIEVING DATA--------------------------\\

function retrieveText() {
    var returnableText = "";
    if (localStorage.length == 0) {
        returnableText = "The database is empty";
        output.innerHTML = returnableText;
    } else {
        for (var i = 0; i < localStorage.length; i++) {
            returnableText += i + ": " + localStorage.getItem(i) + ", ";
        }
        output.innerHTML = "Data Retrieved: " + returnableText;
        nameOutput.innerHTML = "";
        mailOutput.innerHTML = "";
        msgOutput.innerHTML = "";
    }
    console.log(localStorage);
}

//----------------RESET LOCAL MEMORY--------------------------\\

function resetDatabase() {
    localStorage.clear();
    output.innerHTML = "Database Reset"; //reset output
    nameOutput.innerHTML = "";
    mailOutput.innerHTML = "";
    msgOutput.innerHTML = "";
    storageIndex = 0;
}

//----------------------------validation for form-------------------------------------\\


function validateName(){

    var name =document.getElementById("name").value;

    if(name.length == 0){

        producePrompt("Name is required","prompt", "red");
        return false;
    }

    if(!name.match(/([A-Z])\w+/)){

        producePrompt("Enter First and last Name","prompt", "red");
        return false;

    }

    producePrompt(" Welcome  " + name ,"prompt", "green");
    return true;
}

function producePrompt(message, promptLocation, color){

    document.getElementById(promptLocation).innerHTML =message;
    document.getElementById(promptLocation).style.color =color;

}


function validateEmail(){

    var email =document.getElementById("mail").value;

    if(email.length == 0){

        producePrompt("Name is required","promptEmail", "red");
        return false;
    }

    if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

        producePrompt("Incorrect Email Address","promptEmail", "red");
        return false;
    }

    producePrompt(" valid email address " + email ,"promptEmail", "green");
    return true;
}



function validateCommment(){


    var comment =document.getElementById("msg").value;
    var required = 30;
    var left = required - comment.length;

    if(left > 0){

        producePrompt(left + "Characters Required", "promptMsg" , "red");
        return false;
    }
    producePrompt("valid comment", "promptMsg" , "green");
    return true;
}

function producePrompt(message, promptLocation, color){

    document.getElementById(promptLocation).innerHTML =message;
    document.getElementById(promptLocation).style.color =color;

}


function validateForm(){

    if(!validateName()|| !validateEmail() || !validateCommment()){

        jsShow("formPrompt");
        producePrompt("Form must be valid to submit", "formPrompt" , "red");
        setTimeout(function(){jsHide("formPrompt")}, 2000);
    }
}

function jsShow(id){

    var comment =document.getElementById(id).style.display ="block";

}

function jsHide(id){

    var comment =document.getElementById(id).style.display ="none";

}














