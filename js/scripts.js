/*console.log("Welcome to my portfolio :)")*/

function menuToggle() {
  var x = documentElementById("myNavtoggle");
  if (x.className === 'navtoggle') {
    x.className += 'responsive';
  } else {
    x.className = 'navtoggle';
  }
}
