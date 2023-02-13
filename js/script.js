const url = "https://api.punkapi.com/v2/beers";

const container = document.querySelector("#container");

async function fetchRecipe() {
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);

    container.innerHTML += `<a href="#" class="card_container">
                            <img src="${data[i].image_url}" class="card_img" alt="Picture of the beer described">
                            <h2 class="card_head">${data[i].name}</h2>
                            <p class="card_description">${data[i].tagline}</p>
                            </a>
                          `;
  }
}

fetchRecipe();
