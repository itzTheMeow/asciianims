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
  `                                                              HEEEEEEELP!
                                                             /
                                                !!         O
                                              \\O/  O  O    #==\\
                                             __#___<__<____|_  \\
                                         _  (   :      :   ) <\\
                                       //~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~|
                                      '(|                                 |
                                      |(|∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞|
                                      ()|         Meow Animations         |
                                     .|(|         ASCCI Animation         |
                                      |(|           Since 2019            |
                                     \`()|∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞|
                                     ,)(|            Discord:             |
                                ~   _ |)|   MeowMeowCatPersonThing#8103   |
                                     .()|∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞|
                              ~- .\`  \\|(|                                 |
                                -~.-\\|X%|                                 |
*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~\"*'                                 |`,

  `                                                              HEEEEEEELP!
                                                             /
                                                !!         O
                                              \\O/  O  O    #==\\
                                             __#___<__<____|_  \\
                                         _  (   :   \  \ :   ) <\\
                                       //*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*|
                                      '(|                                 |
                                      )||∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞|
                                      |(|         Meow Animations         |
                                     ,()|         ASCCI Animation         |
                                   .  [||           Since 2019            |
                                     \`)(|∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞|
                                     ,|||            Discord:             |
                                *   _ ((|   MeowMeowCatPersonThing#8103   |
                                     .\\}|∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞|
                              ~- .\`  |\\(|                                 |
                                -~.-|\\Z$|                                 |
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*\'~"                                 |
`
);

var x = 0;
function tick() {
  document.getElementById("anim1").innerHTML = tl[x];
  x++;
  if (x == max) x = 0;
  setTimeout("tick()", 100);
}
