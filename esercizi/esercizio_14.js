
/***
 * Completare il codice seguente in modo che, ogni 2 secondi:
 * - Il valore di counter venga aumentato di uno
 * - Counter venga stampato a video
 * Ma solo fino a quando il valore di counter è inferiore a 10
 */

let counter = 0;
let interval = setInterval(() => {
    counter++
    console.log(counter);
    counter >= 10 ? clearInterval(interval) : '';
}, 500);