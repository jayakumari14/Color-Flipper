const colors = [
  "red",
  "blue",
  "rgba(133,122,200)",
  "#f15025",
  "green",
  "yellow",
  "pink",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const random = randomNum();
  console.log(random);
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});

function randomNum() {
  return Math.floor(Math.random() * colors.length);
}
