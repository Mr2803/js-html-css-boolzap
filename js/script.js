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
  /*  var contatti = ["Elena", "Marco", "Simone", "Chiara", "Nikolas", "Federico", "Giampaolo", "Michele", "Leonardo", "Valentina", "Sofia", "Lilian", "Axl",]

   function mix(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

         // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;

         // And swap it with the current element.
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
      }
      return array;
   }

   mix(contatti)

   for (var i = 0; i < contatti.length; i++) {
      var myContact = $("#template .my_list-item").clone()
      
      myContact.find('span:first-child').text(contatti[i]) 
      myContact.find('span:nth-child(2)').text("Anteprima messaggio") 
      $(".my_list-global").append(myContact);
   } */
   
   
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

/* Creo una funzione per aggiungere lo 0 se i minuti sono minori di 10 */

function addZero(i){
   if(i<10){
      i = "0" + i
   }
   return i;
}

//CREATA FUNZIONE ESTERNA PER INVIARE I MESSAGGI
function send(){
   /* salvo il valore dell'input inserito dall'utente */
   var messaggio = $(".message").val();
   
   
   /* salvo una variabile con l'elemento da clonare */
   var elementmsg = $("#template .msgsent").clone();
   var msgPC = $("#template .msgreceived").clone();
   console.log(elementmsg);

   //creo una variabile per inserire l'ora corrente
   var date = new Date();
   var time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());

   /* cerco all'interno della mia variabile la classe testo e stampo all'interno il valore del messaggio inserito dall'utente */
   elementmsg.find(".testo").text(messaggio);
   elementmsg.find(".time").text(time);

   /* stampo un messaggio automatico di risposta ad ogni mex inviato dall'utente */
   
   var answerPc = msgPC.find(".testopc");
   
   //Pongo la condizione dove se la lunghezza della stringa inserita dall'utente è minore di 1 allora non viene inviato nulla
   if (messaggio.length >= 1){
      $(".my_chat").prepend(elementmsg);

      answerPc.text("risposta automatica");
      msgPC.find(".time").text(time);

      setTimeout(function () { 
         $(".my_chat").prepend(msgPC) 
      }, 1000);

      if (messaggio.includes("ciao")) {

         answerPc.text("ciao");
         setTimeout(function () {
             $(".my_chat").prepend(msgPC);
            }, 1000)
      } else if (messaggio.includes("come va")) {

         answerPc.text("bene ,grazie a te?");
         setTimeout(function () {
             $(".my_chat").prepend(msgPC);
            }, 1000);
      } else if (messaggio.includes("bene")) {

         answerPc.text("ah, menomale mi fa piacere 😃");
         setTimeout(function () {
            $(".my_chat").prepend(msgPC);
         }, 1000);
      } else if (messaggio.includes("male")) {

         answerPc.text("ah , mi dispiace molto 😢");
         setTimeout(function () {
            $(".my_chat").prepend(msgPC);
         }, 1000);
      } else if (messaggio.includes("usciamo") || messaggio.includes("caffè") ) {

         answerPc.text("oggi sono impegnato,magari domani");
         setTimeout(function () {
             $(".my_chat").prepend(msgPC); 
            }, 1000)
      } else if (messaggio.includes("allegria")) {

         answerPc.html("<img src='img/allegria.jpg' alt='' style='width: 250px'>");
         setTimeout(function () {
            $(".my_chat").prepend(msgPC);
         }, 1000)
      } 
      
      //Ripulisco l'input ad ogni invio
      $(".message").val("");
   }
   
}

//FUNZIONE PER FILTRARE NOMI CONTATTI CON LA SEARCHBAR . (Problema con keydown , funziona bene con keyup , con keypress funziona per la ricerca ma crea un bug quando cancelli il nome inserito)
   $(".search-input").keyup(function(){
      
      
      //salvo una variabile che include il valore da me inserito
      var txtInserito = $(".search-input").val().toLowerCase();
      console.log(txtInserito)

      //salvo un'altra variabile che seleziona l'elemento che voglio(in questo caso la ricerca sarà effettuate per nome quindi seleziono il mio span primo figlio)
      var listaContatti = $(".my_list-item span:first-child");

      //apro una funzione each per listare tutti i miei span primi figli(quindi i nomi)
      listaContatti.each(function() {
         //salvo variabile elemento che seleziona SOLO quel nome
         var elemento = $(this);
         //salvo una variabile nome che trasforma in testo e con caratteri minuscoli la mia variabile (non avrei potuto usare val perchè funziona solo con gli input)
         var nome = elemento.text().toLowerCase();
         //salvo una variabile padre per selezionare l'intero elemento che voglio nascondere risalendo da quello specifico span (non uso la classe altrimenti me li selezionerebbe tutti e li nasconderebbe tutti)
         var parent = elemento.parents(".my_list-item");

         //pongo la mia condizione e dico che se la mia var nome INDEXOF/INCLUDES il testo inserito dall'utente allora il mio parent viene mostrato , altrimenti viene nascosto
         if (nome.includes(txtInserito)) {
            parent.show();
         } else {
            parent.hide();
         }
      });

    
   })
      
})/* Chiusura getready function */