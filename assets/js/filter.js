
    $(document).ready(function(){
        $('input[name="category"]').change(function(){
            if($(this).is(':checked') && $(this).val() === 'motorola') {
                $('#motorolaSection').show();
                $('#dammSection').hide();
            }
            else if($(this).is(':checked') && $(this).val() === 'damm') {
                $('#dammSection').show();
                $('#motorolaSection').hide();
            }
             else {
                $('#motorolaSection,#dammSection').hide();
            }
        });
    });

