// joueur.js
class Joueur {
  constructor(nom, argent = 1500) {
    this.nom = nom;
    this.position = 0;
    this.argent = argent;
  }

  deplacer(nouvellePosition, plateau) {
    if (nouvellePosition >= plateau.taille) {
      this.argent += 200;  // Passage par la case départ
    } else if (nouvellePosition < this.position) {
      // Si la nouvelle position est inférieure à l'ancienne, le joueur a passé la case départ
      this.argent += 200;
    }
    this.position = nouvellePosition % plateau.taille;  // Réinitialiser la position en cas de dépassement
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

