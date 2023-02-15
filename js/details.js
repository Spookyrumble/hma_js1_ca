const detailContainer = document.querySelector(".detail_container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const url = "https://api.punkapi.com/v2/beers/" + id;

async function fetchBeer() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    detailContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);

      const details = data[i];
      console.log(details);

      document.title = "Beer:" + " " + details.name;
      detailContainer.innerHTML += `<div>
                                        <h1 id="head_h1">${details.name}</h1>
                                        <p id="date">First brewed in ${details.first_brewed}</p>    
                                        <h2>${details.tagline}</h2>
                                        <p class="details_p">${details.description}</p>
                                    </div>
                                    <div>
                                        <h3 class="details_h2">This beer goes well with:</h3>
                                        <p class="details_p">${details.food_pairing}</p>
                                    </div>
                                    <div>
                                        <h4 class="details_h2">Brewers tips:</h4>
                                        <p class="details_p">${details.brewers_tips}</p>
                                    </div>
                                    <a href="contact.html" id="goback">Contact us</a>
                                    <a href="index.html" id="goback">Go Back..</a>
                                    
                                  `;
    }
  } catch (error) {
    console.log("Oh no.. the dev sucks", error);
  }
}

setTimeout(function () {
  fetchBeer();
}, 1000);
