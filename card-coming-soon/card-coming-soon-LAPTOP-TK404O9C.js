let data = [];
let counter = 0;

async function fetchArticleEA() {
    const response = await fetch('APIs/coming-soon.json');
    data = await response.json();

    window.dispatchEvent(dataFetch)
}

window.addEventListener('load', fetchArticleEA);
const dataFetch = new CustomEvent('dataFetch');

// Dopo il fetch popolo le card
window.addEventListener('dataFetch', () => {
    const h5 = document.querySelectorAll("#title");
    const img = document.querySelectorAll("#img");
    const date = document.querySelectorAll("#date");
    const platform = document.querySelectorAll("#platform");
    const gender = document.querySelectorAll("#gender");
    const link = document.querySelectorAll("#link");
    const container = document.querySelector(".card-container");

    data.map((item) => {
        console.log(item.title);
        console.log(item.url);
        console.log(item.date);
        console.log(item.platform);
        console.log(item.gender);
        console.log(item.link);

        const row = document.createElement("div");
        const card = document.createElement("div");
        row.className = "row";
        card.innerHTML = `<div class="d - flex flex - column coming - soon - card - wrapper" style="width: 544px; "><img id="img" src="${item.url}"><h5 id="title" class="fw - bold mt - 3 mb - 4">${item.title}</h5><div class="d - flex align - items - baseline coming - soon - flex coming - soon - border"><p class="fw - bold w - 25 pb - 1">Data di Uscita</p><p id="date" class="fw - boldw - 75">${item.date}</p></div><div class="d - flex align - items - baseline coming - soon - flex coming - soon - border"><p class="fw - bold w - 25 pb - 1">Piattaforme</p> <div class="coming-soon-responsive-width text-red" ><p id="platform">${item.platform}</p></div ></div ><div class="d-flex align-items-baseline coming-soon-flex coming-soon-border"><p class="fw-bold w-25 pb-1">Genere</p><div class="h6 w-75 text-red"><p id="gender" >${item.gender}</p></div></div><div class="mt-4"><div class="btn-container d-sm-block"><a id="link" class="btn btn-dark" href="${item.link}">Sito ufficiale</a></div></div></div >`;
        container.appendChild(card)

    })

    while (counter < 6) {
        h5[counter].textContent = data[counter].title;
        img[counter].src = data[counter].url;
        date[counter].textContent = data[counter].date;
        platform[counter].textContent = data[counter].platform;
        gender[counter].textContent = data[counter].gender;
        link[counter].href = data[counter].link;
        counter++;
    }
}
)