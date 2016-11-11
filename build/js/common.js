$(document).ready(function() {

   // scroll next section

   (function () {
      var scrollBtn = $('.js-scroll')
      scrollBtn.on('click', function () {
   			var scrollDistance = $(this).closest('section').next('section').offset().top;
   			$("html, body").animate({scrollTop: scrollDistance}, 1000);
   		});
   })();


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
