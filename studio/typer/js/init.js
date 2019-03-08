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
  $(".inner").last().remove();
  $(".line").last().remove();
  $(".circle").last().remove();
}

var lastX, lastY;

function createElement(k) {
// $("#line").first().css("display","none")
var max = 600;
var max2= 450;
var min = 5;
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
}
  if (k == "b" || k == "B") {
  line.setAttribute("stroke", "#ededed");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">b</span>');
}
  if (k == "c" || k == "C") {
  line.setAttribute("stroke", "#e2e2e2");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">c</span>');
}
  if (k == "d" || k == "D") {
  line.setAttribute("stroke", "#d6d6d6");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">d</span>');
}
  if (k == "e" || k == "E") {
  line.setAttribute("stroke", "#cecece");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">e</span>');
}
  if (k == "f" || k == "F") {
  line.setAttribute("stroke", "#bcbcbc");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">f</span>');
}
  if (k == "g" || k == "G") {
  line.setAttribute("stroke", "#b2b2b2");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">g</span>');
}
  if (k == "h" || k == "H") {
  line.setAttribute("stroke", "#aaaaaa");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">h</span>');
}
  if (k == "i" || k == "I") {
  line.setAttribute("stroke", "#a5a5a5");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">i</span>');
}
  if (k == "j" || k == "J") {
  line.setAttribute("stroke", "#999999");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">j</span>');
}
  if (k == "k" || k == "K") {
  line.setAttribute("stroke", "#8e8e8e");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">k</span>');
}
  if (k == "l" || k == "L") {
  line.setAttribute("stroke", "#828282");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">l</span>');
}
  if (k == "m" || k == "M") {
  line.setAttribute("stroke", "#7a7a7a");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">m</span>');
}
  if (k == "n" || k == "N") {
  line.setAttribute("stroke", "#727272");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">n</span>');
}
  if (k == "o" || k == "O") {
  line.setAttribute("stroke", "#686868");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">o</span>');
}
  if (k == "p" || k == "P") {
  line.setAttribute("stroke", "#636363");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">p</span>');
}
  if (k == "q" || k == "Q") {
  line.setAttribute("stroke", "#5e5e5e");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">q</span>');
}
  if (k == "r" || k == "R") {
  line.setAttribute("stroke", "#515151");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">r</span>');
}
  if (k == "s" || k == "S") {
  line.setAttribute("stroke", "#4c4c4c");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">s</span>');
}
  if (k == "t" || k == "T") {
  line.setAttribute("stroke", "#444444");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">t</span>');
}
  if (k == "u" || k == "U") {
  line.setAttribute("stroke", "#3d3d3d");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">u</span>');
}
  if (k == "v" || k == "V") {
  line.setAttribute("stroke", "#353535");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">v</span>');
}
  if (k == "w" || k == "W") {
  line.setAttribute("stroke", "#303030");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">w</span>');
}
  if (k == "x" || k == "X") {
  line.setAttribute("stroke", "#282828");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">x</span>');
}
  if (k == "y" || k == "Y") {
  line.setAttribute("stroke", "#212121");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">y</span>');
}
  if (k == "z" || k == "Z") {
  line.setAttribute("stroke", "#000000");
  document.querySelector("#circles").appendChild(circ);
  document.querySelector("#lines").appendChild(line);
  console.log(lastX, lastY);
  elem.before('<span class="inner">z</span>');
}
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
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("lines");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}



