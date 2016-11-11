$(document).ready(function() {

   // area slider

    (function() {
        var sldArea = $('.js-area'),
            sldOutput = $('.js-area-output');

        sldArea.slider({
            range: "min",
            value: 42,
            min: 1,
            max: 100,
            slide: function(event, ui) {
                sldOutput.val(ui.value);
            }
        });
        sldOutput.val(sldArea.slider("value"));
    })();

});
