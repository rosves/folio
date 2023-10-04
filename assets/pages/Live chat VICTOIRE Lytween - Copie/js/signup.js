var Lien = 'http://greenvelvet.alwaysdata.net/kwick/api/signup/';

const NameToSignUp = document.getElementById('name_signup');
    FormToSignUp = document.getElementById('formsignup');
    PassToSignup = document.getElementById('passwordsignup');


    FormToSignUp.addEventListener('submit', function signup(event){
        event.preventDefault()
        Lien = Lien + NameToSignUp.value + "/" + PassToSignup.value ;

        fetch(Lien)
        .then(Response=>Response.json())
        .then(function (result){
            console.log(result);
            document.location='login.html';
        });

    });