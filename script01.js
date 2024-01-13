//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 10
let num2 = 8

if (num1 > num2) {
  console.log(num1 + " è più grande di " + num2)
} else if (num1 == num2) {
  console.log(num1 + " è uguale a " + num2)
} else {
  console.log(num1 + " è più piccolo di " + num2)
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 1

if(num < 5){
  console.log("Tiny")
}
else if(num < 10){
  console.log("Small")
}
else if(num < 15){
  console.log("Medium")
}
else if(num < 20){
  console.log("Large")
}
else if(num >= 20){
  console.log("Huge")
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if (i == 3 || i == 8) {
    continue
  } else {
    console.log(i)
  }
}


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " è pari.")
  } else {
    console.log(i + " è dispari.")
  }
}
