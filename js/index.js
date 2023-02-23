const url = "https://api.punkapi.com/v2/beers/";

const container = document.querySelector("#container");

async function fetchRecipe() {
  try {
    let response = await fetch(url);

    const data = await response.json();

    console.log(data);

    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);

      const beers = data[i];

      container.innerHTML += `<a href="details.html?id=${beers.id}" class="card_container">
                              <img src="${beers.image_url}" class="card_img" alt="Picture of the beer described">
                              <h2 class="card_head">${beers.name}</h2>
                              <p class="card_description">${beers.tagline}</p>
                              </a>`;
    }
  } catch (error) {
    console.log(error, "Oh no.. the dev has messed up somewhere");
    container.innerHTML = `<h2 class="index_error card_container">There was an error fetching the results!</h2>`;
  }
}

setTimeout(function () {
  fetchRecipe();
}, 1000);
