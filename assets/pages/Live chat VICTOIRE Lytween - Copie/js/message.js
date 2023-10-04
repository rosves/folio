var LienMessage = "http://greenvelvet.alwaysdata.net/kwick/api/talk/list";
var TokenUser = localStorage.getItem('token');

var UserId = localStorage.getItem('userId');

const IncomingMessage = document.getElementById('incoming_messages');
// const OutgoingMessage = document.getElementById('outgoing_messages');
       
LienMessage = LienMessage + "/" + TokenUser + "/" + 1327171160 ;

function messageGens(){
  fetch(LienMessage)
    .then(Response => Response.json())
    .then(function(LeurMessage){
      console.log(LeurMessage);

      // for(let a = 0; a < LeurMessage.result.talk.length; a++){
        
      //   var others = document.createElement('p');
      //    others.className = 'message_other';

      //   var mine = document.createElement('p');
      //   mine.className ='message_mine'

      //   // usernames displayed on screen
      //   var nom = document.createElement('p');
      //   nom.className = "username";

      //   var pseudo  = document.createTextNode(LeurMessage.result.talk[a].user_name);
      //   nom.appendChild(pseudo);

      //   var Text = document.createTextNode(LeurMessage.result.talk[a].content);
      //   p.appendChild(Text);
      //   IncomingMessage.appendChild(nom);
      //   IncomingMessage.appendChild(p);
      // }

      for(let a = 0; a < LeurMessage.result.talk.length; a++){
        var messageContent = document.createElement('p');
        var userName = document.createElement('p');

        userName.className = 'username';
        messageContent.className = 'message_content';

        //content displayed
        userName.textContent = LeurMessage.result.talk[a].user_name;
        messageContent.textContent = LeurMessage.result.talk[a].content;

        // Differentiate messages based on user ID
        if (LeurMessage.result.talk[a].user_id === UserId) {
          messageContent.classList.add('message_mine'); // Ajoutez la classe 'message_mine'
        } else {
          messageContent.classList.add('message_other'); // Gardez la classe 'message_other'
        }

        IncomingMessage.appendChild(userName);
        IncomingMessage.appendChild(messageContent);
      }

      // Scroll to the bottom after a slight delay
      setTimeout(scrollChatToBottom, 100);
    });
}

function scrollChatToBottom() {
  const messageContainer = document.getElementsByClassName('scroller');
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

messageGens();

        
        
        //------------------- mes messages

var LienMesMessage = "http://greenvelvet.alwaysdata.net/kwick/api/say";
var IdUser = localStorage.getItem('userId');

const Envoyer = document.getElementById('envoyer');
        FormMessage = document.getElementById('message_form');
        Input = document.getElementById('input');
        
Envoyer.addEventListener('click', function send(event){
    event.preventDefault()
    
    var ContenuMessage = Input.value;
    ContenuMessage = ContenuMessage.replace("","%20");
    ContenuMessage = ContenuMessage.substring(0,140);
    
LienMesMessage = LienMesMessage + "/" + TokenUser +'/' + IdUser + '/' + ContenuMessage; 


fetch(LienMesMessage)
    .then(Response=>Response.json())
    .then(function(envoi){
        console.log(envoi);
    })

   
})


