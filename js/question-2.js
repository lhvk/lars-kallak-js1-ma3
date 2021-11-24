// question II

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=8888de0304fe4d1cb211a49d0fa496c4";

const resultsContainer = document.querySelector(".results");
const objectContainer = document.querySelector(".objects");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const received = await response.json();

    const games = received.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) break;

      // Not part of the assignement
      resultsContainer.innerHTML = `Now displaying ${1 + parseInt(i)} games`;

      const tagArray = games[i].tags;

      objectContainer.innerHTML += `
  <div class="games">
  ${games[i].name}
  <br>
  Rating: ${games[i].rating} 
  <br>
  Tags: ${tagArray.length}
  </div>`;
    }

    //Error
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "You've caused the following: " + error;
  }
}

makeApiCall();
