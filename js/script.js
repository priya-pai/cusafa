// $(document).ready(function () {
// 	$(window).scroll(function () {
// 		// $(".navbar-light").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
// 		document.getElementById("logo").width = "20";
// 	});
// });

addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

window.onscroll = function() {scrollFunction()};

// shrink/expand navbar on scroll
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = '25%';
    // document.getElementByClassName("navbar-light").style.backgroundColor = "purple";
  } else {
    document.getElementById("logo").style.width = '40%';
  }
}