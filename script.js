const apiKey = '887939956f79c1a9d57b5761ac2e3592';

// Define the API URL for fetching movies
const discoverMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

// Function to fetch and display movies
async function fetchAndDisplayMovies(apiUrl, containerSelector) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const movies = data.results;
        const movieGrid = document.querySelector(containerSelector);

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            img.alt = movie.title;

            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-info');
            movieInfo.innerHTML = `<h3>${movie.title}</h3>`;

            movieCard.appendChild(img);
            movieCard.appendChild(movieInfo);
            movieGrid.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Fetch and display movies for all sections
fetchAndDisplayMovies(discoverMoviesUrl, '.movie-grid');
fetchAndDisplayMovies(discoverMoviesUrl, '.tv-show-container');
fetchAndDisplayMovies(discoverMoviesUrl, '.tv-grid');
