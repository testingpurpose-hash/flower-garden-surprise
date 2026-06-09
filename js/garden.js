const garden =
document.getElementById("garden");

let count = 0;
let plantingEnabled = true;

/* ==========================
   FLOWER CREATOR
========================== */

function createFlower(x,y)
{
    if(!plantingEnabled)
    {
        return;
    }

    count++;
const flowers =
[
    createTulip,
    createRose,
    createDaisy,
    createLily,
    createSunflower
];

const randomFlower =
flowers[Math.floor(Math.random() * flowers.length)];

const flower =
randomFlower();
flower.style.position = "absolute";

const flowerWidth = 90;
const flowerHeight = 140;

x = Math.max(
    flowerWidth / 2,
    Math.min(
        x,
        window.innerWidth - flowerWidth / 2
    )
);

y = Math.max(
    flowerHeight,
    Math.min(
        y,
        window.innerHeight
    )
);

flower.style.left =
(x - flowerWidth / 2) + "px";

flower.style.top =
(y - flowerHeight) + "px";
    garden.appendChild(flower);

    if(count === 25)
    {
        alert(
        "Every flower blooms because you exist ❤️"
        );
    }

    if(count === 50)
    {
        const letter =
        document.getElementById("loveLetter");

        if(letter)
        {
            letter.style.display = "block";
        }
    }
}

/* ==========================
   TULIP
========================== */

function createTulip()
{
    const div = document.createElement("div");

    div.className = "svgFlower";

    div.innerHTML = `
    <svg width="140" height="220">

        <path
        class="stemGrow"
        d="M70 220 C70 170 70 120 70 90"
        stroke="#159947"
        stroke-width="5"
        fill="none"/>

        <ellipse
        cx="55"
        cy="145"
        rx="16"
        ry="8"
        fill="#2db84d"
        transform="rotate(-35 55 145)"/>

        <ellipse
        cx="85"
        cy="165"
        rx="16"
        ry="8"
        fill="#2db84d"
        transform="rotate(35 85 165)"/>

        <g class="bloom">

            <path
            d="M45 85 Q70 20 95 85 Z"
            fill="#ff4fa3"/>

            <path
            d="M58 85 Q70 40 82 85 Z"
            fill="#ff87c5"/>

            <path
            d="M50 85 Q70 50 90 85 Z"
            fill="#ff6bb3"/>

        </g>

    </svg>
    `;

    return div;
}
/* ==========================
   ROSE
========================== */

function createRose()
{
    const div = document.createElement("div");

    div.className = "svgFlower";

    div.innerHTML = `
    <svg width="140" height="220">

        <path
        class="stemGrow"
        d="M70 220 C70 180 70 130 70 90"
        stroke="#1e8f3f"
        stroke-width="5"
        fill="none"/>

        <ellipse
        cx="55"
        cy="150"
        rx="16"
        ry="8"
        fill="#2db84d"
        transform="rotate(-35 55 150)"/>

        <ellipse
        cx="85"
        cy="170"
        rx="16"
        ry="8"
        fill="#2db84d"
        transform="rotate(35 85 170)"/>

        <g class="bloom">
            <circle cx="70" cy="60" r="20" fill="#b3003c"/>
            <circle cx="60" cy="55" r="14" fill="#d4004f"/>
            <circle cx="80" cy="55" r="14" fill="#d4004f"/>
            <circle cx="70" cy="45" r="12" fill="#ff3366"/>
            <circle cx="70" cy="65" r="10" fill="#ff5c85"/>
        </g>

    </svg>
    `;

    return div;
}



/* ==========================
   DAISY
========================== */



/* ==========================
   CHERRY BLOSSOM
========================== */

function createCherry()
{
    const div =
    document.createElement("div");

    div.className =
    "svgFlower";

    div.innerHTML = `
    <svg width="90" height="170">

        <line
        x1="45"
        y1="170"
        x2="45"
        y2="70"
        stroke="green"
        stroke-width="4"/>

        <circle
        cx="45"
        cy="50"
        r="18"
        fill="#ffb6c1"/>

    </svg>
    `;

    return div;
}

/* ==========================
   LILY
========================== */

function createLily()
{
    const div =
    document.createElement("div");

    div.className =
    "svgFlower";

    div.innerHTML = `
    <svg width="100" height="170">

        <line
        x1="50"
        y1="170"
        x2="50"
        y2="70"
        stroke="green"
        stroke-width="4"/>

        <ellipse
        cx="50"
        cy="50"
        rx="25"
        ry="18"
        fill="#d291ff"/>

    </svg>
    `;

    return div;
}
function createSunflower()
{
    const div =
    document.createElement("div");

    div.className =
    "svgFlower";

    div.innerHTML =
    `
    <svg width="90" height="140">

        <path
        class="stemGrow"
        d="M70 220
           C70 180 70 120 70 90"
        stroke="#1e8f3f"
        stroke-width="5"
        fill="none"/>

        <ellipse
        cx="55"
        cy="140"
        rx="18"
        ry="8"
        fill="#2db84d"
        transform="rotate(-35 55 140)"/>

        <ellipse
        cx="85"
        cy="165"
        rx="18"
        ry="8"
        fill="#2db84d"
        transform="rotate(35 85 165)"/>

        <g class="bloom">

            <circle
            cx="70"
            cy="60"
            r="18"
            fill="#5c3b00"/>

            <ellipse cx="70" cy="25"
                     rx="10" ry="20"
                     fill="#ffd000"/>

            <ellipse cx="70" cy="95"
                     rx="10" ry="20"
                     fill="#ffd000"/>

            <ellipse cx="35" cy="60"
                     rx="10" ry="20"
                     fill="#ffd000"
                     transform="rotate(90 35 60)"/>

            <ellipse cx="105" cy="60"
                     rx="10" ry="20"
                     fill="#ffd000"
                     transform="rotate(90 105 60)"/>

            <ellipse cx="45" cy="35"
                     rx="10" ry="20"
                     fill="#ffd000"
                     transform="rotate(-45 45 35)"/>

            <ellipse cx="95" cy="35"
                     rx="10" ry="20"
                     fill="#ffd000"
                     transform="rotate(45 95 35)"/>

            <ellipse cx="45" cy="85"
                     rx="10" ry="20"
                     fill="#ffd000"
                     transform="rotate(45 45 85)"/>

            <ellipse cx="95" cy="85"
                     rx="10" ry="20"
                     fill="#ffd000"
                     transform="rotate(-45 95 85)"/>

        </g>

    </svg>
    `;

    return div;
}

/* ==========================
   CLICK TO PLANT
========================== */

document
.getElementById("clearGarden")
.onclick=function()
{
    garden.innerHTML="";

    count = 0;

    plantingEnabled = true;

    const letter =
    document.getElementById("loveLetter");

    if(letter)
    {
        letter.style.display = "none";
    }

    if(auto)
    {
        clearInterval(auto);
        auto = null;
    }
};

/* ==========================
   CLEAR GARDEN
========================== */


/* ==========================
   AUTO BLOOM
========================== */

let auto = null;

document
.getElementById("autoBloom")
.onclick=function()
{
    plantingEnabled = true;

    if(auto)
    {
        clearInterval(auto);
        auto = null;
        return;
    }

    auto =
    setInterval(function()
    {
        createFlower(
            Math.random()*window.innerWidth,
            Math.random()*window.innerHeight
        );
    },500);
};

/* ==========================
   STARS
========================== */

for(let i=0;i<150;i++)
{
    const star =
    document.createElement("div");

    star.className =
    "star";

    star.style.width="2px";
    star.style.height="2px";

    star.style.left=
    Math.random()*100+"%";

    star.style.top=
    Math.random()*100+"%";

    star.style.animationDelay=
    Math.random()*2+"s";

    document.body.appendChild(star);
}

/* ==========================
   FIREFLIES
========================== */

for(let i=0;i<20;i++)
{
    const firefly =
    document.createElement("div");

    firefly.className =
    "firefly";

    firefly.style.left =
    Math.random()*window.innerWidth+"px";

    firefly.style.top =
    Math.random()*window.innerHeight+"px";

    firefly.style.animationDelay =
    Math.random()*8+"s";

    document.body.appendChild(firefly);
}
function createDaisy()
{
    const div =
    document.createElement("div");

    div.className =
    "svgFlower";

    div.innerHTML =
    `
    <svg width="90" height="140">

        <path
        class="stemGrow"
        d="M70 220
           C70 180 70 120 70 80"
        stroke="#159947"
        stroke-width="5"
        fill="none"/>

        <g class="bloom">

            <ellipse cx="70" cy="50"
                     rx="10" ry="20"
                     fill="white"/>

            <ellipse cx="70" cy="50"
                     rx="10" ry="20"
                     fill="white"
                     transform="rotate(45 70 50)"/>

            <ellipse cx="70" cy="50"
                     rx="10" ry="20"
                     fill="white"
                     transform="rotate(90 70 50)"/>

            <ellipse cx="70" cy="50"
                     rx="10" ry="20"
                     fill="white"
                     transform="rotate(135 70 50)"/>

            <circle
            cx="70"
            cy="50"
            r="12"
            fill="gold"/>

        </g>

    </svg>
    `;

    return div;
}
document.body.addEventListener(
"click",
function(e)
{
    if(e.target.tagName==="BUTTON")
    {
        return;
    }


    createFlower(
        e.clientX,
        e.clientY
    );
}
);
/* ==========================
   RAIN
========================== */

for(let i=0;i<100;i++)
{
    const rain =
    document.createElement("div");

    rain.className = "rain";

    rain.style.left =
    Math.random()*100 + "%";

    rain.style.animationDuration =
    (Math.random()*1 + 0.5) + "s";

    rain.style.opacity =
    Math.random();

    document.body.appendChild(rain);
}
const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

musicBtn.onclick = function()
{
    if(music.paused)
    {
        music.play();

        musicBtn.innerHTML =
        "🔇 Stop";
    }
    else
    {
        music.pause();

        musicBtn.innerHTML =
        "🎵 Music";
    }
};