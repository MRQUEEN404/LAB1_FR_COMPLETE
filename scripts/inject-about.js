document.addEventListener("DOMContentLoaded", function() {
    // Create an h1 element for the heading
    var heading = document.createElement('h1');
    heading.textContent = 'About Me';

    // Create an image element
    var image = document.createElement('img');
    image.src = './images/myself.jpg'; // Set image source
    image.alt = 'Francisco Reina'; // Set image alt attribute
    image.style.maxWidth = '200px'; // Apply max width to the image

    // Create a paragraph element
    var paragraph = document.createElement('p');
    paragraph.textContent = "Hello there! I'm Francisco Reina, a proud Latino hailing from the beautiful coastal city of Cartagena, Colombia. I'm fortunate to have a wonderful family and two adorable feline companions named Astro and Motitas who bring endless joy to my life. Currently, I'm immersing myself in the world of programming, eager to unlock its endless possibilities and create innovative solutions. When I'm not coding, you can often find me diving into the captivating worlds of indie video games, where creativity knows no bounds. I have a deep appreciation for physical activity, whether it's engaging in various sports or simply going for a spontaneous run at any given moment. And let's not forget my culinary indulgence – there's nothing quite like the fusion of flavors in a delicious fish and pasta dish. Ultimately, my dream is to establish an indie game development studio that crafts games with the same passion and dedication as beloved titles like Cuphead.";

    // Create a container div for the content
    var contentContainer = document.createElement('div');

    // Append the heading, image, and paragraph to the container
    contentContainer.appendChild(heading);
    contentContainer.appendChild(image);
    contentContainer.appendChild(paragraph);

    // Append the content container to the body of the HTML document
    document.body.appendChild(contentContainer);
});
