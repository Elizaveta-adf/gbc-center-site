const reveal = document.querySelectorAll(".reveal");

function showElements(){

    reveal.forEach(element=>{

        const windowHeight=window.innerHeight;

        const elementTop=element.getBoundingClientRect().top;

        if(elementTop<windowHeight-100){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll",showElements);

showElements();
const galleryItems=document.querySelectorAll(".gallery-item img");

const lightbox=document.querySelector(".lightbox");

const lightboxImage=document.getElementById("lightbox-image");

const closeBtn=document.querySelector(".close-lightbox");

galleryItems.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src=img.src;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

const burger=document.querySelector(".burger");

const mobileMenu=document.querySelector(".mobile-menu");

burger.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

});