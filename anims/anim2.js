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
 o  
/|\\ 
/ \\`,

  `
 \\o/ 
  |  
 / \\`,

  `
  _ o  
   /\\  
  | \\`,

  `
       
   ___\\o 
   /) | `,

  `
    __|   
      \\o  
      (\\`,

  `
     \\ / 
      |  
     /o\\`,

  `
         |__ 
       o/    
       /)  `,

  `
             
       o/__  
       |  (\\`,

  `
        o _ 
        /\\  
         /|`,

  `
        \\o/ 
         |  
        / \\`
);

var x = 0;
function tick() {
  document.getElementById("anim1").innerHTML = tl[x];
  x++;
  if (x == max) {
    x = 0;
    setTimeout("tick()", 1000);
    return;
  }
  setTimeout("tick()", 100);
}
