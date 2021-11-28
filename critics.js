let container = document.querySelector(".container")
const card = document.getElementsByClassName('card')

let url = `https://api.nytimes.com/svc/movies/v2/critics/all.json?&api-key=nvZZM6U8Hx6PFfbmSsbXkYnDzqj00xp6`
//let url = `https://api.nytimes.com/svc/movies/v2/critics/A.%20O.%20Scott.json?&api-key=nvZZM6U8Hx6PFfbmSsbXkYnDzqj00xp6`

fetch(url)
    .then(response => response.json())
    .then(data=> console.log(data.results.map(critic=>{
        addDiv(container,critic)
        addAnimation()
    })))

function addDiv(container, critic){
    container.innerHTML +=
    `<div class='card'>
        <img class = 'card__image' src =${critic.multimedia ? critic.multimedia.resource.src : 'poster-holder.jpg'} >
        <h2>${critic.display_name}</h2>
        <h4>${critic.status?`Status ${critic.status}`: "We don't know their status"}</h4>
        <p>${critic.bio?critic.bio:"We don't have access to their bio"}</p>
    </div>`
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