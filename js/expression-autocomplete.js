$(function(){

    if (localStorage) {

        var expressionHistory = Object.keys(localStorage);
        // setup autocomplete function pulling from expressionHistory[] array
        $('#autocomplete').autocomplete({
            lookup: expressionHistory,
            onSelect: function (suggestion) {
                //var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
                //$('#outputcontent').html(thehtml);
            }
        });
    }
});