/* 
    Document Details:
     Course:         DGL-213
     Module          4
     document        critics.js
     Author:         Iliyan Darediya
     Date:           27 Nov 2021
*/
//UI selectors for the container and cared
let container = document.querySelector(".container")
const card = document.getElementsByClassName('card')

//The url for thecritics
let url = `https://api.nytimes.com/svc/movies/v2/critics/all.json?&api-key=nvZZM6U8Hx6PFfbmSsbXkYnDzqj00xp6`

//fetch the data from the url
fetch(url)
    .then(response => response.json())
    .then(data=> data.results.map(critic=>{
        //Add div for the each critic and add animation
        addDiv(container,critic)
        addAnimation()
    }))

//Add div will  add the image, name status and bio of the critic
function addDiv(container, critic){
    container.innerHTML +=
    `<div class='card'>
        <img class = 'card__image' src =${critic.multimedia ? critic.multimedia.resource.src : 'poster-holder.jpg'} >
        <h2>${critic.display_name}</h2>
        <h4>${critic.status?`Status ${critic.status}`: "We don't know their status"}</h4>
        <p>${critic.bio?critic.bio:"We don't have access to their bio"}</p>
    </div>`
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