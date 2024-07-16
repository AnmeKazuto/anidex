let image = document.getElementById("img");
let title = document.getElementById("title")
let synopsis = document.getElementById("synopsis")
let type = document.getElementById("type")
let episodes = document.getElementById("episodes")
let animedisplay = document.getElementById("animedisplay")







async function getdata(){
    let animeType = document.getElementById("anime-type").value
    let url = `https://api.jikan.moe/v4/top/anime`
    
    const response = await fetch(url);

    try{
        if(!response.ok){

            throw new Error("NOT FOUND = " + response);


        }
        
        console.log(response)
        animedisplay.style.display = "grid"

        const data = await response.json();
        console.log(data)
        let topArray = data.data
        

        
            for (let i in topArray){
                    
                    let x = 0
                    let topAnime = document.getElementById(`topImg${i}`)
                    let topLink = document.getElementById(`topLink${i}`)
                    let Topdata = data.data
                    topAnime.src = Topdata[i].images.jpg.image_url
                    let animeL = Topdata[i].url
                    topLink.setAttribute('href', animeL)

                    
                    console.log(i)
                    console.log(Topdata[i])
                    console.log(topArray)
                    console.log(topAnime)
                    console.log(animeL)

                    x++
                
            }
        
       // const dat = data.data;
        //image.src = dat.images.jpg.image_url
        //title.innerText = `Title: ${dat.title} \n English Title: ${dat.title_english}`;
        //if ( dat.title == dat.title_english){
        //    title.innerText = dat.title;
        //}
        
        
        //synopsis.innerText = "synopsis : " + dat.synopsis;
        //type.innerText = "Type : " + dat.type;
        //episodes.innerText = "episodes : " + dat.episodes;

    }

    catch (error){
        console.error('There has been a problem with your fetch operation:' , error)
    }

    
}

async function Trending(){
    let animeType = document.getElementById("anime-type").value
    let url = `https://api.jikan.moe/v4/top/anime`
    
    const response = await fetch(url);

    try{
        if(!response.ok){

            throw new Error("NOT FOUND = " + response);


        }
        
        console.log(response)
        

        const data = await response.json();
        console.log(data)
        let topArray = data.data
        

        
            for (let i in topArray){
                    
                    let x = 0
                    let topAnime = document.getElementById(`topImg${i}`)
                    let topLink = document.getElementById(`topLink${i}`)
                    let Topdata = data.data
                    topAnime.src = Topdata[i].images.jpg.image_url
                    let animeL = Topdata[i].url
                    topLink.setAttribute('href', animeL)

                    
                    console.log(i)
                    console.log(Topdata[i])
                    console.log(topArray)
                    console.log(topAnime)
                    console.log(animeL)

                    x++
                
            }
        


    }

    catch (error){
        console.error('There has been a problem with your fetch operation:' , error)
    }

    
}
Trending()