document.addEventListener("DOMContentLoaded", function() {
    // Create a new navbar element at the bottom of the page
    var bottomNavbar = document.createElement('nav');
    bottomNavbar.classList.add('navbar', 'navbar-light', 'bg-light', 'fixed-bottom');

    // Apply custom CSS styles to adjust the navbar height
    bottomNavbar.style.height = '90px'; // Adjust the height as needed

    // Create a container div for navbar contents
    var containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    // Define the content of the navbar
    var navbarContent = `
        <a class="navbar-brand" href="#">Lower Navbar</a>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Hi Hi Hi</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">What up</a>
            </li>
        </ul>
    `;

    // Set the content of the container div with the navbar content
    containerDiv.innerHTML = navbarContent;

    // Append the container div to the navbar
    bottomNavbar.appendChild(containerDiv);

    // Append the bottom navbar to the body of the HTML document
    document.body.appendChild(bottomNavbar);
});