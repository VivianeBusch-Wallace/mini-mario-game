// Notice to user about how to navigate
// alert("To navigate: w = up, s = down, d = right, a = left");

// What is Q key code? so here all the keys code you need to know
// https://keycode.info/
let hStandPoint = 0;
let vStandPoint = 0;
let goalheight = document.querySelector(".final").style.top;
let goalwidth = document.querySelector(".final").style.right;
goalwidth = 10 + "vh";
goalheight = 50 + "vh";
console.log(goalheight);
console.log(goalwidth);

function goUp() {
  vStandPoint -= 1;
  mini.style.top = vStandPoint + "vh";
}
function goDown() {
  vStandPoint += 1;
  mini.style.top = vStandPoint + "vh";
}
function goRight() {
  hStandPoint -= 1;
  mini.style.right = hStandPoint + "vh";
}
function goLeft() {
  hStandPoint += 1;
  mini.style.right = hStandPoint + "vh";
}

function move(e) {
  console.log(e);
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyD") goRight();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyS") goDown();
  console.log(hStandPoint + " <= hstandpoint");
  console.log(vStandPoint + " <= vstandpoint");
  //   if (
  //     window.innerHeight / 2 <= vStandPoint &&
  //     window.innerWidth - 100 <= hStandPoint
  //   )
  //     alert("cool you are winner");
  // }
  if (vStandPoint <= goalheight && hStandPoint <= goalwidth)
    alert("Good job! You win!");
}
const mini = document.querySelector(".mini");
const body = document.querySelector("body");
body.addEventListener("keypress", move);
