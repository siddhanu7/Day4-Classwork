//Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.


var para = document.createElement("p");
var node = document.createTextNode("Hey I\'m red!");
para.appendChild(node);
para.style.color = "red";
var element = document.getElementById("container");
element.appendChild(para);



var h3element = document.createElement("h3");
var node1 = document.createTextNode("Hey I\'m blue H3!");
h3element.appendChild(node1);
h3element.style.color = "blue";
element.appendChild(h3element);



var mydiv = document.createElement("div");
mydiv.style.border = "thick solid #000000";
mydiv.style.backgroundColor= "pink";

var myh1 = document.createElement("h1");
var text2 = document.createTextNode("I\'m in a div");

myh1.appendChild(text2);

mydiv.appendChild(myh1);
document.body.appendChild(mydiv);

var p3= document.createElement("p");
var text3 = document.createTextNode("ME TOO!");
mydiv.appendChild(text3);

