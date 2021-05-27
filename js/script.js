/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

var nome = prompt('Ciao, come ti chiami?');
document.getElementById('name').innerHTML = nome.toUpperCase();

var km = prompt('Quanti chilometri vuoi percorrere?');
document.getElementById('distance').innerHTML = km + " km";

var age = parseInt(prompt('Quanti anni hai?'));
// console.log(age);

var price = km * 0.21;
// console.log(price);

if (age < 18){
    price = price - price * 0.2;
} else if (age >= 65) {
    price = price - price * 0.4;
}

document.getElementById('price').innerHTML = price.toFixed(2) + ' &euro;';