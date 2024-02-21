document.addEventListener("DOMContentLoaded", function() {
    // Find the <a> element with the text "Products"
    var productsLink = document.querySelector('a[href="products.html"]');

    // If the products link exists
    if (productsLink) {
        // Change the text from "Products" to "Interests"
        productsLink.textContent = "Interests";
    }
});
