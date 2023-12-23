
/***
 * Calcolare e stampare in console la media dei numeri contenuti in un array
 */

const numbers = [10, 43, -34, -2, 78];
let average = 0;
for (let i = 0; i < numbers.length ; i++) {
    average += numbers[i];
    average = i == numbers.length - 1 ? average / numbers.length : average;
}
console.log('Esercizio 15', average);