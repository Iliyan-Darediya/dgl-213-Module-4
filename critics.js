let container = document.querySelector(".container")

let url = `https://api.nytimes.com/svc/movies/v2/critics/all.json?&api-key=nvZZM6U8Hx6PFfbmSsbXkYnDzqj00xp6`
//let url = `https://api.nytimes.com/svc/movies/v2/critics/A.%20O.%20Scott.json?&api-key=nvZZM6U8Hx6PFfbmSsbXkYnDzqj00xp6`

fetch(url)
    .then(response => response.json())
    .then(data=> console.log(data.results.map(critic=>{
        addDiv(container,critic)
        console.log(critic)
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