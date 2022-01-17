
function myFunction() {
  var x = document.getElementById("myTopnav");
  
  if (x.className === "menu__list ") {
    x.className += "responsive"
  
  } else {
    x.className = "menu__list "
  
  }
  
}
