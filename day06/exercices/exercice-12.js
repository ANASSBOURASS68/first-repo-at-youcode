/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * MÉTHODE D'OBJET (THIS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet compteBancaire avec une propriété solde et une méthode deposer(montant). La méthode doit utiliser this.solde pour augmenter le solde actuel.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day06/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let coptebancaire = {
        solde : 1000,
        deposer : function  deposer(montant){
        let newsolde = montant + this.solde
        this.solde = newsolde

    }
}
coptebancaire.deposer(600);
console.log(coptebancaire.solde)