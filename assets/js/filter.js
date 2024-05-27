document.addEventListener('DOMContentLoaded', function() {
            const radios = document.querySelectorAll('input[name="category"]');
            const products = document.querySelectorAll('.taksarproduct');

            radios.forEach(radio => {
                radio.addEventListener('change', function() {
                    const category = this.value;

                    products.forEach(product => {
                        if (product.classList.contains(category)) {
                            product.style.display = 'block';
                        } else {
                            product.style.display = 'none';
                        }
                    });
                });
            });
        });