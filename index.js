let image = document.getElementById("img");
let title = document.getElementById("title")
let synopsis = document.getElementById("synopsis")
let type = document.getElementById("type")
let episodes = document.getElementById("episodes")
let animedisplay = document.getElementById("animedisplay")





document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();
})

async function getdata(){
    let animename = document.getElementById("search").value;
    let url = `https://api.jikan.moe/v4/anime?q=${animename}`
    console.log(animename)
    const response = await fetch(url);

    try{
        if(!response.ok){

            throw new Error("NOT FOUND = " + response);


        }
        animedisplay.style.display = "grid"

        const data = await response.json();
        console.log(data.data[0])
        const dat = data.data[0];
        image.src = dat.images.jpg.image_url
        title.innerText = `${dat.title} \n  ${dat.title_english}`;
        if ( dat.title == dat.title_english){
            title.innerText = dat.title;
        }
        
        synopsis.innerText = "synopsis : " + dat.synopsis;
        type.innerText = "Type : " + dat.type;
        episodes.innerText = "episodes : " + dat.episodes;

    }

    catch (error){
        console.error('There has been a problem with your fetch operation:' , error)
    }

    
}