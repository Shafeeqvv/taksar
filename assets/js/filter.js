
    $(document).ready(function(){
        $('input[name="category"]').change(function(){
            if($(this).is(':checked') && $(this).val() === 'motorola') {
                $('#motorolaSection').show();
                $('#dammSection').hide();
                $('#codanSection').hide();
                $('#trbonetSection').hide();
                $('#thurayaSection').hide();
                $('#avigilonSection').hide();
            }
            else if($(this).is(':checked') && $(this).val() === 'damm') {
                $('#dammSection').show();
                $('#codanSection').hide();
                $('#motorolaSection').hide();
                $('#trbonetSection').hide();
                $('#thurayaSection').hide();
                $('#avigilonSection').hide();
            }
            else if($(this).is(':checked') && $(this).val() === 'codan') {
                $('#codanSection').show();
                $('#dammSection').hide();
                $('#motorolaSection').hide();
                $('#trbonetSection').hide();
                $('#thurayaSection').hide();
                $('#avigilonSection').hide();

            }
            else if($(this).is(':checked') && $(this).val() === 'trbonet') {
                $('#trbonetSection').show();
                $('#codanSection').hide();
                $('#dammSection').hide();
                $('#motorolaSection').hide();
                $('#thurayaSection').hide();
                $('#avigilonSection').hide();

            }
            else if($(this).is(':checked') && $(this).val() === 'thuraya') {
                $('#thurayaSection').show();
                $('#trbonetSection').hide();
                $('#codanSection').hide();
                $('#dammSection').hide();
                $('#motorolaSection').hide();
                $('#avigilonSection').hide();
            }
            else if($(this).is(':checked') && $(this).val() === 'avigilon') {
                $('#avigilonSection').show();
                $('#thurayaSection').hide();
                $('#trbonetSection').hide();
                $('#codanSection').hide();
                $('#dammSection').hide();
                $('#motorolaSection').hide();
            }
             else {
                $('#motorolaSection,#dammSection','#codanSection','#trbonetSection','#thurayaSection','#avigilonSection').hide();
            }
        });
    });

