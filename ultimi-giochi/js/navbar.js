const btn = document.querySelectorAll(".dropbtn");
const span = document.querySelectorAll("span");

for (let i = 0; i < 5; i++) {
  btn[i].onmouseover = function rotate() {
    span[i].style.transform = "rotate(270deg)";
  };

  btn[i].onmouseout = function rotate() {
    span[i].style.transform = "rotate(90deg)";
  };
}

