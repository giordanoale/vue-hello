// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue({
    el: "#root",
    data: {
        message: "Hello World",
        image: "https://www.icbz4.it/alunnifermi/wp-content/uploads/2019/12/significato-stonks-1024x766.jpg",
        displayClass: "hide",
    },
    methods: {
        funzione: function(){
            if (this.displayClass == "hide"){
                this.displayClass = "block";
            } else {
                this.displayClass = "hide";  
            }
        }
    }
})