let container = document.querySelector(".container")
const card = document.getElementsByClassName('card')

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
          addDiv(container, movie)
      })
      console.log("All divs executed")
      addAnimation()
    } catch (error) {
      console.log('error', error);
    }
}

function addDiv(container, movie){
    container.innerHTML +=
    `<div class='card'>
        <img class = 'card__image' src =${movie.multimedia ? movie.multimedia.src : 'poster-holder.jpg'} >
        <button class = 'button'><a href = '${movie.link.url}' target = '_blank'>Know More</a></button>
        <h2>${movie.display_title}</h2>
        <h3>${movie.publication_date}</h3>
        <p>${movie.summary_short}</p>
    </div >`
}
const mounseIn = () =>{
    anime({
        targets: card,
        width:'10%',
        scale:{
            delay:800,
            value:1.5
        },
        duration:1500
    })
}
const mouseOut = () =>{
    anime({
        targets: card,
        width:'18%',
        scale:{
            delay:800,
            value:1
        },
        duration:1500
    })
}

function addAnimation(){
    for(let i = 0;i<card.length;i++){
        card[i].addEventListener('mouseover',mounseIn)
        card[i].addEventListener('mouseout',mouseOut)
    }
    //card__image.addEventListener('mouseover',mounseIn)
    console.log(
        "Animation executed from the name.js file"
    )
}
