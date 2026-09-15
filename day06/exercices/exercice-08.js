/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let condidats=[
    {
        nom: "ANASS",
        score : 9
    },
    {
        nom: "MOHAMMED",
        score : 17
    },
    {
        nom: "oussama",
        score : 14
    },

]

function meilleurscore(obj){
    let scoremax = 0;
    let nomcondidat = ""
    for (let i = 0 ; i<obj.length ; i++){
        if(obj[i].score> scoremax){
            scoremax= obj[i].score;                
            nomcondidat =  obj[i].nom;
        }
    }
    return nomcondidat
}

console.log(meilleurscore(condidats))