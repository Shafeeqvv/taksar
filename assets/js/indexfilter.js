window.addEventListener('DOMContentLoaded', function() {
        // Get the URL parameters
        const params = new URLSearchParams(window.location.search);
        // Check if the "checked" parameter is present and has the value "motorola"
        if (params.has('checked') && params.get('checked') === 'motorola') {
            // Check the radio button
            document.getElementById('motorola').checked = true;
            document.getElementById('motorolaSection').style.display = 'block';
        }else if(params.has('checked') && params.get('checked') === 'damm') {
            // Check the radio button
            document.getElementById('damm').checked = true;
            document.getElementById('dammSection').style.display = 'block';
        }
    });