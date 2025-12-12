const urlParams = new URLSearchParams(window.location.search);
const showId = urlParams.get("id");

if (showId) {
  fetch(`https://api.tvmaze.com/shows/${showId}`)
    .then((res) => res.json())
    .then((res) => {
      renderShow(res);
    });
} else {
  if (document.getElementById("shows-container")) {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((res) => {
        renderShows(res);
      });
  }

  if (document.getElementById("top-movies")) {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((res) => {
        renderTopMovies(res);
      });
  }
}

function renderShows(shows) {
  const showsContainer = document.getElementById("shows-container");

  showsContainer.innerHTML = "";

  shows.forEach((show) => {
    const showElement = document.createElement("div");
    showElement.classList.add("show");
    showElement.innerHTML = `
      <img src="${show.image.medium}" alt="${show.name}">
      <h2>${show.name}</h2>
      <p>${show.summary}</p>
      <button onclick="viewShow(${show.id})">View Show </button>
    `;
    showsContainer.appendChild(showElement);
  });
}

function viewShow(id) {
  window.location.href = `show.html?id=${id}`;
}

function renderShow(show) {
  const showContainer = document.getElementById("show-container");

  showContainer.innerHTML = `
    <img src="${show.image ? show.image.medium : ""}" alt="${show.name}">
    <h2>${show.name}</h2>
    <h4>Summary:</h4>
    <p>${show.summary}</p>
    <h4>Rating:</h4>
    <span>${show.rating.average}</span>
    <h4>Genres:</h4>
    <span>${show.genres.join(", ")}</span>
    <button><a href="shows.html">Back to Shows</a></button>
  `;
}

function filterShows() {
  const query = document.getElementById("search-show").value;

  if (query === "") {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((res) => {
        shows = res;

        renderShows(shows);
      });
  } else {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const filteredShows = res.map((x) => x.show);
        renderShows(filteredShows);
      });
  }
}

function renderTopMovies(shows) {
  const topMoviesContainer = document.getElementById("top-movies");

  const topShows = shows
    .filter((show) => show.rating && show.rating.average)
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 5);

  topMoviesContainer.innerHTML =
    "<h2>Top 5 Rated Movies</h2><div class='top-movies-list'></div>";
  const list = topMoviesContainer.querySelector(".top-movies-list");

  topShows.forEach((show) => {
    const showElement = document.createElement("div");
    showElement.classList.add("show");

    showElement.innerHTML = `
      <img src="${show.image.medium}" alt="${show.name}">
      <h2>${show.name}</h2>
      <p>Rating: ${show.rating.average}</p>
      <button onclick="viewShow(${show.id})">View Show</button>
    `;
    list.appendChild(showElement);
  });
}

const overlay = document.getElementById("overlay");
const signInButton = document.getElementById("Sign in");

if (signInButton) {
  signInButton.addEventListener("click", () => {
    if (overlay) overlay.style.display = "block";
  });
}

function closeLoginForm() {
  if (overlay) overlay.style.display = "none";
}

window.closeLoginForm = closeLoginForm;

const cancelButton = document.getElementById("cancelButton");
if (cancelButton) {
  cancelButton.addEventListener("click", closeLoginForm);
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
    closeLoginForm();
  });
}

const moviesGenre = document.getElementById("movies-genre");
if (moviesGenre) {
  fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((res) => {
      renderMoviesByGenre(res);
    });
}

const newMovies = document.getElementById("new-movies");
if (newMovies) {
  fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((res) => {
      renderNewMovies(res);
    });
}

function renderMoviesByGenre(shows) {
  const moviesByGenreContainer = document.getElementById("movies-genre");
  const genreMap = {};

  shows.forEach((show) => {
    show.genres.forEach((genre) => {
      if (!genreMap[genre]) {
        genreMap[genre] = [];
      }
      genreMap[genre].push(show);
    });
  });
  moviesByGenreContainer.innerHTML = "<h2>Movies by Genre</h2>";

  const targetGenres = ["Action", "Crime", "Comedy", "Drama"];

  targetGenres.forEach((genre) => {
    if (genreMap[genre]) {
      const genreSection = document.createElement("div");
      genreSection.classList.add("genre-section");
      genreSection.innerHTML = `<h2>${genre}</h2>`;
      const genreShowsContainer = document.createElement("div");
      genreShowsContainer.classList.add("latest-movies");
      genreMap[genre].slice(0, 4).forEach((show) => {
        const showElement = document.createElement("div");
        showElement.classList.add("show");
        showElement.innerHTML = `
        <img src="${show.image.medium}" alt="${show.name}">
        <h2>${show.name}</h2>
        <button onclick="viewShow(${show.id})">View Show</button>
      `;
        genreShowsContainer.appendChild(showElement);
      });
      genreSection.appendChild(genreShowsContainer);
      moviesByGenreContainer.appendChild(genreSection);
    }
  });
}

function renderNewMovies(shows) {
  const newMoviesContainer = document.getElementById("new-movies");

  const newShows = shows
    .filter((show) => show.premiered)
    .sort((a, b) => new Date(b.premiered) - new Date(a.premiered))
    .slice(0, 4);

  newMoviesContainer.innerHTML = "<h1>Latest Movies</h1>";

  const listContainer = document.createElement("div");
  listContainer.classList.add("latest-movies");

  newShows.forEach((show) => {
    const showElement = document.createElement("div");
    showElement.classList.add("show");

    showElement.innerHTML = `
      <img src="${show.image.medium}" alt="${show.name}">
      <h2>${show.name}</h2>
      <p>Release Date: ${show.premiered}</p>
      <button onclick="viewShow(${show.id})">View Show</button>
    `;
    listContainer.appendChild(showElement);
  });

  newMoviesContainer.appendChild(listContainer);
}
