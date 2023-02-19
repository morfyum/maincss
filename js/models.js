// FONTOS! Külön <script> tagek között hívd meg a fájt és ezt a scripte.
// Ugyan abban nem fog működni...

function test01() {
    alert("JS MODELS IS WORK :) ");
}


// SLIDESHOW
// Meghívás a functiont: "carousel();" és opcionálisan a változót előtte: "var slideIndex = 0;"
var slideIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("image-slide");
  for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}    
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); //1(000=1sec) Change image every 2 seconds
}

