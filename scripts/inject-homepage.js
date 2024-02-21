document.addEventListener("DOMContentLoaded", function() {
    // Create a new h1 element
    var heading = document.createElement('h1');
    heading.textContent = 'Welcome to the homepage';

    // Set styles for the heading
    heading.style.textAlign = 'center'; // Center align the text
    heading.style.paddingTop = '100px'; // Add padding to the top
    heading.style.fontSize = '4em'; // Set the font size

    // Create a new div for the background image
    var backgroundDiv = document.createElement('div');

    // Set styles for the background image
    backgroundDiv.style.backgroundImage = 'url("./images/hollow.png")'; // Set background image
    backgroundDiv.style.backgroundSize = 'cover'; // Set background size to cover
    backgroundDiv.style.backgroundPosition = 'center'; // Set background position to center
    backgroundDiv.style.height = '100vh'; // Set the height to 100% of the viewport height

    // Append the heading to the background div
    backgroundDiv.appendChild(heading);

    // Append the background div to the body of the HTML document
    document.body.appendChild(backgroundDiv);
});
