function topRated() {
  var $ = document.querySelector.bind(document);
  var $$ = document.querySelectorAll.bind(document);

  const topRate = $$(".bar__list");

  function getTopRate(callback) {
    var apiTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=0edf7c2e352307b3adc4dd446193177f&language=en-US&page=1`;

    fetch(apiTop)
      .then((response) => response.json())
      .then(callback);
  }

  function renderTopRated(data) {
    const imgUrl = "https://image.tmdb.org/t/p/original";
    const htmls = data.results.map((result) => {
      return `
                <li class="bar__item">
                    <a class="bar__item-link" href="">
                        <img src="${imgUrl}${result.poster_path}" alt="" class="bar__item-img">
                        <div class="bar__item-desc">
                            <p class="bar__item-name">${result.title}</p>
                            <span class="bar__item-evaluate">${result.vote_average}<i class='bx bxs-star'></i></span>
                        </div>
                    </a>
                </li>
                `;
    });
    topRate.forEach((top) => (top.innerHTML = htmls));
  }
  getTopRate(renderTopRated);
}
export default topRated;
