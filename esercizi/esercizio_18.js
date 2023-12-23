
/***
 * Completare il codice in modo che console.log() stampi il numero di valori distinti
 * contenuti nell'array (riempito dall'utente)
 */

const valori = [1,2,3,4,5,1,2,3];
// let valore;
// do {
//     valore = prompt("Inserisci qualcosa nell'array (zero per terminare)");
//     if (valore != 0) {
//         valori.push(valore);
//     }
// } while (valore != 0);
let numeriDistinti = 0;
const listaNumeri = [];

for(let i=0; i < valori.length ; i++) {
    if(!listaNumeri.includes(valori[i])) {
        listaNumeri.push(valori[i]);
        numeriDistinti++;
    }
}
console.log(numeriDistinti);