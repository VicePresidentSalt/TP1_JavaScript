function compteurChar(contenu) {
    document.getElementById("Char").innerHTML = contenu.length;
}
function decrementeChar() {
    document.getElementById("Char").innerHTML = document.getElementById("Char").textContent - 1;
}
function placerCurseurDebut() {
    document.getElementById("Editeur").innerHTML += Curseur.getInstance().getCaractere();
}
function compterLignesEtColonnes(tab) {
    document.getElementById("Ligne").innerHTML = tab.length; // Compteur de lignes
    document.getElementById("Colonne").innerHTML = trouverLignePlusGrosse(tab); // Compteur de colonnes+
}