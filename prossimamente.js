// CARD COMING SOON

let data = null
let counter = 0;
let cardNumber = 0;

// Recupero l'API contenente i dati delle CARD
async function fetchArticleEA(){
    const response = await fetch('card-coming-soon/APIs/coming-soon.json');
    data = await response.json();
    window.dispatchEvent(dataFetch)
}

// Al caricamento della pagina vado a recuperare i dati
window.addEventListener('load',fetchArticleEA);
const dataFetch = new CustomEvent('dataFetch');

// Dopo il fetch popolo le card
window.addEventListener('dataFetch', () => {
    const h5 = document.querySelectorAll("#title");
    const img = document.querySelectorAll("#img");
    const date = document.querySelectorAll("#date");
    const platform =document.querySelectorAll("#platform");
    const gender = document.querySelectorAll("#gender");
    const link = document.querySelectorAll("#link");

    while(counter<6){
        h5[counter].textContent=data[counter].title;
        img[counter].src=data[counter].url;
        date[counter].textContent=data[counter].date;
        platform[counter].textContent=data[counter].platform;
        gender[counter].textContent=data[counter].gender;
        link[counter].href=data[counter].link;
        counter++;
    }   
}
)

// SELECT

let selector1 = document.getElementById("footerbtn1");
let selector2 = document.getElementById("footerbtn2");

function show1() {
    let selectorList1 = document.getElementById("countryselector");
    if (selectorList1.style.display === "block") {
      selectorList1.style.display = "none";
    } else {
      selectorList1.style.display = "block";
    }
  }

  function show2() {
    let selectorList2 = document.getElementById("locallanguageselector");
    if (selectorList2.style.display === "block") {
      selectorList2.style.display = "none";
    } else {
      selectorList2.style.display = "block";
    }
  }


  selector1.addEventListener("click", show1);
  selector2.addEventListener("click", show2);


// NAVBAR

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
