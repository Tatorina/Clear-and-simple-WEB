
function myFunction() {
  var x = document.getElementById("myTopnav");
  
  if (x.className === "menu__list ") {
    x.className += "responsive"
    console.log('hi')
  } else {
    x.className = "menu__list "
    console.log('bye')
  }
  
}
