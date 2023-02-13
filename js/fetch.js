const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6bfb305121msh18dec6296c141ffp11d281jsn055c4a04804e",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

const url =
  "https:movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";

export async function fetchMovie() {
  const response = await fetch(url, options);

  const avengers = await response.json();
  console.log(avengers);
}
