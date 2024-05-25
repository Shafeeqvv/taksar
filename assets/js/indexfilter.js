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
        else if(params.has('checked') && params.get('checked') === 'codan') {
            // Check the radio button
            document.getElementById('codan').checked = true;
            document.getElementById('codanSection').style.display = 'block';
        }
        else if(params.has('checked') && params.get('checked') === 'trbonet') {
            // Check the radio button
            document.getElementById('trbonet').checked = true;
            document.getElementById('trbonetSection').style.display = 'block';
        }
        else if(params.has('checked') && params.get('checked') === 'thuraya') {
            // Check the radio button
            document.getElementById('thuraya').checked = true;
            document.getElementById('thurayaSection').style.display = 'block';
        }
        else if(params.has('checked') && params.get('checked') === 'avigilon') {
            // Check the radio button
            document.getElementById('avigilon').checked = true;
            document.getElementById('avigilonSection').style.display = 'block';
        }
    });