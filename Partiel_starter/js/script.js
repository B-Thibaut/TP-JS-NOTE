console.log("Let's go !")
let select = document.querySelector("select")

select.addEventListener('change', (e)=>{
    let maison = e.target.value;
    console.log(maison);
    loadData(maison);
})

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        let maison = e.target.value;
        console.log(maison);
        loadData(maison);
      });
    });
  });

let main = document.querySelector('main #characters');


loadData(maison == "Gryffindor");

async function loadData(maison) {
  const response = await fetch('https://hp-api.onrender.com/api/characters');
  const Personnages = await response.json();

  const liste = Personnages.slice(0, 8);
  console.log(liste)



  main.innerHTML="";
  for (const perso of liste) {
    if(perso.house == maison){ 
        
        let article = document.createElement('article');

        article.innerHTML = `

                <figure>
                    <img src="${perso.image}" alt="${perso.name}" class="round-image">
                    <figcaption>${perso.name}</figcaption>
                </figure>`


        main.appendChild(article);

        }
  }
}