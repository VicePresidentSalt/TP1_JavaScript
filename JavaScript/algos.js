// JavaScript source code
//par Francis cote et daren-ken st-laurent
function keyWord(mot) {
    var tableau = ["break", "case", "catch", "continue", "debugger", "default", "delete", "do",
       "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch",
       "this", "throw", "try", "typeof", "var", "void", "while", "with"];
    for (var i = 0; i < tableau.length; i++) {
        if (mot == tableau[i]) {
            return true;
        }
    }
    return false;
}

function trouverDans(val, tab) {
    for (var i = 0; i != tab.length; ++i) {
        if (val == tab[i]) {
            return i;
        }
        return tab.length;
    }
}

function formater(s) {
    Compteur.getInstance().reset();
    var temp = "";
    var result = "";
    var pos = 0;
    while (pos != s.length) {
        var prochain = trouverSi(s, pos, négation(isSpace));
        result += subStr(s, pos, prochain);
        pos = prochain;
        
        if (pos != s.length) {
            prochain = trouverSi(s, pos, isSpace);
            temp = subStr(s, pos, prochain);
            Compteur.getInstance().ajouterMot(); // Compteur de mots
            if (keyWord(temp)) {
                temp = "<strong>" + temp + "</strong>"; // Peinture le mot clé
            }
            pos = prochain;
            result += temp;
        }
    }
    document.getElementById("Mots").innerHTML = Compteur.getInstance().getMot();
    return result;
}

function isSpace(c) {
    return c == ' ' || c == '\n' || c == '\r' ||
       c == '\f' || c == '\t' || c == '\v';
}

function négation(f) {
    return function (arg) {
        return !f(arg);
    };
}
function subStr(s, début, fin) {
    var résultat = "";
    for (; début != fin; ++début) {
        résultat += s[début];
    }
    return résultat;
}

function trouverSi(s, pos, f) {
    while (pos != s.length && !f(s[pos])) {
        ++pos;
    }
    return pos;
}

function lignifier(s){
    var res = "";
    var tab = s.split(/\n/);

    compterLignesEtColonnes(tab);

    for (var i = 0; i < tab.length-1; ++i)
    {
        //res = res + "\n<span class='Numerote' >" + tab[i] + "</span>";
        res += "<span class='Numerote' >" + tab[i] + "\n</span>";
    }
    res += "<span class='Numerote' >" + tab[tab.length-1] + "</span>";
    return res;
}

function compterLignesEtColonnes(tab){
    document.getElementById("Ligne").innerHTML = tab.length; // Compteur de lignes
    document.getElementById("Colonne").innerHTML = trouverLignePlusGrosse(tab); // Compteur de colonnes+
}

var Compteur = (function () {
    var instance;
    function ZeCompteur() {
        this.mots = 0;
        this.char = 0;
        this.ajouterChar = function () {
            return this.char++;
        }
        this.getChar = function () {
            this.char;
        }
        this.ajouterMot = function () {
            return this.mots++;
        }
        this.getMot = function () {
            return this.mots;
        }
        this.reset = function () {
            this.mots = 0;
            this.char = 0;
        }
        
    }
    function createInstance() {
        var singleton = new ZeCompteur();
        return singleton;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var Curseur = (function () {
    var instance;
    function ZeCurseur() {
        this.charactere = '►';
        this.position = 0;
        this.getPosition=function () {
            return this.position;
        };
        this.getCaractere = function () {
            return this.charactere;
        }
        this.gauche = function () {
            this.position--;
        }
        this.droite = function () {
            this.position++;
        }
        this.haute = function () {
            this.mots = 0;
        }
        this.bas = function () {
            this.mots = 0;
        }
    }
    function createInstance() {
        var singleton = new ZeCurseur();
        return singleton;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function placerCurseurDebut() {
    document.getElementById("Editeur").innerHTML += Curseur.getInstance().getCaractere();
}
function retirerChar(char, mot) {
    for (var i = 0; i < mot.length; ++i) {
        if (mot[i] == char) {
            if (i == 0) {
                mot = mot.substring(i + 1, mot.length);
            }
            else if (i == mot.length - 1) {
                mot = mot.substring(0, i);
            }
            else {
                mot = mot.substring(0, i) + mot.substring(i + 1, mot.length);
            }
        }
    }
    return mot;
}


function ajoutCursor(s) { // sans curseur
    var posCurseur = Curseur.getInstance().getPosition();
    var avant = s.substring(0, posCurseur);
    var apres = s.substring(posCurseur, s.length);

    return avant + Curseur.getInstance().getCharCurseur() + apres;
}
function trouverLignePlusGrosse(tab){
    var plusGrosse = 0;

    for(var i=0;i<tab.length;++i){
        if (plusGrosse < tab[i].length)
            plusGrosse = tab[i].length;
    }
    return plusGrosse;

}

function compteurChar(contenu) {
    document.getElementById("Char").innerHTML = contenu.length;
}
function decrementeChar() {
    document.getElementById("Char").innerHTML = document.getElementById("Char").textContent-1;
}

