let btn = document.querySelector(".btn");
let colorBox = document.querySelectorAll(".box__item");
const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function colorBg() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomColor = Math.floor(Math.random() * values.length);
    color += values[randomColor];
  }
  return color;
}

btn.addEventListener("click", () => {
  colorBox.forEach((item) => {
    item.style.backgroundColor = colorBg();
  });
});
