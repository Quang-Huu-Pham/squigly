function category() {
    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);

    const categories = $$('.header__category-list')

    function getCategory(callback) {
        var apiCategories = `https://api.themoviedb.org/3/genre/movie/list?api_key=0edf7c2e352307b3adc4dd446193177f&language=en-US`

        fetch(apiCategories)
            .then(response => response.json())
            .then(callback)
    }

    function renderCategory(data) {
        const html = data.genres.map(genre => {
            return `
        <li class="header__category-item">
            <a class="header__category-link" href="">${genre.name}</a>
        </li>
        `
        })
        categories.forEach(category => category.innerHTML = html)
    }

    getCategory(renderCategory);
}
export default category;