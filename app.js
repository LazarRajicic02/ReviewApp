const reviews = [
  {
    id: 1,
    name: "Marcos Alonso",
    job: "Football player",
    img: "https://img.a.transfermarkt.technology/portrait/big/112515-1694505734.jpg?lm=1",
    text: "Marcos Alonso Mendoza (born 28 December 1990) is a Spanish professional footballer who plays as a left-back or centre-back for La Liga club Barcelona and the Spain national team.",
  },
  {
    id: 2,
    name: "Nikola Tesla",
    job: "Inventor",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/800px-Tesla_circa_1890.jpeg",
    text: "Nikola Tesla (/'tɛslə/; Serbian Cyrillic: Никола Тесла,[2] [nǐkola têsla];[a] 10 July [O.S. 28 June] 1856 - 7 January 1943) was a Serbian-American[5][6] inventor, electrical engineer, mechanical engineer, and futurist. He is best known for his contributions to the design of the modern alternating current (AC) electricity supply system.[7]",
  },
  {
    id: 3,
    name: "Enzo Ferrari",
    job: "Italian motor racing driver and entrepreneur",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Enzo_Ferrari_-_Wheel_of_a_racing_car.jpg/220px-Enzo_Ferrari_-_Wheel_of_a_racing_car.jpg",
    text: "Enzo Anselmo Giuseppe Maria Ferrari Cavaliere di Gran Croce OMRI[1] (Italian: ['ɛntso an'sɛlmo fer'rari]; 18 February 1898[2] - 14 August 1988) was an Italian motor racing driver and entrepreneur, the founder of the Scuderia Ferrari Grand Prix motor racing team, and subsequently of the Ferrari automobile marque. He was widely known as Il Commendatore or Il Drake. In his final years he was often referred to as L'Ingegnere ('The Engineer') or Il Grande Vecchio ('The Grand Old Man').",
  },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", function () {
  currentItem = Math.round(Math.random() * reviews.length);
  showPerson(currentItem);
});
