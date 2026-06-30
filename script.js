// ==========================
// KickVerse V2
// ==========================

// Buy Now buttons
const buyButtons = document.querySelectorAll(".card button");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ Item added to your cart!");
    });
});

// Favorite Heart
const heart = document.querySelector(".fa-heart");

if (heart) {
    heart.addEventListener("click", () => {
        heart.classList.toggle("fa-solid");
        heart.classList.toggle("fa-regular");

        if (heart.classList.contains("fa-solid")) {
            heart.style.color = "#ff4d6d";
        } else {
            heart.style.color = "";
        }
    });
}

// Newsletter Form
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.querySelector("input").value;

        if(email.trim() === ""){

            alert("Please enter your email.");

            return;

        }

        alert("🎉 Thanks for subscribing!");

        form.reset();

    });

}

// Navbar Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 8px 20px rgba(0,0,0,.35)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// Fade In Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="all .8s ease";

observer.observe(section);

});

console.log("KickVerse V2 Loaded Successfully!");
