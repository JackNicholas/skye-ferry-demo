// remove styling and link from current page in menu
$(document).ready(function() {
    var bodyID = $("body").attr("id");

    switch(bodyID) {
    case 'home':
      $('#nav-home').addClass("active");
      break;
    case 'fares':
      $('#nav-fares').addClass("active");
      break;
    case 'shop':
      $('#nav-shop').addClass("active");
      break;
    case 'about':
      $('#nav-about').addClass("active");
      break;
    case 'find':
      $('#nav-find').addClass("active");
      break;
    case 'blog':
      $('#nav-blog').addClass("active");
      break;
    case 'wildlife':
      $('#nav-wildlife').addClass("active");
      break;
    case 'gallery':
      $('#nav-gallery').addClass("active");
      break;
    case 'links':
      $('#nav-links').addClass("active");
      break;
    case 'contact':
      $('#nav-contact').addClass("active");
      break;
    }
});
