function allMovies() {
  const movieBlock = document.querySelectorAll(".movie__list");

  function getAllMovies(callback) {
    const movieApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`;

    fetch(movieApi)
      .then((res) => res.json())
      .then(callback);
  }

  function renderMovies(data) {
    const { results } = data;
    console.log(results);
    var htmls = results.map((movie, index) => {
      return `
            <li class="movie__item movie__item--${movie.id}">
                <span class="movie__item-category">
                    ${movie.vote_average} <i class='bx bxs-star'></i>
                </span>
                <a class="movie__item-avt">
                    <img src="https://image.tmdb.org/t/p/original${
                      movie.poster_path
                    }" alt="" title="">
                </a>
                <a class="movie__item-name">
                    <p>${movie.title} (${movie.release_date.slice(0, 4)})</p>
                </a>
                
            </li>`;
    });
    movieBlock.forEach(function (movie) {
      movie.innerHTML = htmls;
    });
  }
  getAllMovies(renderMovies);
}
export default allMovies;
