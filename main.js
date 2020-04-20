// Chiediamo il numero di chilometri che il passeggero deve percorrere

var chilometri = prompt('Si prega di indicare il numero di chilometri da percorrere')
console.log(chilometri);

// Calcoliamo il prezzo del biglietto

var prezzo = 0.21 * chilometri
console.log(prezzo);

// Chiediamo l'età al nostro passeggero

var eta = prompt('Si prega di indicare la propria età')
console.log(eta)

// Calcoliamo lo sconto sulla base dell'età del passeggero
var sconto = 0
  if (eta < 18) {
    sconto = (prezzo * 20) / 100
} if (eta > 65) {
    sconto = (prezzo * 40) / 100
}


// Calcoliamo il prezzo finale e mostriamolo al cliente
var prezzo_finale =  prezzo - sconto
console.log(prezzo_finale)
