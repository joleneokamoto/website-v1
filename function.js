// function for homepage letter
var i = 0;
var lines = "dear world, hello. from, jolene okamoto computer science and design northeastern university '22";
var speed = 100;
function type() {
  if (i < 11) { // dear world, 
    document.getElementById("letter").innerHTML += lines.charAt(i);
    i++;
    setTimeout(type, speed);
  }
  else if (i == 11) { // double break
    document.getElementById("letter").innerHTML += "<br /><br />";
    i++;
    setTimeout(type, speed);
  }
  else if (i < 18) { // hello.
    document.getElementById("letter").innerHTML += lines.charAt(i);
    i++;
    setTimeout(type, speed);
  }
  else if (i == 18) { // double break
    document.getElementById("letter").innerHTML += "<br /><br />";
    i++;
    setTimeout(type, speed);
  }
  else if (i < 24) { // from, 
    document.getElementById("letter").innerHTML += lines.charAt(i).bold();
    i++;
    setTimeout(type, speed);
  }
  else if (i == 24) { // break
    document.getElementById("letter").innerHTML += "<br />";
    i++;
    setTimeout(type, speed);
  }
  else if (i < 39) { // jolene okamoto
    document.getElementById("letter").innerHTML += lines.charAt(i).bold();
    i++;
    setTimeout(type, speed);
  }
  else if (i == 39) { // break
    document.getElementById("letter").innerHTML += "<br />";
    i++;
    setTimeout(type, speed);
  }
  else if (i < 66) { // computer science and design
    document.getElementById("letter").innerHTML += lines.charAt(i);
    i++;
    setTimeout(type, speed);
  }
  else if (i == 67) { // break
    document.getElementById("letter").innerHTML += "<br />";
    i++;
    setTimeout(type, speed);
  }
  else if (i < lines.length) { // northeastern university '22
    document.getElementById("letter").innerHTML += lines.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();

// pop-up for unfinished pages
function popup() {
  alert("coming soon!");
}