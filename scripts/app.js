const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const pikachu = document.querySelector(".pikachu img");
const energy = document.querySelector(".energy");
const attack = document.querySelector(".attack");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  energy.style.transform = "translateZ(125px)";
  pikachu.style.transform = "translateZ(100px) rotateZ(5deg)";
  attack.style.transform = "translateZ(100px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title.style.transform = "translateZ(0px)";
  pikachu.style.transform = "translateZ(0px) rotateZ(0deg)";
  energy.style.transform = "translateZ(0px)";
  attack.style.transform = "translateZ(0px)";
});