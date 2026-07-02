// Select the contact form
const contactForm = document.querySelector(".contact-form");

// Check if the contact form exists
if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent page refresh
        event.preventDefault();

        // Show success message
        alert("Thank you! Your message has been sent successfully.");

        // Clear the form
        contactForm.reset();

    });

}