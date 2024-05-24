
    $(document).ready(function(){
        $('input[name="category"]').change(function(){
            if($(this).is(':checked') && $(this).val() === 'motorola') {
                $('#motorolaSection').show();
                $('#dammSection').hide();
                $('#codanSection').hide();

            }
            else if($(this).is(':checked') && $(this).val() === 'damm') {
                $('#dammSection').show();
                $('#codanSection').hide();
                $('#motorolaSection').hide();
            }
            else if($(this).is(':checked') && $(this).val() === 'codan') {
                $('#codanSection').show();
                $('#dammSection').hide();
                $('#motorolaSection').hide();
            }
             else {
                $('#motorolaSection,#dammSection').hide();
            }
        });
    });

