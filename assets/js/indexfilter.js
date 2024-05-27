document.addEventListener("DOMContentLoaded", function () {
    // Get the query parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('checked');

    if (brand) {
        // Check the corresponding radio button
        const radioButton = document.getElementById(brand);
        if (radioButton) {
            radioButton.checked = true;
            filterProducts(brand);
        }
    }

    // Function to filter products based on brand
    function filterProducts(brand) {
        const products = document.querySelectorAll('.taksarproduct');
        products.forEach(product => {
            if (product.classList.contains(brand)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Add event listeners to radio buttons for dynamic filtering
    const radioButtons = document.querySelectorAll('input[name="category"]');
    radioButtons.forEach(button => {
        button.addEventListener('change', function () {
            filterProducts(this.value);
        });
    });
});
