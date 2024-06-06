window.onload = function() {
    const hamburgerButton = document.querySelector(".navbar_hamburger-button button"
    );

hamburgerButton.addEventListener("click", function() {
    const navbarMobile = document.querySelector(".navbar-mobile");
    navbarMobile.classList.toggle("open");
 });
};