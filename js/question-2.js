const game_url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const proxy = "https://noroffcors.herokuapp.com/";
const url = proxy + game_url;

const gameContainer = document.querySelector(".gameContainer");

async function games() {
  try {
    gameContainer.innerHTML = "";

    const response = await fetch(url);
    const results = await response.json();
    const data = results.results;

    for (let i = 0; i < data.length; i++) {
      const game = data[i];

      if (i === 8) break;

      console.log(`${game.name}
          Rating: ${game.rating}
          Nr. of tags: ${game.tags.length}`);

      gameContainer.innerHTML +=
        `<div class="game">
          <h2>${game.name}</h2>
          <p>Rating: ${game.rating}</p>
          <p>Nr. of tags: ${game.tags.length}</p>
        </div>`;
    }
  } catch (error) {
    console.log("Error occured", error);
    gameContainer.innerHTML = displayError();
  }
}

games();