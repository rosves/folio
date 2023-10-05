var LienLogOut = "http://greenvelvet.alwaysdata.net/kwick/api/logout/";

const FormToLogOut = document.getElementById('formlogout');


FormToLogOut.addEventListener('submit', function logout(event){
    event.preventDefault()
    LienLogOut = LienLogOut + TokenUser + "/" + IdUser;

    fetch(LienLogOut)
    .then(Response=>Response.json())
    .then(function(AmOut){
        console.log(AmOut);
        localStorage.clear();
        document.location="index.html";
    })
});