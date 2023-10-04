// --------- LOGIN & SIGNUP : LIEN ------- //

const NoAccount = document.getElementById ('no_account');
        SignUp = document.getElementById ('signup'); 
        SignIn = document.getElementById('login');
        HaveAccount = document.getElementById('have_account');

NoAccount.addEventListener("click",function() {
    SignUp.style.display="block";
} );

HaveAccount.addEventListener("click", function(){
    SignUp.style.display="none"
})

// ----------- 1)js de co, 2)js d'inscription, 3)messages(qui a envoyé quel message) 4)envoyer les messages, 5) deco, 6) les gens co ----------- //