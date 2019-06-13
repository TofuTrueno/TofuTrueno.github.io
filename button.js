<!-- Adding jquery -->   
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<script>
$(document).ready(function() {
  $("#cf7_controls").on('click', 'span', function() {
    $("#cf7 img").removeClass("opaque");
    var newImage = $(this).index();
    $("#cf7 img").eq(newImage).addClass("opaque");
    $("#cf7_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});
  
  </script>
