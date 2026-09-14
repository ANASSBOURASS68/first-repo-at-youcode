/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CAPITALISATION (TITLE CASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction capitaliser(mot) qui prend "yOUcoDe" et retourne "Youcode" (seule la première lettre est en majuscule, le reste en minuscules).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function capitaliser(mot){
    let capital = mot.slice(0,1);
    let lower = mot.slice(1,mot.length)
    capital=capital.toUpperCase() ;
    lower = lower.toLowerCase()

    return capital+lower
}
console.log(capitaliser("yOUCODE"))