let data = null
let counter = 0;
let cardNumber = 0;

// Recupero l'API contenente i dati delle CARD
async function fetchArticleEA(){
    const response = await fetch('APIs/coming-soon.json');
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
    const gender =document.querySelectorAll("#gender");

    while(counter<6){
        h5[counter].textContent=data[counter].title;
        img[counter].src=data[counter].url;
        date[counter].textContent=data[counter].date;
        platform[counter].textContent=data[counter].platform;
        gender[counter].textContent=data[counter].gender;
        counter++;
    }   
}
)