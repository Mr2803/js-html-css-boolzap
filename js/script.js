$(document).ready(function () {

   //agganciamo al click sul bottone la funzione di callbnack
   $(".fas").click(function () {

      //ci salviamo il valore dell'input inserito dall'utente
      var messaggio = $(".message").val();
      // console.log(messaggio);

      // $("#container").append(
      //         "<div class='msgsent'>" + messaggio +"</div>"
      // );

      // cloniamo (facciamo una copia) del div con classe "msgsent" che sta dentro
      // un div con ID "template"
      var elementmsg = $("#template .msgsent").clone();

      console.log(elementmsg);

      // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
      elementmsg.find(".testo").text(messaggio);

      // appendiamo una copia con testo valorizzato del div "msgsent"
      $(".my_chat").append(elementmsg);

      // ripuliamo il contenuto dell'input, per UX
      $(".message").val("");


   })

})