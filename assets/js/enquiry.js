var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var modalText = document.getElementById("modalText");
var radios = document.querySelectorAll('input[type="radio"][name="category"]');
var lis = document.querySelectorAll('li');

// Function to show the modal with the specified text
function showModal(text) {
    modalText.textContent = text;
    modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
    modal.style.display = "none";
}

// Add event listeners to all radio buttons
radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (this.checked) {
            var text = "";
            switch(this.id) {
                case "headset":
                case "imns":
                case "backhaul":
                case "lrad":
                case "chargers":
                case "combiners":
                case "maritime":
                case "rescue":
                    text = "For placing orders or inquiries, kindly contact us.";
                    showModal(text);
                    break;
                default:
                    hideModal();
            }
        }
    });
});

// Add event listeners to all <li> elements
lis.forEach(function(li) {
    li.addEventListener('click', function() {
        var text = "";
        switch(li.className) {
            case "itaccessbackhaul":
                text = "For placing orders or inquiries, kindly contact us.";
                showModal(text);
                break;
            case "antennascombiners":
                text = "For placing orders or inquiries, kindly contact us.";
                showModal(text);
                break;
            // Add cases for other li elements if needed
            default:
                hideModal();
        }
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = hideModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}


$(document).ready(function(){
    // Show products related to the clicked list item
    $("#product-list li").click(function(){
      // Hide all product items
      $(".taksarproduct").hide();
      
      // Get the class of the clicked list item
      var productClass = $(this).attr("class");
      
      // Show the product items corresponding to the clicked list item
      $("." + productClass).show();
    });
});


document.addEventListener("DOMContentLoaded", function() {
            console.log("Script loaded and DOM fully loaded");
            const params = new URLSearchParams(window.location.search);
            const productType = params.get('type');
            
            if (productType) {
                console.log("Product type:", productType);
                const products = document.querySelectorAll('.taksarproduct');
                products.forEach(product => {
                    if (product.classList.contains(productType)) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
                
                switch (productType) {
                    case "itaccessbackhaul":
                        showModal("For placing orders or inquiries, kindly contact us.");
                        break;
                    case "antennascombiners":
                        showModal("For placing orders or inquiries, kindly contact us.");
                        break;
                    default:
                        hideModal();
                }
            }
            
            // Modal functions
            function showModal(text) {
                const modal = document.getElementById("myModal");
                const modalText = document.getElementById("modalText");
                const span = document.getElementsByClassName("close")[0];

                modalText.innerText = text;
                modal.style.display = "block";

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }

            function hideModal() {
                const modal = document.getElementById("myModal");
                modal.style.display = "none";
            }
        });

 document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase(); // Get search term
        const products = document.querySelectorAll('.course-title'); // Get all product titles

        products.forEach(product => {
            const title = product.textContent.toLowerCase();
            const productCard = product.closest('.col-lg-4'); // Assuming product cards are wrapped in col-lg-4 elements

            if (title.includes(searchTerm)) {
                productCard.style.display = 'block'; // Show matching products
            } else {
                productCard.style.display = 'none'; // Hide non-matching products
            }
        });
    }

    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
        performSearch(); // Perform the search
    });

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the form from submitting
            performSearch(); // Perform the search
        }
    });
});
