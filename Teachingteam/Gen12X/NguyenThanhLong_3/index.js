//slideShow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "flex";
  setTimeout(carousel, 2500); // Change image every 2 seconds
}


//slideContent
var slideIndex1 = 1;
showDivs(slideIndex1);

function plusDivs(n) {
  showDivs(slideIndex1 += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("content");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex1-1].style.display = "flex";
}