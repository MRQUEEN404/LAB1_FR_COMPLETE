document.addEventListener("DOMContentLoaded", function() {
    // Create a new h1 element
    var heading = document.createElement('h1');
    heading.textContent = 'Interests';

    // Set styles for the heading
    heading.style.textAlign = 'center';
    heading.style.paddingTop = '20px'; // Adjust the spacing as needed

    // Append the heading to the body of the HTML document
    document.body.appendChild(heading);

    // Create an array of paragraph information (text and image URLs)
    var paragraphInfo = [
        {
            text: '"Arcane" is an animated series that delves into the origins of League of Legends champions Jinx and Vi. Set in the contrasting cities of Piltover and Zaun, it explores themes of ambition, betrayal, and power. With stunning animation and compelling storytelling, the series has garnered widespread acclaim.',
            imageUrl: './images/arcane.jpeg',
        },
        {
            text: '"Pedro Páramo" es una novela escrita por Juan Rulfo que explora temas como la soledad, la muerte y la búsqueda de identidad en un pueblo desolado llamado Comala. Es un ejemplo destacado del realismo mágico en la literatura latinoamericana. Publicada en 1955, la obra ha influido en numerosos escritores y movimientos literarios en todo el mundo.',
            imageUrl: '/images/pedromibro.jpg',
        },
        {
            text: '"La Sociedad de la Nieve" es una película basada en la verdadera historia de un equipo de rugby uruguayo atrapado en los Andes tras un accidente aéreo en 1972. La película explora su lucha por sobrevivir en condiciones extremas y destaca la fortaleza del espíritu humano y el compañerismo.',
            imageUrl: '/images/lanieve.jpeg',
        }
    ];

    // Loop through the paragraph information array
    paragraphInfo.forEach(function(info) {
        // Create a new div for each paragraph
        var paragraphDiv = document.createElement('div');
        paragraphDiv.classList.add('paragraph-container');

        // Create a new image element
        var image = document.createElement('img');
        image.src = info.imageUrl;
        image.style.maxWidth = '200px'; // Ensure the image doesn't exceed its container width
        image.style.marginRight = '20px'; // Adjust the spacing between text and image as needed

        // Create a new paragraph element
        var paragraph = document.createElement('p');
        paragraph.textContent = info.text;

        // Set styles for the paragraph container
        paragraphDiv.style.display = 'flex'; // Use flexbox
        paragraphDiv.style.alignItems = 'center'; // Align items vertically

        // Append the image and paragraph to the paragraph container
        paragraphDiv.appendChild(image);
        paragraphDiv.appendChild(paragraph);

        // Append the paragraph container to the body of the HTML document
        document.body.appendChild(paragraphDiv);
    });

    // Add padding to the bottom of the body
    document.body.style.paddingBottom = '95px'; // Adjust the padding as needed
});
