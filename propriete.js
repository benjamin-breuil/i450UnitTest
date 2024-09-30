// propriete.js
class Propriete {
  constructor(nom, prixAchat, loyer) {
    this.nom = nom;
    this.prixAchat = prixAchat;
    this.loyer = loyer;
    this.proprietaire = null;
  }

  acheter(joueur) {
    if (joueur.argent >= this.prixAchat) {
      joueur.payer(this.prixAchat);
      this.proprietaire = joueur;
    } else {
      throw new Error(`${joueur.nom} n'a pas assez d'argent pour acheter ${this.nom}`);
    }
  }

  payerLoyer(joueur) {
    if (this.proprietaire && this.proprietaire !== joueur) {
      joueur.payer(this.loyer);
      this.proprietaire.argent += this.loyer;
    }
  }
}

module.exports = Propriete;

