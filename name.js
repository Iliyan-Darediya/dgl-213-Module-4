let container = document.querySelector(".container")

async function getData() {
    let movieName = document.getElementById('movieName').value
    let data;
    let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieName}&api-key=nvZZM6U8Hx6PFfbmSsbXkYnDzqj00xp6`
  
    // Use try/catch instead of `Promise.catch`
    try {
      const response = await fetch(url);
      // Use the `.json` method on the fetch response object
      data = await response.json();
      data.results.map(movie=>{
          console.log(movie)
          addDiv(container, movie)
      })
    } catch (error) {
      console.log('error', error);
    }
}

function addDiv(container, movie){
    container.innerHTML +=
    `<a href = '${movie.link.url}' target = '_blank' class='card'>
        <img class = 'card__image' src =${movie.multimedia ? movie.multimedia.src : 'poster-holder.jpg'} >
        <h2>${movie.display_title}</h2>
        <h3>${movie.publication_date}</h3>
        <p>${movie.summary_short}</p>
    </a >`
}