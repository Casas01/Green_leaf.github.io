var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/tree.jpg') {
		myImage.setAttribute ('src','images/franklin_trees.jpg');
	} else { 
	  myImage.setAttribute ('src','images/tree.jpg');
	}
}

// Hello! Have a wonderful day!


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'What a lovely day, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'What a lovely day, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}