
const trigger = document.querySelector(".trigger");
const counter = document.querySelector(".counter");

trigger.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent) + 1;
})