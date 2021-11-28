/* 
    Document Details:
     Course:         DGL-213
     Module          4
     document        name.js
     Author:         Iliyan Darediya
     Date:           27 Nov 2021
*/
//UI selectors for the container and cared
let container = document.querySelector(".container")
const card = document.getElementsByClassName('card')

//getData is an asynchronous function
async function getData() {
    //movieName will store the value of the text provided by the user
    let movieName = document.getElementById('movieName').value
    let data;
    //url for the fetch promise
    let url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieName}&api-key=nvZZM6U8Hx6PFfbmSsbXkYnDzqj00xp6`
  
    // Use try/catch instead of `Promise.catch`
    try {
      const response = await fetch(url);
      // Use the `.json` method on the fetch response object
      data = await response.json();
      data.results.map(movie=>{
          //add div for each move
          addDiv(container, movie)
      })
      //Add animation for each card
      addAnimation()
    } catch (error) {
      console.log('error', error);
    }
}

//Add div will add a car div that has the movie image, a link, title, date and a short summary for the movie
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

//mouseIn and mouseOut function will call the anime function with the required values
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

//addAnimation will add eventlistener to all the card elements
function addAnimation(){
    for(let i = 0;i<card.length;i++){
        card[i].addEventListener('mouseover',mounseIn)
        card[i].addEventListener('mouseout',mouseOut)
    }
}
