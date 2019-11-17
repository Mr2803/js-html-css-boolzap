

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

   
//Richiamo la mia funzione esterna SEND al CLICK della freccia
   var date = new Date();
   var time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
   $("#send").click(send)
   $(".my_col-bg span:last-child").text("ultimo accesso " + time)
   
//FUNZIONE PER INVIARE ANCHE CON IL TASTO ENTER CON LA CONDIZIONE CHE LA LUNGHEZZA MINIMA DEI CARATTERI DEVE ESSERE MAGGIORE o = AD 1
   $(".message").keyup(function (j) {
      console.log(j.keyCode)
      var messaggio = $(".message").val()
      if (j.keyCode == "13" && messaggio.length >= 1) {
         send();
         messaggio = "";
      } 
      console.log(messaggio,messaggio.length)
      if (messaggio.length > 0) {
         $("#audio").hide();
         $("#send").show();
      } else{
         $("#audio").show();
         $("#send").hide();
      }
      
   })  


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
         console.log(nome)
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

   /* FUNZIONE PER FAR SI CHE ALLA CHAT CLICCATA SI APRA LA CHAT CORRISPONDENTE CON IL TESTO CORRISPONDENTE E CAMBI IL BG NELLA LISTA CONTATTI IN BASE ALL'ELEMENTO SELEZIONATO */
   $(".my_list-item").click(function () {
      var clicked = $(this).attr("data-ref");
      $(".my_list-item").removeClass("my_list-bg");
      $(".my_chat.my_active").removeClass("my_active");
      $(this).addClass("my_list-bg");
      $(".my_chat[data-ref=" + clicked + "]").addClass("my_active")

      //creo una variabile che ha il valore del nome in cima alla mia chat
      var nomeTop = $(".my_list-bg span:first-child").text();
      var imgTop = $(".my_list-bg img").attr("src");
      console.log(nomeTop)
      console.log(imgTop)
      $("#nome_top").text(nomeTop);
      $("#img_top").attr("src",imgTop);
   })

   //FUNZIONE PER FAR APPARIRE E SCOMPARIRE IL DROPDOWN

   //parto da un elemento statico , in questo caso l intera finestra della chat attiva in quel momento e poi mi sposto su .global-mex-user (elemento generato dinamicamente)
   $(document).on("click", ".global-mex-user", function (event) {
      //creo una variabile per comodità per far riferimento a quell elemento
      var elem = $(this);
      //cerco all'interno di
      elem.find(".drop-mex").toggleClass("my_active");
      elem.find(".drop-mex span").click(function(){
      elem.parents(".msgsent").addClass("displayNone");
        
      })
      
   });

   //FUNZIONE MODALITà NOTTE
   $(document).on("click", ".fa-moon", function (event) {
      //creo una variabile per comodità per far riferimento a quell elemento
      var elem = $(this);
      /* var cssbasic = "css/stylebasic.css"
      var cssdark = "css/styledark.css" */
      //cerco all'interno di
      elem.toggleClass("moon_white")
      if (elem.hasClass("moon_white")) {
         /* $("#my_personal-css").attr("href",cssdark); */
         $("body").addClass("body_dark");
         $(".my_col-bg").addClass("my_col-bg-dark");
         $(".my_bg-chat").addClass("my_bg-chat-dark");
         $(".my_list-item").addClass("my_list-bg-dark");
         $(".invio").addClass("invio-dark");
         $(".search").addClass("search-dark");
         $(".search span").addClass("search-dark-det");
         $(".search input").addClass("search-dark-det");
         $(".name_access span:first-child").addClass("name_access-dark");
         $(".global-mex-pc").addClass("global-mex-pc-dark");
         $("input.message").addClass("search-dark-det")
         $("path").attr('fill', '#fff');
         $("#state path:last-child").attr('fill', '#009588');

      } else {
         /* $("#my_personal-css").attr("href", cssbasic); */
         $("body").removeClass("body_dark");
         $(".my_col-bg").removeClass("my_col-bg-dark");
         $(".my_bg-chat").removeClass("my_bg-chat-dark");
         $(".my_list-item").removeClass("my_list-bg-dark");
         $(".invio").removeClass("invio-dark");
         $(".search").removeClass("search-dark");
         $(".search span").removeClass("search-dark-det");
         $(".search input").removeClass("search-dark-det");
         $(".name_access span:first-child").removeClass("name_access-dark");
         $(".global-mex-pc").removeClass("global-mex-pc-dark");
         $("input.message").removeClass("search-dark-det")
         $("path").attr('fill', '#263238');
         $("#state path:first-child").attr('fill', '#727A7E');
         $("#state path:last-child").attr('fill', '#009588');

      }

   });



   /* ********BLOCCO FUNZIONI ESTERNE*************** */

   //FUNZIONE ESTERNA PER INVIARE I MESSAGGI
   function send() {

      var date = new Date();
      var time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
      /* salvo il valore dell'input inserito dall'utente */
      var messaggio = $(".message").val();


      /* salvo una variabile con l'elemento da clonare */
      var elementmsg = $("#template .msgsent").clone();
      /* var msgPC = $("#template .msgreceived").clone(); */
      console.log(elementmsg);


      /* cerco all'interno della mia variabile la classe testo e stampo all'interno il valore del messaggio inserito dall'utente */
      elementmsg.find(".testo").text(messaggio);
      elementmsg.find(".time").text(time);
      
      //Pongo la condizione dove se la lunghezza della stringa inserita dall'utente è minore di 1 allora non viene inviato nulla
      if (messaggio.length >= 1) {
         $(".my_chat.my_active").prepend(elementmsg);
         //richiamo la mia funzione esterna rispostaPC
         rispostaPc();

         //Ripulisco l'input ad ogni invio
         $(".message").val("");
      }

   }

   //FUNZIONE ESTERNA PER LA RISPOSTA AUTOMATICA DEL PC
  function rispostaPc(){

     var date = new Date();
     var time = addZero(date.getHours()) + ":" + addZero(date.getMinutes());
     /* salvo il valore dell'input inserito dall'utente */
     var messaggio = $(".message").val();
     
     /* salvo una variabile con l'elemento da clonare */
     var msgPC = $("#template .msgreceived").clone();
      /* salvo una variabile che indica dove inserire il testo */
     var answerPc = msgPC.find(".testopc");
  /* salvo una variabile che indica il valore del nome utente con il quale si chatta */
     var nomeTop = $(".my_list-bg span:first-child").text();
     
     // mi salvo 2 array con i valori delle risposte chiave 
     var keywordUser = ["ciao", "come va", "bene", "male", "usciamo","chi sei","sei un bot"];
     var rispostePc = ["ciao", "bene grazie, a te?", "ah, menomale mi fa piacere 😃", "ah , mi dispiace molto 😢", "oggi sono impegnato,magari domani","sono " + nomeTop + " non vedi ?","bene , hai scoperto il mio segreto , non posso che autodistruggermi"];
     

     setTimeout(function (){
        if (messaggio.includes("sei un bot")) {
           $(".page-notFound").show();
           
         }
      },4000); 
      /* window.location.replace("http://stackoverflow.com"); */
     //risposta di base del pc quando viene scritta una keywords non definita
     answerPc.text("mi dispiace , non capisco ancora questa parola");
     msgPC.find(".time").text(time); 
     // ciclo il mio array delle parole chiave inserite dall'utente ...
     for (var x = 0; x < keywordUser.length; x++){
        //...se una parola chiave è stata trovata , allora il pc risponde in maniera adeguata , in base all'index
        if (messaggio.includes(keywordUser[x])) {
           answerPc.text(rispostePc[x]);
           
         }  
        
         
     }
     

     //cambio il valore del testo nella mia lista contatti in "sta scrivendo" , che sarà visibile prima dell'arrivo della risposta del pc 
     
     $(".my_list-bg span:last-child").text("sta scrivendo...").addClass("writing")
     $(".my_col-bg span:last-child").text("sta scrivendo...")
     //imposto il tempo di risposta
     setTimeout(function () {
        $(".my_chat.my_active").prepend(msgPC)
        $(".my_list-bg span:last-child").text(answerPc.text()).removeClass("writing");
        $(".my_col-bg span:last-child").text("online");
        setTimeout(function(){
           $(".my_col-bg span:last-child").text("ultimo accesso " + time)

        },2000);
        
     }, 1500);
   } 

   /* FUNZIONE PER INSERIRE LO 0 ALL'INTERNO DELL'ORA SE I MINUTI O LE ORE SONO MINORI DI 10  */

   function addZero(i) {
      if (i < 10) {
         i = "0" + i
      }
      return i;
   }


  
      
})/* Chiusura getready function */