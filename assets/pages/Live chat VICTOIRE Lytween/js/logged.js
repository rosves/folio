var LienLogged = "http://greenvelvet.alwaysdata.net/kwick/api/user/logged";
var TokenUser = localStorage.getItem('token');
var IdUser = localStorage.getItem('userId');

const Participants = document.getElementById('participants');
            Online = document.getElementById('ppl_online');
        OnlineNames = document.getElementById('ppl_online_names');


        function pplOnline(){
          LienLogged = LienLogged + "/" + TokenUser;

            fetch(LienLogged)
            .then(Response=>Response.json())
            .then(function(UserOnline){
                console.log(UserOnline);

                for(let i = 0; i < UserOnline.result.user.length; i++){ 
                    var li = document.createElement('li');
                    var TextNote = document.createTextNode(UserOnline.result.user[i]);
                    li.appendChild(TextNote);
                    OnlineNames.appendChild(li);
                }
            })
        }

        pplOnline()
