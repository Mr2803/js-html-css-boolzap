/* EX della settimana:
Milestone di oggi: MILESTONE#1
NOME REPO:  js-html-css-boolzap
DESCRIZIONE:
RI-Creare layout e funzionalità di whatzapp web: https://web.whatsapp.com/
vi metto comunque uno screeshot sotto di quello visto insieme.
Funzionalità, non tutte ma quelle dettate di volta in volta dai milestones.
Il doc di specifiche lo trovate qui: https://docs.google.com/document/d/1dujso_x1_UTTAR-XmwuURIec2CR79Ap8z81flzSYckY/edit#
BONUS:
per ora nessuno, ci sarà tempo dopo.
NOTE:
Giorno per giorno, si lavora sempre sul milestone assegnato;
vedete voi come organizzarvi negli setp del milestone interessato, come detto a lezione;
non correte, ma cercate ad ogni milestone di arrivare ad una situazione che vi permetta almeno di partire in modo pulito e sicuro il giorno dopo, per il milestone successivo;
quindi approccio: tengo il mio codice il più pulito possibile e parto dalla questione macro, e lascio via via la definizione di dettaglio per dopo;
l’ex prenderà come detto vari giorni quindi abbiamo il tempo poi pian piano, di andare ad affinare la dove, per questioni di tempo abbiam dovuto tralasciare i dettagli;
come detto: Prima di iniziare, come Milestone#0, la questione è leggere per bene le specifiche e fare tutte domande del caso, per non fare lavoro inutile.
Buon coding, e ci si vede domattina per fare un pò di codereview sul milestone#1. */

$(document).ready(function () {

   //CICLO FOR USATO PER STAMPARE IN PAGINA I MIEI CONTATTI
 
   for (var i = 0; i < 15; i++) {
      var myContact = $("#template .my_list-item.debug").clone()
      $(".my_list-global").append(myContact);
      myContact.find('span:first-child').text("Utente") 
      myContact.find('span:nth-child(2)').text("Anteprima Messaggio") ;

   }
   
   
//SELEZIONO LA MIA FRECCIA E INVIO TRAMITE LA MIA FUNZIONE ESTERNA   
   $(".send").click(send)

//FUNZIONE PER INVIARE ANCHE CON IL TASTO ENTER CON LA CONDIZIONE CHE LA LUNGHEZZA MINIMA DEI CARATTERI DEVE ESSERE MAGGIORE O = AD 1
   $(".message").keydown(function (j) {
      console.log(j.keyCode)
      var messaggio = $(".message").val()
      if (j.keyCode == "13" && messaggio.length >= 1) {
         send();
      }

   })  


//CREATA FUNZIONE ESTERNA PER INVIARE I MESSAGGI
function send(){
   /* salvo il valore dell'input inserito dall'utente */
   var messaggio = $(".message").val();
   
   /* salvo una variabile con l'elemento da clonare */
   var elementmsg = $("#template .msgsent").clone();

   console.log(elementmsg);
   var dt = new Date();
   var time = dt.getHours() + ":" + dt.getMinutes();

   elementmsg.find(".testo").text(messaggio);
   elementmsg.find(".time").text(time);

   //Pongo la condizione dove se la lunghezza della stringa inserita dall'utente è minore di 1 allora non viene inviato nulla
   if (messaggio.length >= 1){
      $(".my_chat").prepend(elementmsg);

      //Ripulisco l'input ad ogni invio
      $(".message").val("");
   }
   
}
      
     

})