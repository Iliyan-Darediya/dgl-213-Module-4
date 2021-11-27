
async function getData(movieName) {
    let data;
    let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieName}&api-key=nvZZM6U8Hx6PFfbmSsbXkYnDzqj00xp6`
  
    // Use try/catch instead of `Promise.catch`
    try {
      const response = await fetch(url);
      // Use the `.json` method on the fetch response object
      data = await response.json();
      return data;
    } catch (error) {
      console.log('error', error);
    }
}

getData("godfather").then(data=>{
    return data.results
})