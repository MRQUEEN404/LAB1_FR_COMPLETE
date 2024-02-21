document.addEventListener("DOMContentLoaded", function() {
    // Listen for form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Retrieve form data
        var name = document.getElementById("name").value;
        var contactNumber = document.getElementById("contact-number").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        
        // Output user information to the console
        console.log("Name:", name);
        console.log("Contact Number:", contactNumber);
        console.log("Email Address:", email);
        console.log("Message:", message);
        
        // Redirect to "index.html" after 3 seconds
        setTimeout(function() {
            window.location.href = "index.html";
        }, 3000);
    });
});
