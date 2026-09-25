const movies = [

    {
        title: "Eyes of Wakanda",
        year: "1260 BC – 1896",
        poster: "https://image.tmdb.org/t/p/w1280/64RsvJMVUfhs5CDV7xXRjiLK4w6.jpg"
    },

    {
        title: "Spider-Noir S1",
        year: "1930s",
        poster: "https://www.themoviedb.org/t/p/w1280/oD8WSVqz84ZRfelkr7JPeJwR9Iv.jpg"
    },

    {
        title: "Captain America: The First Avenger",
        year: "1942 – 1945",
        poster: "https://image.tmdb.org/t/p/w1280/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg"
    },

    {
        title: "Marvel Studios One Shot: Agent Carter",
        year: "1946",
        poster: "https://image.tmdb.org/t/p/w1280/4vFKKWPvCVDJTOWiwReBfpAMScP.jpg"
    },

    {
        title: "Captain Marvel",
        year: "1995",
        poster: "https://image.tmdb.org/t/p/w1280/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg"
    },

    {
        title: "Iron Man",
        year: "2008",
        poster: "https://image.tmdb.org/t/p/w1280/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
    },

    {
        title: "Iron Man 2",
        year: "2010",
        poster: "https://image.tmdb.org/t/p/w1280/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg"
    },

    {
        title: "The Incredible Hulk",
        year: "2010",
        poster: "https://image.tmdb.org/t/p/w1280/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"
    },

    {
        title: "Marvel Studios One Shot: A Funny Thing Happened on the Way to Thor’s Hammer",
        year: "2010",
        poster: "https://image.tmdb.org/t/p/w1280/njrOqsmFH4pxBrhcoslqLfw2OGk.jpg"
    },

    {
        title: "Thor",
        year: "2011",
        poster: "https://image.tmdb.org/t/p/w1280/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"
    },

    {
        title: "Marvel Studios One Shot: The Consultant",
        year: "2011",
        poster: "https://image.tmdb.org/t/p/w1280/xqNLXUUvBnfVk6m3QFGGU0Grgs7.jpg"
    },

    {
        title: "The Avengers",
        year: "2012",
        poster: "https://image.tmdb.org/t/p/w1280/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    },

    {
        title: "Marvel Studios One Shot: Item 47",
        year: "2012",
        poster: "https://image.tmdb.org/t/p/w1280/hnSxG8clwLuAXEkp9emc8HCUcHD.jpg"
    },

    {
        title: "Thor: The Dark World",
        year: "2013",
        poster: "https://image.tmdb.org/t/p/w1280/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg"
    },

    {
        title: "Iron Man 3",
        year: "2013",
        poster: "https://image.tmdb.org/t/p/w1280/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg"
    },

    {
        title: "Marvel Studios One Shot: All Hail the King",
        year: "2014",
        poster: "https://image.tmdb.org/t/p/w1280/y0QYZPWgeGKOvyrzi6Oz3aJPxJa.jpg"
    },

    {
        title: "Captain America: The Winter Soldier",
        year: "2014",
        poster: "https://image.tmdb.org/t/p/w1280/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg"
    },

    {
        title: "Guardians of the Galaxy",
        year: "2014",
        poster: "https://image.tmdb.org/t/p/w1280/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
    },

    {
        title: "Guardians of the Galaxy Vol. 2",
        year: "2014",
        poster: "https://image.tmdb.org/t/p/w1280/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg"
    },

    {
        title: "I Am Groot S1",
        year: "2014",
        poster: "https://image.tmdb.org/t/p/w1280/oZmqHnWJVQLOKOibDa34W4iGBZU.jpg"
    },

    {
        title: "I Am Groot S2",
        year: "2014",
        poster: "https://image.tmdb.org/t/p/w1280/3yhoq5LVMgKy9rEriH6ytq9BoJV.jpg"
    },

    {
        title: "Daredevil S1",
        year: "2015",
        poster: "https://media.themoviedb.org/t/p/w116_and_h174_face/zFmJQzl6bFrdpHhDkxXmboyykqD.jpg"
    },

    {
        title: "Jessica Jones S1",
        year: "2015",
        poster: "https://image.tmdb.org/t/p/w1280/9wwfowgVJDouHQdUsIcNhgbIUlG.jpg"
    },

    {
        title: "Avengers: Age of Ultron",
        year: "2015",
        poster: "https://image.tmdb.org/t/p/w1280/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
    },

    {
        title: "Ant-Man",
        year: "2015",
        poster: "https://image.tmdb.org/t/p/w1280/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg"
    },

    {
        title: "Daredevil S2",
        year: "2016",
        poster: "https://media.themoviedb.org/t/p/w116_and_h174_face/opHoslNCxkgoCaGhfO66fvCSH83.jpg"
    },

    {
        title: "Luke Cage S1",
        year: "2016",
        poster: "https://image.tmdb.org/t/p/w1280/hBbPrnlkpxod0Zq14wsPlaLOemG.jpg"
    },

    {
        title: "Iron Fist S1",
        year: "2017",
        poster: "https://image.tmdb.org/t/p/w1280/usGfoL4RfX15f1sQcX3Sgw4YRf4.jpg"
    },

    {
        title: "The Defenders",
        year: "2017",
        poster: "https://image.tmdb.org/t/p/w1280/4COAMPA6LPkPBd1xdm9paN4LCD8.jpg"
    },

    {
        title: "Captain America: Civil War",
        year: "2016",
        poster: "https://image.tmdb.org/t/p/w1280/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg"
    },

    {
        title: "Black Widow",
        year: "2016",
        poster: "https://image.tmdb.org/t/p/w1280/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
    },

    {
        title: "Black Panther",
        year: "2016",
        poster: "https://image.tmdb.org/t/p/w1280/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
    },

    {
        title: "Spider-Man: Homecoming",
        year: "2016",
        poster: "https://image.tmdb.org/t/p/w1280/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"
    },

    {
        title: "The Punisher S1",
        year: "2016 – 2017",
        poster: "https://image.tmdb.org/t/p/w1280/9lLuhV703HGCbnz6FxnqCwIwzAZ.jpg"
    },

    {
        title: "Doctor Strange",
        year: "2016 – 2017",
        poster: "https://image.tmdb.org/t/p/w1280/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"
    },

    {
        title: "Jessica Jones S2",
        year: "2018",
        poster: "https://image.tmdb.org/t/p/w1280/tKirVNmDmwYjqehjPpyjr1n3U2F.jpg"
    },

    {
        title: "Luke Cage S2",
        year: "2018",
        poster: "https://image.tmdb.org/t/p/w1280/xe9VGtjJ1vsSKtAnoXEnVdUqyxb.jpg"
    },

    {
        title: "Iron Fist S2",
        year: "2018",
        poster: "https://image.tmdb.org/t/p/w1280/vXYvfCWvz5W0rErCpNIq09urhzW.jpg"
    },

    {
        title: "Daredevil S3",
        year: "2018",
        poster: "https://media.themoviedb.org/t/p/w116_and_h174_face/zH6sgePlr1XX0jSZypbfQmr70Lf.jpg"
    },

    {
        title: "Thor: Ragnarok",
        year: "2017",
        poster: "https://image.tmdb.org/t/p/w1280/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
    },

    {
        title: "The Punisher S2",
        year: "2019",
        poster: "https://image.tmdb.org/t/p/w1280/agNYq5XZnGfmYetUMyyM2RdPY70.jpg"
    },

    {
        title: "Jessica Jones S3",
        year: "2019",
        poster: "https://image.tmdb.org/t/p/w1280/dOPx3bj3x6eXYXQJUUIHXvWRSSB.jpg"
    },

    {
        title: "Ant-Man and the Wasp",
        year: "2018",
        poster: "https://image.tmdb.org/t/p/w1280/cFQEO687n1K6umXbInzocxcnAQz.jpg"
    },

    {
        title: "Avengers: Infinity War",
        year: "2018",
        poster: "https://image.tmdb.org/t/p/w1280/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
    },

    {
        title: "Avengers: Endgame",
        year: "2018 – 2023",
        poster: "https://image.tmdb.org/t/p/w1280/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
    },

    {
        title: "Loki S1",
        year: "2012 / TVA",
        poster: "https://image.tmdb.org/t/p/w1280/8uVqe9ThcuYVNdh4O0kuijIWMLL.jpg"
    },

    {
        title: "What If…? S1",
        year: "Multiverse",
        poster: "https://image.tmdb.org/t/p/w1280/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg"
    },

    {
        title: "Marvel Zombies",
        year: "Alternate 2023",
        poster: "https://image.tmdb.org/t/p/w1280/64RsvJMVUfhs5CDV7xXRjiLK4w6.jpg"
    },

    {
        title: "WandaVision",
        year: "2023",
        poster: "https://image.tmdb.org/t/p/w1280/8BSVNGpZwZDScVv8e5S1c8XIjeJ.jpg"
    },

    {
        title: "Shang-Chi and the Legend of the Ten Rings",
        year: "2024",
        poster: "https://image.tmdb.org/t/p/w1280/9f2Q0U3IOsLgrI2HkvldwSABZy5.jpg"
    },

    {
        title: "The Falcon and the Winter Soldier",
        year: "2024",
        poster: "https://image.tmdb.org/t/p/w1280/6kbAMLteGO8yyewYau6bJ683sw7.jpg"
    },

    {
        title: "Spider-Man: Far From Home",
        year: "2024",
        poster: "https://image.tmdb.org/t/p/w1280/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg"
    },

    {
        title: "Eternals",
        year: "2024",
        poster: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg"
    },

    {
        title: "Spider-Man: No Way Home",
        year: "2024",
        poster: "https://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    },

    {
        title: "Doctor Strange in the Multiverse of Madness",
        year: "2024",
        poster: "https://image.tmdb.org/t/p/w1280/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg"
    },

    {
        title: "Hawkeye",
        year: "2024",
        poster: "https://image.tmdb.org/t/p/w1280/nGcqeKieycPFvsxOeLJssCTt3mL.jpg"
    },

    {
        title: "Moon Knight",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/zPFm8ZbvdzoViRHnLi8cH7TBS1B.jpg"
    },

    {
        title: "Black Panther: Wakanda Forever",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
    },

    {
        title: "Echo",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/eVqz9zgvGYVqvHOg1QlHWrGTpz3.jpg"
    },

    {
        title: "She-Hulk: Attorney at Law",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/41Iekrap0j80u808Z2004t88r6o.jpg"
    },

    {
        title: "Ms. Marvel",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/4qoFtoPvFGjlIXYfFVNKhOwZ6zD.jpg"
    },

    {
        title: "Thor: Love and Thunder",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
    },

    {
        title: "Ironheart",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/1V4rcxP9Dk0TKHkVAc2sigcdDXc.jpg"
    },

    {
        title: "Werewolf By Night",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/mvIvNKRIJPPS7WSFarFhOAGIVnU.jpg"
    },

    {
        title: "The Guardians of the Galaxy Holiday Special",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg"
    },

    {
        title: "Ant-Man and the Wasp: Quantumania",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"
    },

    {
        title: "Guardians of the Galaxy Vol. 3",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
    },

    {
        title: "Secret Invasion",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/8fQckSuTR8NEN3mXeledSQCISZJ.jpg"
    },

    {
        title: "The Marvels",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg"
    },

    {
        title: "Loki S2",
        year: "TVA / Multiverse",
        poster: "https://image.tmdb.org/t/p/w1280/3yhoq5LVMgKy9rEriH6ytq9BoJV.jpg"
    },

    {
        title: "What If…? S2",
        year: "Multiverse",
        poster: "https://image.tmdb.org/t/p/w1280/3yhoq5LVMgKy9rEriH6ytq9BoJV.jpg"
    },

    {
        title: "Deadpool & Wolverine",
        year: "2024",
        poster: "https://image.tmdb.org/t/p/w1280/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
    },

    {
        title: "Agatha All Along",
        year: "2024",
        poster: "https://www.themoviedb.org/t/p/w1280/mGsxKwXUjojitRv2E9qMTbxbBRd.jpg"
    },

    {
        title: "What If…? S3",
        year: "Multiverse",
        poster: "https://image.tmdb.org/t/p/w1280/bbGeKXKoualYRYqvFYiv8fPZK0d.jpg"
    },

    {
        title: "X-Men '97 S2",
        year: "1997",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_face/2HKBc5UiFw8JrruHq8S1Y7TnlW0.jpg"
    },

    {
        title: "Daredevil: Born Again S1",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/9lLuhV703HGCbnz6FxnqCwIwzAZ.jpg"
    },

    {
        title: "Captain America: Brave New World",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg"
    },

    {
        title: "Thunderbolts*",
        year: "2025",
        poster: "https://image.tmdb.org/t/p/w1280/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg"
    },

    {
        title: "The Fantastic Four: First Steps",
        year: "1964 — Earth-828",
        poster: "https://www.themoviedb.org/t/p/w1280/nf5qaSEvyYSNeFH0YhSs5EsBLX9.jpg"
    },

    {
        title: "Wonder Man",
        year: "2025 – 2027",
        poster: "https://image.tmdb.org/t/p/w1280/1V4rcxP9Dk0TKHkVAc2sigcdDXc.jpg"
    },

    {
        title: "Daredevil: Born Again S2",
        year: "2027",
        poster: "https://image.tmdb.org/t/p/w1280/timvsedxh5ce795tsv6EDTZmmXW.jpg"
    },

    {
        title: "The Punisher: One Last Kill",
        year: "2027",
        poster: "https://image.tmdb.org/t/p/w1280/agNYq5XZnGfmYetUMyyM2RdPY70.jpg"
    },

    {
        title: "Spider-Man: Brand New Day",
        year: "2028",
        poster: "https://www.themoviedb.org/t/p/w1280/bjiS5ipwxb9JFy3XRRN4OAilSeX.jpg"
    },
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