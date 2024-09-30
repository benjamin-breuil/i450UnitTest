// plateau.js
class Plateau {
  constructor(taille = 40) {
    this.taille = taille;
    this.cases = Array(taille).fill(null);
  }

  ajouterPropriete(index, propriete) {
    this.cases[index] = propriete;
  }
}

module.exports = Plateau;

