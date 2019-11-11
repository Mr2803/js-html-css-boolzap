$(document).ready(function () {

   //CICLO FOR USATO PER STAMPARE IN PAGINA I MIEI CONTATTI
   for (var i = 0; i < 15; i++) {
      var myContact = $("#template .my_list-item.debug").clone()
      $(".my_list-global").append(myContact);

   }
   
//SELEZIONO LA MIA FRECCIA E INVIO TRAMITE LA MIA FUNZIONE ESTERNA   
$(".fas").click(send)

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
   //ci salviamo il valore dell'input inserito dall'utente
   var messaggio = $(".message").val();
   
   var elementmsg = $("#template .msgsent").clone();

   console.log(elementmsg);

   elementmsg.find(".testo").text(messaggio);

   //Pongo la condizione dove se la lunghezza della stringa inserita dall'utente è minore di 1 allora non viene inviato nulla
   if (messaggio.length >= 1){
      $(".my_chat").append(elementmsg);

      //Ripulisco l'input ad ogni invio
      $(".message").val("");
   }
   
}
      
     

})