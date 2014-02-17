// JavaScript source code
function keyWord() {
   return [ "break", "case", "catch", "continue", "debugger", "default", "delete", "do", 
   "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", 
   "this", "throw", "try", "typeof", "var", "void", "while", "with" ];
}
function formaterTexte() {
   var zone = document.getElementById("zoneCode");
   zone.innerHTML = formater(zone.innerText);
}

function subStr(s,début,fin) { // suppose début et fin Ok
   var résultat = "";
   for(; début != fin; ++début) {
      résultat += s[début];
   }
   return résultat;
}

function trouverDans(val,tab) {
   for(var i = 0; i != tab.length; ++i) {
      if (val == tab[i]) {
         return i;
      }
   }
return tab.length;


function formater(s) {
   var mots = keyWord();
   var résultat = "";
   var pos = 0;
   while (pos != s.length) {
      // consommer blancs au début
      var prochain = trouverSi(s,pos,négation(isSpace));
      résultat += subStr(s,pos,prochain);
      pos = prochain;
      // consommer mot
      if (pos != s.length) {
         prochain = trouverSi(s,pos,isSpace);
         //résultat += "<u>" + s[pos] + "</u>";
         //résultat += subStr(s,pos+1,prochain);
         var mot = subStr(s,pos,prochain);
         if (trouverDans(mot,mots) != mots.length) {
            résultat += "<strong>" + mot + "</strong>";
         } else {
            résultat += mot;
         }
         pos = prochain;
      }
      }
   }
   return résultat;
}

function isSpace(c) {
   return c == ' '  || c == '\n' || c == '\r' ||
          c == '\f' || c == '\t' || c == '\v';
}

function négation(f) {
   return function(arg) {
      return !f(arg);
   };
}

function trouverSi(s,pos,f) {
   while(pos != s.length && !f(s[pos])) {
      ++pos;
   }
   return pos;
}



function lireUneTouche(event) {
  
  var dir = document.getElementById("Editeur");	
  
  dir.innerHTML = formater(dir.textContent + String.fromCharCode(event.which)); 
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
	if(event.keyCode == 8 && dir.textContent.length >= 1){
		dir.innerHTML=formater(dir.textContent.substring(0,dir.textContent.length-1));
	}
}
document.addEventListener('keydown',lireUnbackspace);


function peinturerTexte() {
   var zone = document.getElementById("zoneCode");
   zone.innerHTML = peinturer(zone.innerText);
}


