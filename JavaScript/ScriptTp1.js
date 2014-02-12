// JavaScript source code
function lireUneTouche(event) {
  var dir = document.getElementById("Editeur");	
  dir.innerHTML += String.fromCharCode(event.which);
}
document.addEventListener('keypress', lireUneTouche);

function lireSpecial(event) {
	//BS
	var dir = document.getElementById("Editeur");
	if(event.keyCode == '8' && dir.innerHTML.length >= 1){
		dir.innerHTML = dir.innerHTML.substring(0,dir.innerHTML.length-1);
	}
}
document.addEventListener('keydown',lireSpecial);

function Keywords(){
	return ['break','case','catch','continue','debugger','default','delete','do','else','finally','for','function','if','in','instanceof','new','return','switch','this','throw','try','typeof','var','void','while','with']
}
function isSpace(c) {
   return c == ' '  || c == '\n' || c == '\r' ||
          c == '\f' || c == '\t' || c == '\v';
}