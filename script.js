// ==========================================
// Search Bar Functionality
// ==========================================

const searchInput = document.querySelector(".search-input");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        console.log("Searching:", searchInput.value);
    });
}


// ==========================================
// Smooth Scroll - Back To Top
// ==========================================

const backToTop = document.querySelector(".foot-panel1");

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ==========================================
// Hero Section Image Slider
// ==========================================

const heroSection = document.querySelector(".hero-section");

const heroImages = [
    "heropageimage.png",
    "hero2.png",
    "hero3.png"
];

let currentImage = 0;

// if (heroSection) {
//     setInterval(() => {

//         currentImage++;

//         if (currentImage >= heroImages.length) {
//             currentImage = 0;
//         }

//         heroSection.style.backgroundImage =
//             `url('${heroImages[currentImage]}')`;

//     }, 300000);
// }


// ==========================================
// Product Box Hover Effect (Console Output)
// ==========================================

const productBoxes = document.querySelectorAll(".box");

productBoxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {
        console.log("Hovering on:", box.innerText);
    });

});


// ==========================================
// Cart Click Functionality
// ==========================================

const cart = document.querySelector(".nav-cart");

if (cart) {
    cart.addEventListener("click", () => {
        alert("Cart is opened.");
    });
}


// ==========================================
// Sign In Section Click
// ==========================================

const signIn = document.querySelector(".nav-signin");

if (signIn) {
    signIn.addEventListener("click", () => {
        alert("Sign In page is coming soon.");
    });
}


// ==========================================
// Returns & Orders Click
// ==========================================

const returns = document.querySelector(".nav-return");

if (returns) {
    returns.addEventListener("click", () => {
        alert("Orders page is coming soon.");
    });
}


// ==========================================
// Search Icon Click Event
// ==========================================

const searchButton = document.querySelector(".search-icon");

if (searchButton && searchInput) {

    searchButton.addEventListener("click", () => {

        const value = searchInput.value.trim();

        if (value === "") {
            alert("Please enter something to search.");
        } else {
            alert(`Searching for: ${value}`);
        }

    });

}


// ==========================================
// Welcome Message
// ==========================================

window.addEventListener("load", () => {
    console.log("Welcome to Shop With Pratham.");
});