$(document).ready(function () {
    var inputsWrapper = $("#inputsWrapper"); //Input boxes wrapper ID
    var addButton = $("#addMoreFileBox"); //Add button ID

    var x = inputsWrapper.length; //initlal text box count
    var FieldCount = 1; //to keep track of text box added

//on add input button click
    $(addButton).click(function (e) {
        //max input box allowed
        FieldCount++; //text box added increment
        //add input box
//        $(inputsWrapper).append('<div><input type="text" value="" path="innerEntitySet[' + FieldCount + '].value" id="field_' + FieldCount + '"/> <a href="#" class="removeclass">Remove</a></div>');
        x++; //text box increment

        $("#addMoreFileId").show();

        $('addMoreFileBox').html("Add field");
        return false;
    });

    $("body").on("click", ".removeclass", function (e) { //user click on remove text
        if (x > 1) {
            $(this).parent('div').remove(); //remove text box
            x--; //decrement textbox

            $("#addMoreFileId").show();

            $("#lineBreak").html("");

            // Adds the "add" link again when a field is removed.
            $('addMoreFileBox').html("Add field");
        }
        return false;
    });

});
