const stones = document.querySelectorAll(".stone");
const orbit = document.querySelector(".stone-orbit");
const glow = document.getElementById("cursor-glow");


/* =========================
   PHASE SELECTION
========================= */

stones.forEach(stone => {

    stone.addEventListener("click", () => {

        if (stone.classList.contains("selected")) {
            return;
        }

        stones.forEach(item => {
            item.classList.remove("selected");
        });

        stone.classList.add("selected");

        orbit.classList.add("phase-selected");

    });

});


/* =========================
   CURSOR GLOW
========================= */

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


function animateCursor() {

    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();

/* =========================
   COSMIC STAR FIELD
========================= */

const starField = document.getElementById("star-field");

const starColours = [
    "rgba(150, 170, 255, .9)",   // blue
    "rgba(190, 130, 255, .9)",   // purple
    "rgba(255, 120, 110, .9)",   // red
    "rgba(255, 215, 100, .9)",   // yellow
    "rgba(100, 230, 150, .9)",   // green
    "rgba(255, 160, 70, .9)"      // orange
];


for (let i = 0; i < 150; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    // Most stars stay subtle.
    // Some become coloured cosmic stars.

    if (Math.random() > 0.88) {

        star.classList.add("cosmic");

        const colour =
            starColours[
                Math.floor(Math.random() * starColours.length)
            ];

        star.style.color = colour;
        star.style.background = colour;
    }


    // A few brighter stars

    if (Math.random() > 0.94) {

        star.classList.add("bright");

        const colour =
            starColours[
                Math.floor(Math.random() * starColours.length)
            ];

        star.style.color = colour;
        star.style.background = colour;
    }


    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.setProperty(
        "--duration",
        `${3 + Math.random() * 7}s`
    );

    star.style.setProperty(
        "--delay",
        `${Math.random() * 10}s`
    );

    starField.appendChild(star);
}