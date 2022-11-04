let data = null;


// Recupero l'API contenente le CARD
async function fetchArticleEA(){
    const response = await fetch("APIs/coming-soon.json");
    data = await response.json();
    console.log(data)
    window.dispatchEvent(dataFetch)
}


