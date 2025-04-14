const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

const currentImg = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.url = `images/${todaysImg}`;

bgImagePath = `images/${currentImg}`;

// document.body.appendChild(bgImage);

const gridFrame = document.querySelector(".grid-frame");
gridFrame.style.background = `url(${bgImagePath}) fixed`;
gridFrame.style.backgroundSize = "cover";

