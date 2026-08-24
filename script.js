// ===============================
// MOBILE MENU
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuButton.textContent = "✕";
            } else {
                menuButton.textContent = "☰";
            }

        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuButton.textContent = "☰";

            });

        });

    }


    // ===============================
    // CONTACT FORM
    // ===============================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function () {

            const button = contactForm.querySelector("button");

            if (button) {
                button.textContent = "Sending...";
                button.disabled = true;
            }

        });

    }

});