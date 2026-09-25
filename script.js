document.addEventListener("DOMContentLoaded", () => {

    const chronoButton = document.querySelector(".btn-chrono");
    const chronoTransition = document.getElementById("chronoTransition");

    if (!chronoButton || !chronoTransition) {
        console.error("Chrono transition elements not found.");
        return;
    }

    chronoButton.addEventListener("click", (event) => {

        event.preventDefault();

        console.log("CHRONO TRANSITION STARTED");

        chronoTransition.classList.add("active");

        setTimeout(() => {
    window.location.href = chronoButton.href;
}, 5000);

    });

});