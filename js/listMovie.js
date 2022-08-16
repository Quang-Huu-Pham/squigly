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
    var htmls = results.map(function (movie) {
      return `
        <li onclick="handleUpdateMovie(${movie.id})" class="movie__item movie__item--${movie.id}">
                <span class="movie__item-category">${movie.category}</span>
                <a class="movie__item-avt">
                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="" title="">
                </a>
                <a class="movie__item-name">${movie.title}
                    <img class="movie__item-evaluate" src="${movie.vote_average}" alt="">

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
