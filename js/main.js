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
let carousel = document.getElementById("carousel")
let itemCar =[]
let imgActive;
let nextSlide;

/// FUNIONE PER STAMPARE TUTTE LE SLIDE IN DISPLAY NONE
setTimeout(function slide(){
    x=0
    element = slides[x]
    element = document.createElement("img")
    element.classList.add("active" , "slide", "col-10")
    element.src =`${slides[x].image}`
    carousel.append(element)
    itemCar.push(element) 
     
    for(x=1; x < slides.length; x++){
        element = slides[x]
        element = document.createElement("img")
        element.classList.add("slide", "col-10")
        element.src =`${slides[x].image}`
        carousel.append(element)
        itemCar.push(element) 
    }
    
    
    // // DEFINIRE FUNZIONE PER CLICK
    
    document.getElementById("next").addEventListener ( "click" , function() {
        
        // DEFINIRE PASSAGGIO A SLIDE SUCCESSIVE(CICLO)

        for(let x = 0; x < itemCar.length; x++){
            // definire costante per slide selezionata dal ciclo
            let slide = itemCar[x] 
            
            // selezionata la slide impostare comando per cui essa venga resa visibile
            if(slide.classList.contains("active")){
                slide.classList.remove("active");
                imgActive = x;
            }
            
        }
        // DOPO IL CICLO DEFINISCO IL NUOVO INDEX DELLA SLIDE A CUI ANDRò AD AGGIUNGIURE ACTIVE
        nextSlide = imgActive + 1;
        
        
        // Arrivato a fine slide mi serve un reset? SI!
        if(nextSlide >= itemCar.length){
            nextSlide = 0;
        }
    itemCar[nextSlide].classList.add("active");
   console.log(nextSlide);
   
})
},0)

// DEFINIRE FUNZIONE PER CLICK CONTRARIA
document.getElementById("prev").addEventListener ( "click" , function() {
    
    // DEFINIRE PASSAGGIO A SLIDE SUCCESSIVE(CICLO)
    
    for(let x = 0; x < itemCar.length; x++){
        // definire costante per slide selezionata dal ciclo
        const slide = itemCar[x]
        
        // selezionata la slide impostare comando per cui essa venga resa visibile
        if(slide.classList.contains("active")){
            slide.classList.remove("active");
            imgActive = x;
        }
    }
    // DOPO IL CICLO DEFINISCO IL NUOVO INDEX DELLA SLIDE A CUI ANDRò AD AGGIUNGIURE ACTIVE
    nextSlide = imgActive - 1;
    
    // Arrivato a fine slide mi serve un reset? SI!
    if(nextSlide < 0){
        nextSlide = itemCar.length - 1 ;
    }
    itemCar[nextSlide].classList.add("active");
    console.log(nextSlide);
    
})




