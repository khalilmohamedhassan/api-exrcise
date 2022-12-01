

 let articales=[];
 async function getnews(country,category){
        let response =  await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2cd1b65cf2a74ab3950f1d0cf3db8f1e`)

        let finalresponse = await response.json();
        articales = finalresponse.articles;
        displaypro()
}
function displaypro(){

    item=``;
    for (let i = 0; i < articales.length; i++) {
       
        item += `
        <div class="card">
        <img src="${articales[i].urlToImage ?   articales[i].urlToImage  :"image/about-bg.jpg"}" alt="">
        <h2>${articales[i].title}</h2>
        <p>${articales[i].description ? articales[i].description : "this is magazine is at to liset in the modern news"}</p>
    </div>
        `        
    }
    document.querySelector(".container").innerHTML = item

   
}
getnews("eg","sports");

let links = document.querySelectorAll(".navbar ul li");
links.forEach((link) => {
    link.addEventListener("click" , function(e){
            getnews("eg",e.target.innerHTML);
        
    })
})

    