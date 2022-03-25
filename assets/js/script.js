const elementButton = document.querySelector(".genera");

//Funzione con evento click che esegue tutto il programma

elementButton.addEventListener('click',

    //Estraggo i valori che inserisce l'utente e genero in modo randomico numero carrozze e codice CP

     function(){
        let carrozza_random = Math.floor(Math.random() * 11);
        document.querySelector(".carrozzaNumber").innerHTML = carrozza_random;
        let codice_cp_random = Math.floor(Math.random() * 100000);
        document.querySelector(".codiceCp").innerHTML = codice_cp_random;

        const nome_cognome = document.querySelector(".nome_cognome").value;
        document.querySelector(".valoreNome").innerHTML = nome_cognome;
        const numero_km = document.querySelector(".km").value;
        const lista = document.querySelector(".lista").value;

        // Calcolo matematico per prezzo pieno e scontato

        const prezzo_biglietto = numero_km * 0.21;

        const totale_scontato_20 = prezzo_biglietto - (prezzo_biglietto * 0.2);

        const totale_scontato_40 = prezzo_biglietto - (prezzo_biglietto * 0.40);

        //Condizioni per stabilire i prezzi in base ai dati dell'utente

        if (lista === "Minore"){
            totale_scontato_20;
            document.querySelector(".prezzo").innerHTML = `${totale_scontato_20} €`;
            document.querySelector(".sconto").innerHTML = "Sconto minore";
        }else if (lista === "Over 65"){
            totale_scontato_40;
            document.querySelector(".prezzo").innerHTML = `${totale_scontato_40} €`;
            document.querySelector(".sconto").innerHTML = "Sconto Over 65";
        }else{
            document.querySelector(".prezzo").innerHTML = `${prezzo_biglietto} €`;
            document.querySelector(".sconto").innerHTML = "Prezzo Pieno";
        }
        }
);   





















 

// // Controllo dati

// if(isNaN(numero_km)){
//     alert("Non hai inserito un numero");
// }


// // Controllo dati

// if(isNaN(età_passeggiero)){
//     alert("Non hai inserito un numero");
// }

// Prezzo biglietto in base ai km




// // Calcolo percentuale

 

 //Sconti per minori e anziani





