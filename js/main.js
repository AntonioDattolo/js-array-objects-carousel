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
let tumbNail = document.getElementById("tumb")
let itemCarousel = []
let imgActive;
let nextSlide;
const btnNext = document.getElementById("next")
const btnPrev = document.getElementById("prev")
let select = []
initial()
start()
generateTumbnail()
let unspoken = setInterval(autoplay,5000)

function initial(){
    for (x = 0; x <= slides.length -1; x++){
        z = slides[x]
        let card = document.createElement("div");
        card.classList.add( "slide", "col-12")
        carousel.append(card)
        card.innerHTML =`<img src="./${z.image}"><h5 class="mytext">${z.title} <br> ${z.text} </h5> `;
        itemCarousel.push(card) 
    }
}

function start(){
    nextSlide = itemCarousel[0];
    nextSlide.classList.add("active")
    return nextSlide 
}

function generateTumbnail(){
    for (x = 0; x <= slides.length -1; x++){
        z = slides[x]
        y = itemCarousel[x]
        let nail = document.createElement("button");
        nail.classList.add(  "col-2" , "select", "btn", "abc" )
        nail.setAttribute("value", `${x}`)
        tumbNail.append(nail)
        nail.innerHTML =`<img value="${x}" src="./${z.image}">`;
        select.push(nail)
        select[x].addEventListener("click", function(){
            y = nail.value
            if (itemCarousel[nextSlide].classList.contains("active")) {
                itemCarousel[nextSlide].classList.remove("active");
                itemCarousel[y].classList.add("active");
                nextSlide = y
            }
        })
        nextSlide = 0  
    }
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
    clearInterval(unspoken)
    setInterval(autoplay,5000)
    return itemCarousel[nextSlide]
})

btnPrev.addEventListener("click",function previous(){
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
    clearInterval(unspoken)
    setInterval(autoplay,5000)
    return itemCarousel[nextSlide]
})

function autoplay() {
    for (let x = 0; x < itemCarousel.length; x++) {
        const slide = itemCarousel[x]
        if (slide.classList.contains("active")) {
            slide.classList.remove("active");
            imgActive = x;
        }
    }
    nextSlide = imgActive + 1;
    //  reset? 
    if (nextSlide >= itemCarousel.length) {
        nextSlide = 0;
    }
    itemCarousel[nextSlide].classList.add("active");
    console.log(nextSlide);
    return nextSlide
}


