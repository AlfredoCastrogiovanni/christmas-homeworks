

/***
 * Completare il codice JavaScript successivo in modo che il tag in pagina con id "contenitore"
 * finisca per contenere una griglia 20x20 di <div> celle, ciascuno con dentro uno <span>
 */

const element = document.querySelector("#contenitore");

const cell = document.createElement("div");
const span = document.createElement("span");

cell.append(span);

for(let y=0; y < 20 ; y++) {
    for(let x=0; x < 20 ; x++) {
        const cell = document.createElement("div");
        const span = document.createElement("span");
        cell.append(span);
        element.append(cell);
    }
}