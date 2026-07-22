const movies = [
    {
        title: "Captain America: The First Avenger",
        year: "1943 - 1945",
        poster: "https://www.themoviedb.org/t/p/w1280/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg"
    },

    {
        title: "Captain Marvel",
        year: "1995",
        poster: "https://www.themoviedb.org/t/p/w1280/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg"
    },

    {
        title: "Iron Man",
        year: "2008",
        poster: "https://www.themoviedb.org/t/p/w1280/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
    }
];

const timeline = document.getElementById("timeline-container");

// Create Cards

movies.forEach((movie, index) => {

    const item = document.createElement("div");

    item.classList.add("timeline-item");

    if (index % 2 === 0) {
        item.classList.add("left");
    }
    else {
        item.classList.add("right");
    }

    item.innerHTML = `

        <div class="card">

            <img src="${movie.poster}" alt="${movie.title}">

            <div class="card-content">
                 <h2>${movie.title}</h2>
                 <p>${movie.year}</p>
            </div>

        </div>

        <div class="node"></div>

    `;

    timeline.appendChild(item);

});


const glow = document.getElementById("cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateGlow() {

    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animateGlow);

}

animateGlow();