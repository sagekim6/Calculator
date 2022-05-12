const counter = document.querySelector("#counter");
const count = document.querySelector(".count");
const resetBtn = document.querySelector("#resetBtn");

let sum = 0;

counter.addEventListener("click", startCount);
function startCount(event) {
  if (event) {
    sum++;
  }
  count.textContent = String(sum);
}

resetBtn.addEventListener("click", reseCount);
function reseCount() {
  sum = 0;
  count.textContent = "0";
}
