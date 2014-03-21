function compteurChar(contenu) {
    document.getElementById("Char").innerHTML = contenu.length;
}
function decrementeChar() {
    document.getElementById("Char").innerHTML = document.getElementById("Char").textContent - 1;
}
function placerCurseurDebut() {
    document.getElementById("Editeur").innerHTML += Curseur.getInstance().getCaractere();
}