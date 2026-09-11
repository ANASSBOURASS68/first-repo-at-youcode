/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉCHANTILLONNAGE (SLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un grand tableau de 100 éléments, utilisez .slice() pour extraire les 10 premiers (la première page).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day05/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let nombre = [
    12, 45, 78, 3, 91, 24, 67, 100, 56, 8,
    34, 72, 19, 88, 41, 5, 63, 27, 95, 14,
    52, 81, 6, 39, 73, 22, 99, 31, 47, 16,
    68, 4, 85, 29, 54, 76, 11, 93, 36, 61,
    18, 70, 43, 87, 25, 9, 58, 97, 33, 49,
    7, 64, 21, 82, 38, 90, 15, 55, 74, 28,
    46, 96, 10, 69, 32, 84, 17, 53, 79, 40,
    2, 62, 35, 89, 23, 71, 44, 98, 30, 57,
    13, 66, 26, 83, 37, 92, 20, 48, 75, 1,
    59, 86, 50, 65, 42, 77, 94, 51, 80, 60
];
let page1 = nombre.slice(0,10);
console.log("page 1: "+page1)