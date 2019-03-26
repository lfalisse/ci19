$(document).ready(function() {

var entryCount = 0;
var displayCount = 0;

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);

    createElement(char);
  });


  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;

displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " +displayCount);
      deleteElement();
    }
  });

function deleteElement() {
  $(".dots").last().remove();
}
var min=1; 
var max=70; 
var mins=7; 
var maxs=17; 

var lastX, lastY;


function createElement(k) {  

    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopa= randomt;
    var newlefta = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
    if (k == "a" || k == "A") { 
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", newlefta);
        line.setAttribute("y1", newtopa);
        line.setAttribute("x2", lastX);
        line.setAttribute("y2", lastY);
        line.setAttribute("stroke", "white");
        document.querySelector("svg").appendChild(line);
        lastX = newlefta;
        lastY = newtopa;
        $(".aclass").append('<div class="a" style="top:'+newtopa+'px;left:'+newlefta+'px;width:'+randoms+'px;height:'+randoms+'px"></div>');
        console.log(lastX, lastY)
    }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopb= randomt;
    var newleftb = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "b" || k == "B") { 
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", newleftb);
        line.setAttribute("y1", newtopb);
        line.setAttribute("x2", lastX);
        line.setAttribute("y2", lastY);
        line.setAttribute("stroke", "white");
        document.querySelector("svg").appendChild(line);
        lastX = newlefta;
        lastY = newtopa;
        $(".bclass").append('<div class="b" style="top:'+newtopb+'px;left:'+newleftb+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); 
    }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopc= randomt;
    var newleftc = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "c" || k == "C") { 
        $(".cclass").append('<div class="c" style="top:'+newtopc+'px;left:'+newleftc+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopd= randomt;
    var newleftd = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "d" || k == "D") { 
        $(".dclass").append('<div class="d" style="top:'+newtopd+'px;left:'+newleftd+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtope= randomt;
    var newlefte = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "e" || k == "E") { 
        $(".eclass").append('<div class="e" style="top:'+newtope+'px;left:'+newlefte+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopf= randomt;
    var newleftf = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "f" || k == "F") { 
        $(".fclass").append('<div class="f" style="top:'+newtopf+'px;left:'+newleftf+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopg= randomt;
    var newleftg = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "g" || k == "G") { 
        $(".gclass").append('<div class="g" style="top:'+newtopg+'px;left:'+newleftg+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtoph= randomt;
    var newlefth = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "h" || k == "H") { 
        $(".hclass").append('<div class="h" style="top:'+newtoph+'px;left:'+newlefth+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopi= randomt;
    var newlefti = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "i" || k == "I") { 
        $(".iclass").append('<div class="i" style="top:'+newtopi+'px;left:'+newlefti+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopj= randomt;
    var newleftj = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "j" || k == "J") { 
        $(".jclass").append('<div class="j" style="top:'+newtopj+'px;left:'+newleftj+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopk= randomt;
    var newleftk = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "k" || k == "K") { 
        $(".kclass").append('<div class="k" style="top:'+newtopk+'px;left:'+newleftk+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopl= randomt;
    var newleftl = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "l" || k == "L") { 
        $(".lclass").append('<div class="l" style="top:'+newtopl+'px;left:'+newleftl+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopm= randomt;
    var newleftm = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "m" || k == "M") { 
        $(".mclass").append('<div class="m" style="top:'+newtopm+'px;left:'+newleftm+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopn= randomt;
    var newleftn = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "n" || k == "N") { 
        $(".nclass").append('<div class="n" style="top:'+newtopn+'px;left:'+newleftn+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
    var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopo= randomt;
    var newlefto = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "o" || k == "O") { 
        $(".oclass").append('<div class="o" style="top:'+newtopo+'px;left:'+newlefto+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); } 
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopp= randomt;
    var newleftp = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "p" || k == "P") { 
        $(".pclass").append('<div class="p" style="top:'+newtopp+'px;left:'+newleftp+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopq= randomt;
    var newleftq = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "q" || k == "Q") { 
        $(".qclass").append('<div class="q" style="top:'+newtopq+'px;left:'+newleftq+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopr= randomt;
    var newleftr = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "r" || k == "R") { 
        $(".rclass").append('<div class="r" style="top:'+newtopr+'px;left:'+newleftr+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtops= randomt;
    var newlefts = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "s" || k == "S") { 
        $(".sclass").append('<div class="s" style="top:'+newtops+'px;left:'+newlefts+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopt= randomt;
    var newleftt = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "t" || k == "T") { 
        $(".tclass").append('<div class="t" style="top:'+newtopt+'px;left:'+newleftt+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopu= randomt;
    var newleftu = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "u" || k == "U") { 
        $(".uclass").append('<div class="u" style="top:'+newtopu+'px;left:'+newleftu+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopv= randomt;
    var newleftv = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "v" || k == "V") { 
        $(".vclass").append('<div class="v" style="top:'+newtopv+'px;left:'+newleftv+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopw= randomt;
    var newleftw = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "w" || k == "W") { 
        $(".wclass").append('<div class="w" style="top:'+newtopw+'px;left:'+newleftw+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopx= randomt;
    var newleftx = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "x" || k == "X") { 
        $(".xclass").append('<div class="x" style="top:'+newtopx+'px;left:'+newleftx+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopy= randomt;
    var newlefty = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "y" || k == "Y") { 
        $(".yclass").append('<div class="y" style="top:'+newtopy+'px;left:'+newlefty+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  var randomt = Math.floor(Math.random() * (+max - +min) + +min);
    var randoml = Math.floor(Math.random() * (+max - +min) + +min);
    var newtopz= randomt;
    var newleftz = randoml;
    var randoms = Math.floor(Math.random() * (+maxs - +mins) + +mins);
  if (k == "z" || k == "Z") { 
        $(".zclass").append('<div class="z" style="top:'+newtopz+'px;left:'+newleftz+'px;width:'+randoms+'px;height:'+randoms+'px"></div>'); }
  if (k == "1") { elem.before('<span class="inner">1</span>'); }
  if (k == "2") { elem.before('<span class="inner">2</span>'); }
  if (k == "3") { elem.before('<span class="inner">3</span>'); }
  if (k == "4") { elem.before('<span class="inner">4</span>'); }
  if (k == "5") { elem.before('<span class="inner">5</span>'); }
  if (k == "6") { elem.before('<span class="inner">6</span>'); }
  if (k == "7") { elem.before('<span class="inner">7</span>'); }
  if (k == "8") { elem.before('<span class="inner">8</span>'); }
  if (k == "9") { elem.before('<span class="inner">9</span>'); }
  if (k == "0") { elem.before('<span class="inner">0</span>'); }
  if (k == "!") { elem.before('<span class="inner">!</span>'); }
  if (k == "?") { elem.before('<span class="inner">?</span>'); }
  if (k == ".") { elem.before('<span class="inner">.</span>'); }
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }
}
})