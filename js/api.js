// var allMoviesApi = 'http://localhost:3000/allMovie';

// function start() {
//     getMovies(renderMovies);

//     handleCreateMovie();
// };

// start();

// function getMovies(callback) {
//     fetch(allMoviesApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// }

// function createMovie(data, callback) {
//     var options = {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//     }
//     fetch(allMoviesApi, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// }

// function updateMovie(id, data, callback) {
//     var options = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//     }
//     fetch(allMoviesApi + '/' + id, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// }

// function handleUpdateMovie(id) {
//     var movieItem = document.querySelector('.movie__item--' + id);
//     if (movieItem) {
//         document.querySelector('input[name="thumbnail"]').value = document.querySelector('img').getAttribute('src');
//         document.querySelector('input[name="category"]').value = document.querySelector('.movie__item-category').innerText;
//         document.querySelector('input[name="name"]').value = document.querySelector('.movie__item-name').innerText;
//         document.querySelector('input[name="evaluate"]').value = document.querySelector('.movie__item-evaluate').getAttribute('src');
//     }
//     var btnUpdate = document.querySelector('.btn-save');

//     btnUpdate.onclick = function() {
//         var thumbnail = document.querySelector('input[name="thumbnail"]').value;
//         var category = document.querySelector('input[name="category"]').value;
//         var name = document.querySelector('input[name="name"]').value;
//         var evaluate = document.querySelector('input[name="evaluate"]').value;

//         var formData = {
//             thumbnail: thumbnail,
//             category: category,
//             name: name,
//             evaluate: evaluate,
//         };

//         updateMovie(id, formData, function() {
//             getMovies(renderMovies);
//             document.querySelector('input[name="thumbnail"]').value = '';
//             document.querySelector('input[name="category"]').value = '';
//             document.querySelector('input[name="name"]').value = '';
//             document.querySelector('input[name="evaluate"]').value = '';
//         })
//     }
// }

// function renderMovies(movies) {
//     var moviesBlock = document.querySelectorAll('.movie__list');
//     var htmls = movies.map(function(movie) {
//         return `<li onclick="handleUpdateMovie(${movie.id})" class="movie__item movie__item--${movie.id}">
//             <span class="movie__item-category">${movie.category}</span>
//             <a class="movie__item-avt">
//                 <img src="${movie.thumbnail}" alt="" title="">
//             </a>
//             <a class="movie__item-name">${movie.name}
//                 <img class="movie__item-evaluate" src="${movie.evaluate}" alt="">

//             </a>
//         </li>`;
//     });
//     moviesBlock.forEach(function(movie) {
//         movie.innerHTML = htmls;
//     })
// }

// function handleCreateMovie() {
//     var createBtn = document.querySelector('.btn-create');

//     createBtn.onclick = function() {
//         var thumbnail = document.querySelector('input[name="thumbnail"]').value;
//         var category = document.querySelector('input[name="category"]').value;
//         var name = document.querySelector('input[name="name"]').value;
//         var evaluate = document.querySelector('input[name="evaluate"]').value;

//         var newMovie = {
//             thumbnail: thumbnail,
//             category: category,
//             name: name,
//             evaluate: evaluate
//         }

//         createMovie(newMovie, function() {
//             getMovies(renderMovies);
//         });
//     }

//     function handleDeleteMovie(id) {
//         var options = {
//             method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
//             headers: { 'Content-Type': 'application/json' }
//         }
//         fetch(allMoviesApi + '/' + id, options)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function() {
//                 var movieItem = document.querySelector('.movie__item--' + id)

//                 if (movieItem) {
//                     movieItem.remove();
//                 }
//             })
//     }
// }
