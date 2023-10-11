console.log("Let's go !")
let main = document.querySelector('main #characters');

loadData();
async function loadData() {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
  const Personnages = await response.json();

  const liste = Personnages.slice(0, 8);
  console.log(liste)

  let compte = 0;
  for (const perso of liste) {
    console.log(compte)
    compte++;
    
    let article = document.createElement('article');

    article.innerHTML = `
        <td>
            <figure>
                <img src="${perso.image}" alt="${perso.name}" class="round-image">
                <figcaption>${perso.name}</figcaption>
            </figure>
        </td>`;
    if(compte == 3){
        console.log("retour ligne")
        article.innerHTML += `</tr>
        <tr>`
        compte=0;
    }
        
    main.appendChild(article);

    }
}