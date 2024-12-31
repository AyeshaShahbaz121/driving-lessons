// Road Sign Interactivity
const signCards = document.querySelectorAll(".sign-card");

signCards.forEach((card) => {
    card.addEventListener("click", () => {
        alert(`You clicked on: ${card.querySelector("p").textContent}`);
    });
});
