// Projects-section

const movies = document.querySelector(".movies-app");
const gitrepo = document.querySelector(".github-movies");

// Project 1
movies.addEventListener("click", () => {
  window.open("https://custom-movie-app.netlify.app/");
});

gitrepo.addEventListener("click", () => {
  window.open("https://github.com/gagan-28deep/movies-app");
});
