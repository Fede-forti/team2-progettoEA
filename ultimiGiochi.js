// --- navbar js --- //
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


//Select js//

let selector1 = document.getElementById("footerbtn1");
let selector2 = document.getElementById("footerbtn2");

function show1() {
    let selectorList1 = document.getElementById("countryselector");
    if (selectorList1.style.display === "none") {
      selectorList1.style.display = "block";
    } else {
      selectorList1.style.display = "none";
    }
  }

  function show2() {
    let selectorList2 = document.getElementById("locallanguageselector");
    if (selectorList2.style.display === "none") {
      selectorList2.style.display = "block";
    } else {
      selectorList2.style.display = "none";
    }
  }


  selector1.addEventListener("click", show1);
  selector2.addEventListener("click", show2);