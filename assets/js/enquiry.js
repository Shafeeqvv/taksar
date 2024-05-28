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
