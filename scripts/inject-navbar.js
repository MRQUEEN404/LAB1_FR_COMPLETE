document.addEventListener("DOMContentLoaded", function() {
    // Fetch the content of 'index.html'
    fetch('index.html')
        .then(response => response.text()) // Convert response to text
        .then(data => {
            // Create a temporary element to hold the fetched content
            var tempElement = document.createElement('div');
            tempElement.innerHTML = data; // Set fetched content as innerHTML
            
            // Extract the navigation bar from the fetched content
            var navbar = tempElement.querySelector('.navbar');
            
            // Find the placeholder element in the current HTML file
            var placeholder = document.getElementById('nav-placeholder');
            
            // Insert the navigation bar into the placeholder
            if (navbar && placeholder) {
                placeholder.innerHTML = navbar.outerHTML; // Set placeholder's innerHTML as navbar's outerHTML
            }
        })
        .catch(error => console.error('Error fetching index.html:', error)); // Log any errors that occur during fetching
});
