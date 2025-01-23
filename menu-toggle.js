document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");

    // Toggle the sidebar when menu icon is clicked
    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // Close the sidebar when a link is clicked
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navbar.classList.remove("active");
        });
    });
});

document.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    const footerPosition = footer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (footerPosition < screenPosition) {
        footer.classList.add("visible");
    }
});
