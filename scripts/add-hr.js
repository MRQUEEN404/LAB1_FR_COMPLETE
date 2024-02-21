document.addEventListener("DOMContentLoaded", function() {
    // Create a new link for "Human Resources"
    var newNavLink = document.createElement('a');
    newNavLink.classList.add('dropdown-item'); // Add class 'dropdown-item'
    newNavLink.setAttribute('href', 'human-resources.html'); // Set the href attribute
    newNavLink.textContent = 'Human Resources'; // Set link text

    // Find the existing "About" link in the dropdown-menu
    var aboutLink = document.querySelector('.navbar .dropdown-menu .dropdown-item[href="about.html"]');
    if (aboutLink) {
        // Insert the new "Human Resources" link after the "About" link
        aboutLink.parentNode.insertBefore(newNavLink, aboutLink.nextSibling);
    }
});


