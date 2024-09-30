// joueur.js
class Joueur {
  constructor(nom, argent = 1500) {
    this.nom = nom;
    this.position = 0;
    this.argent = argent;
  }

  deplacer(nouvellePosition, plateau) {
    this.position = nouvellePosition;
    if (this.position >= plateau.taille) {
      this.position = this.position % plateau.taille;
      this.argent += 200;  // Passage par la case départ
    }
  }

  payer(montant) {
    if (this.argent >= montant) {
      this.argent -= montant;
    } else {
      throw new Error(`${this.nom} n'a pas assez d'argent`);
    }
  }
}

module.exports = Joueur;

