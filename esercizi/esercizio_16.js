
/***
 * Completare il codice in modo che console.log() stampi in console
 * una griglia quadrata di cancelletti (#) di lato lungo quanto un numero preso da tastiera.
 * Esempio: Se da tastiera viene digitato il numero 3, console.log() stampa a video la stringa:
 *    ###
 *    ###
 *    ###
 * Nota: il carattere "a capo" si scrive "\n". Esempio: console.log("\n") stampa una riga
 * vuota che va subito a capo.
 */

const numero = parseInt(prompt("Scrivi un numero"));
let grid = '';

for(let i=0; i < numero ; i++) {
    for(let i=0; i <= numero ; i++) {
        if(i == numero) {
            grid += '\n';
        } else {
            grid += '#';
        }
    }
}
console.log(grid);