function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdownbutton')) {
        var dropdowns =
document.getElementsByClassName("dropdowncontent");
    var i;
    for (i = 0; i<dropdowns.length; i++) {
        var openDropdown = dropdowns [i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

$("#myselect").on("click", function() {
    if($('.custom-selection.rotate').length > 0){
      $('.custom-selection').removeClass('rotate');
    }
    else{
      $('.custom-selection').addClass('rotate');
    }
  });