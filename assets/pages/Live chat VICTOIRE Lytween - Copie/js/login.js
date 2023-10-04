var LienLogin = 'http://greenvelvet.alwaysdata.net/kwick/api/login/';

const NameToLogin = document.getElementById('nametologin');
        PassToLogin = document.getElementById('passtologin');
        FormToLogin = document.getElementById('formlogin');


FormToLogin.addEventListener('submit', function login(event){
    event.preventDefault()
        LienLogin = LienLogin + NameToLogin.value + '/' + PassToLogin.value ;

        fetch(LienLogin)
        .then(Response=>Response.json())
        .then(function(result){
            console.log(result);
            document.location="messagerie.html";
            localStorage.setItem('userId',result.result.id);
            localStorage.setItem('token', result.result.token);
        });
}); 
