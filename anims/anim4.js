var i;

var agt = navigator.userAgent.toLowerCase();
if (agt.indexOf("mac") != -1) {
  var a = "\r";
} else {
  var a = "\n";
}
var max = 0;
function tlist() {
  max = tlist.arguments.length;
  for (i = 0; i < max; i++) this[i] = tlist.arguments[i];
}

var tl = new tlist(
  ` 
      __
     (__)
     |__| 
     |__| 
     |__| 
     |__| 
     |__| 
     |__| 
 /‾‾‾\\  /‾‾‾\\
 |   |  |   | 
 \\___/  \\___/
`
);

var x = 0;
function tick() {
  document.getElementById("anim1").innerHTML = tl[x];
  document.getElementById("f").innerHTML = x;
  x++;
  if (x == max) {
    x = 0;
    //setTimeout("tick()", 2000);
    //return;
  }
  setTimeout("tick()", 500);
}
