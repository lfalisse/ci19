$(document).ready(function() {

// titleMarquee();
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
  $(".inner").last().remove();
  $(".line").last().remove();
  $(".circle").last().remove();
}

var lastX, lastY;

function createElement(k) {
// $("#line").first().css("display","none")
var max = 1271;
var max2= 690;
var min = 0;
var max1= 8;
var min1= 2;

var randt = Math.floor(Math.random() * (+max - +min) + +min);
var randl = Math.floor(Math.random() * (+max2 - +min) + +min);
var size= (Math.random() * (+max1 - +min1) + +min1);
var elem = $('#cursor');
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
line.setAttribute("x1", randt);
line.setAttribute("y1", randl);
line.setAttribute("x2", lastX);
line.setAttribute("y2", lastY);
circ.setAttribute('cx', randt);
circ.setAttribute('cy', randl);
circ.setAttribute('r', size);
line.setAttribute("class", "line");
line.setAttribute("stroke-width", ".5%")
circ.setAttribute("class", "circle");
circ.setAttribute("fill", "white");
// line.addClass("line");
lastX = randt;
lastY = randl;
  

  if (k == "a" || k == "A") {
  line.setAttribute("stroke", "#ffffff");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">a</span>');
  $('title').html('A');
}
  if (k == "b" || k == "B") {
  line.setAttribute("stroke", "#ededed");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">b</span>');
  $('title').html('B');
}
  if (k == "c" || k == "C") {
  line.setAttribute("stroke", "#e2e2e2");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">c</span>');
  $('title').html('C');
}
  if (k == "d" || k == "D") {
  line.setAttribute("stroke", "#d6d6d6");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">d</span>');
  $('title').html('D');
}
  if (k == "e" || k == "E") {
  line.setAttribute("stroke", "#cecece");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">e</span>');
  $('title').html('E');
}
  if (k == "f" || k == "F") {
  line.setAttribute("stroke", "#bcbcbc");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">f</span>');
  $('title').html('F');
}
  if (k == "g" || k == "G") {
  line.setAttribute("stroke", "#b2b2b2");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">g</span>');
  $('title').html('G');
}
  if (k == "h" || k == "H") {
  line.setAttribute("stroke", "#aaaaaa");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">h</span>');
  $('title').html('H');
}
  if (k == "i" || k == "I") {
  line.setAttribute("stroke", "#a5a5a5");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">i</span>');
  $('title').html('I');
}
  if (k == "j" || k == "J") {
  line.setAttribute("stroke", "#999999");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">j</span>');
  $('title').html('J');
}
  if (k == "k" || k == "K") {
  line.setAttribute("stroke", "#8e8e8e");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">k</span>');
  $('title').html('K');
}
  if (k == "l" || k == "L") {
  line.setAttribute("stroke", "#828282");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">l</span>');
  $('title').html('L');
}
  if (k == "m" || k == "M") {
  line.setAttribute("stroke", "#7a7a7a");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">m</span>');
  $('title').html('M');
}
  if (k == "n" || k == "N") {
  line.setAttribute("stroke", "#727272");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">n</span>');
  $('title').html('N');
}
  if (k == "o" || k == "O") {
  line.setAttribute("stroke", "#686868");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">o</span>');
  $('title').html('O');
}
  if (k == "p" || k == "P") {
  line.setAttribute("stroke", "#636363");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">p</span>');
  $('title').html('P');
}
  if (k == "q" || k == "Q") {
  line.setAttribute("stroke", "#5e5e5e");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">q</span>');
  $('title').html('Q');
}
  if (k == "r" || k == "R") {
  line.setAttribute("stroke", "#515151");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">r</span>');
  $('title').html('R');
}
  if (k == "s" || k == "S") {
  line.setAttribute("stroke", "#4c4c4c");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">s</span>');
  $('title').html('S');
}
  if (k == "t" || k == "T") {
  line.setAttribute("stroke", "#444444");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">t</span>');
  $('title').html('T');
}
  if (k == "u" || k == "U") {
  line.setAttribute("stroke", "#3d3d3d");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">u</span>');
  $('title').html('U');
}
  if (k == "v" || k == "V") {
  line.setAttribute("stroke", "#353535");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">v</span>');
  $('title').html('V');
}
  if (k == "w" || k == "W") {
  line.setAttribute("stroke", "#303030");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">w</span>');
  $('title').html('W');
}
  if (k == "x" || k == "X") {
  line.setAttribute("stroke", "#282828");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">x</span>');
  $('title').html('X');
}
  if (k == "y" || k == "Y") {
  line.setAttribute("stroke", "#212121");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">y</span>');
  $('title').html('Y');
}
  if (k == "z" || k == "Z") {
  line.setAttribute("stroke", "#000000");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">z</span>');
  $('title').html('Z');
}
$(document).keypress(function(e) {
  var text = document.getElementById("lines");
    if(e.which == 32) {
        if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    
    // text.toggle();
    // text.style.display = "block";
    }
});
//   if (e.keyCode === 13) {

// }
if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }
  if (k == "1") {
  elem.before('<span class="inner">1</span>');
  }
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
  if (k == ",") { elem.before('<span class="inner">,</span>'); }
  
}
})
var titleText = document.title;
function titleMarquee() {
 titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
 document.title = titleText;
 setTimeout("titleMarquee()", 450);
 }
// function myFunction() {
//   // Get the checkbox
//   var checkBox = document.getElementById("myCheck");
//   // Get the output text
  

//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == true){
    
//   } else {
//     text.style.display = "none";
//   }
// }



