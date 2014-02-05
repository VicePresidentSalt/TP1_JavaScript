// JavaScript source code
function lireUneTouche(event) {
  var dir = document.getElementById("Editeur");	
  dir.innerHTML += String.fromCharCode(event.which);
}
document.addEventListener('keypress', lireUneTouche);

function lireUnbackspace(event) {
	var dir = document.getElementById("Editeur");
	if(event.keyCode == '8' && dir.innerHTML.length >= 1){
		dir.innerHTML.substring(0,dir.innerHTML.length-1);
	}
}
document.addEventListener('keydown',lireUnbackspace);
