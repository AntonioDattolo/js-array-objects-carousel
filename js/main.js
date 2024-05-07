const slides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
let carousel = document.getElementById("carousel");
let itemCarousel = []
let imgActive;
let nextSlide;
const btnNext = document.getElementById("next")
const btnPrev = document.getElementById("prev")
initial()
start()


function initial(){
    for (x = 0; x <= slides.length -1; x++){
        z = slides[x]
        let card = document.createElement("div");
        card.classList.add( "slide")
        carousel.append(card)
        card.innerHTML =`<img class="w-100" src="./${z.image}"><h5 class="mytext">${z.title} <br> ${z.text} </h5> `;
        itemCarousel.push(card) 
    }
}
function start(){
    // for (let x = 1; x < itemCarousel.length; x++) {
        let element = itemCarousel[0];
        element.classList.add("active")
    // }
    
}
btnNext.addEventListener("click", function next(){
    
    for(let x = 0; x < itemCarousel.length; x++){
        
        const slide = itemCarousel[x] 
        
        if(slide.classList.contains("active")){
         slide.classList.remove("active");
         imgActive = x;
        }
    } 
    nextSlide = imgActive + 1;
    //  reset? 
    if(nextSlide >= itemCarousel.length){
         nextSlide = 0;
    }
    itemCarousel[nextSlide].classList.add("active");
    console.log(nextSlide);

})

btnPrev.addEventListener("click",function previous(x){
    for(let x = 0; x < itemCarousel.length; x++){
        
        const slide = itemCarousel[x] 
        
        if(slide.classList.contains("active")){
         slide.classList.remove("active");
         imgActive = x;
        }
    } 
    nextSlide = imgActive - 1;
    //  reset? 
    if(nextSlide < 0){
         nextSlide = 4;
    }
    itemCarousel[nextSlide].classList.add("active");
    console.log(nextSlide);
})


