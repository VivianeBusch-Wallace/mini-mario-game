// Notice to user about how to navigate
// alert("To navigate: w = up, s = down, d = right, a = left");

// What is Q key code? so here all the keys code you need to know
// https://keycode.info/
let hStandPoint = 0;
let vStandPoint = 0;

const final = document.querySelector(".final");
final.style.top = "50vh";
final.style.left = "80vw";
let goalwidth = final.style.left;
let subgw = goalwidth.substring(0, goalwidth.length - 2);
let goalheight = final.style.top;
let subgh = goalheight.substring(0, goalheight.length - 2);

// console.log(goalheight);
console.log(subgw);

function goUp() {
  vStandPoint -= 1;
  mini.style.top = vStandPoint + "vw";
}
function goDown() {
  vStandPoint += 1;
  mini.style.top = vStandPoint + "vw";
}
function goRight() {
  hStandPoint += 1;
  mini.style.left = hStandPoint + "vw";
}
function goLeft() {
  hStandPoint -= 1;
  mini.style.left = hStandPoint + "vw";
}

function move(e) {
  console.log(e);
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyD") goRight();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyS") goDown();
  console.log(hStandPoint + " <= hstandpoint");
  console.log(vStandPoint + " <= vstandpoint");

  if (vStandPoint == subgh && hStandPoint == subgw) alert("Good job! You win!");
}
const mini = document.querySelector(".mini");
const body = document.querySelector("body");
body.addEventListener("keypress", move);
