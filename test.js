// test.js
const Joueur = require('./joueur');
const Propriete = require('./propriete');
const Plateau = require('./plateau');

describe('Tests des fonctionnalités de Joueur, Propriété et Plateau', () => {

  let joueur1, joueur2, propriete, plateau;

  beforeEach(() => {
    joueur1 = new Joueur('Alice');
    joueur2 = new Joueur('Bob');
    propriete = new Propriete('Rue de la Paix', 400, 50);
    plateau = new Plateau();
    plateau.ajouterPropriete(1, propriete);
  });

  test('Joueur peut se déplacer et passer par la case départ', () => {
    joueur1.deplacer(39, plateau);
    expect(joueur1.position).toBe(39);

    joueur1.deplacer(2, plateau);  // Dépasse la taille du plateau
    expect(joueur1.position).toBe(2);
    expect(joueur1.argent).toBe(1700); // A reçu 200 en passant par la case départ
  });

  test('Joueur peut acheter une propriété', () => {
    propriete.acheter(joueur1);
    expect(joueur1.argent).toBe(1100);  // 1500 - 400
    expect(propriete.proprietaire).toBe(joueur1);
  });

  test('Joueur ne peut pas acheter une propriété sans argent', () => {
    joueur1.argent = 300;  // Pas assez pour acheter
    expect(() => propriete.acheter(joueur1)).toThrow(`${joueur1.nom} n'a pas assez d'argent pour acheter Rue de la Paix`);
  });

  test('Joueur doit payer le loyer s\'il atterrit sur une propriété appartenant à un autre joueur', () => {
    propriete.acheter(joueur1);
    expect(propriete.proprietaire).toBe(joueur1);

    joueur2.deplacer(1, plateau);  // Joueur2 atterrit sur la case 1 où se trouve la propriété
    propriete.payerLoyer(joueur2);

    expect(joueur2.argent).toBe(1450);  // 1500 - 50 (loyer)
    expect(joueur1.argent).toBe(1150);  // 1100 + 50 (loyer reçu)
  });

  test('Joueur ne peut pas payer le loyer s\'il n\'a pas assez d\'argent', () => {
    propriete.acheter(joueur1);

    joueur2.argent = 30;  // Pas assez pour payer le loyer de 50
    expect(() => propriete.payerLoyer(joueur2)).toThrow(`${joueur2.nom} n'a pas assez d'argent`);
  });

  test('Cas d\'exception : Joueur va en prison', () => {
    // Implémentation possible de la prison
    joueur1.enPrison = false;

    function allerEnPrison(joueur) {
      joueur.position = 10;  // Supposons que la prison est à la case 10
      joueur.enPrison = true;
    }

    allerEnPrison(joueur1);
    expect(joueur1.position).toBe(10);
    expect(joueur1.enPrison).toBe(true);
  });
});

