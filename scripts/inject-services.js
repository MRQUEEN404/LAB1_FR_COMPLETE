document.addEventListener("DOMContentLoaded", function() {
    // Create an h1 element for the heading
    var heading = document.createElement('h1');
    heading.textContent = 'Services';

    // Create an array of service descriptions
    var services = [
        "Database Management Services: Simplify data management with our expert solutions. We handle database design, optimization, and security so you can focus on leveraging data insights for business growth.",
        "Web Design & Development: Boost your online presence with our tailored web design services. We create visually appealing, user-friendly websites that drive conversions and reflect your brand identity.",
        "Object-Oriented Programming (OOP) Solutions: Enhance software development with our OOP expertise. Our team builds scalable, maintainable systems for desktop and mobile applications, helping you stay competitive in the market."
    ];

    // Create a container div for the services
    var servicesContainer = document.createElement('div');

    // Add the h1 heading to the container
    servicesContainer.appendChild(heading);

    // Loop through the services array and create paragraphs for each service
    services.forEach(function(service) {
        var serviceParagraph = document.createElement('p');
        serviceParagraph.textContent = service;
        servicesContainer.appendChild(serviceParagraph);
    });

    // Create a hyperlink at the end
    var link = document.createElement('a');
    link.textContent = 'Resume';
    link.href = 'https://ca.linkedin.com/in/francisco-reina-70bb25293'; // Replace with your contact page URL
    link.style.display = 'block'; // Display the link as a block element
    link.style.marginTop = '20px'; // Add some space between the paragraphs and the link

    // Append the link to the services container
    servicesContainer.appendChild(link);

    // Append the services container to the body of the HTML document
    document.body.appendChild(servicesContainer);
});
