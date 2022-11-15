<<<<<<< HEAD
const formBtn = document.querySelector(".ea-form");
const askBtn = document.querySelector(".ea-ask");
const sectionForm = document.querySelector("#login");
const sectionAsk = document.querySelector("#ask");
const exit = document.querySelectorAll(".X");

formBtn.onclick = function display() {
  sectionForm.style.display = "flex";
  sectionAsk.style.display = "none";
};

askBtn.onclick = function display() {
  sectionAsk.style.display = "flex";
  sectionForm.style.display = "none";
};

for (let i = 0; i < 2; i++) {
  exit[i].onclick = function exit() {
    sectionForm.style.display = "none";
    sectionAsk.style.display = "none";
  };
}
=======
const formBtn = document.querySelector(".ea-form");
const askBtn = document.querySelector(".ea-ask");
const sectionForm = document.querySelector("#login");
const sectionAsk = document.querySelector("#ask");
const exit = document.querySelectorAll(".X");

formBtn.onclick = function display() {
  sectionForm.style.display = "flex";
  sectionAsk.style.display = "none";
};

askBtn.onclick = function display() {
  sectionAsk.style.display = "flex";
  sectionForm.style.display = "none";
};

for (let i = 0; i < 2; i++) {
  exit[i].onclick = function exit() {
    sectionForm.style.display = "none";
    sectionAsk.style.display = "none";
  };
}
>>>>>>> 296900e3ff857a96663cd940fb51d32f68eea501
