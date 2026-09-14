/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * EXTRACTION DE NOM DE DOMAINE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend une adresse email (ex: "contact@youcode.ma") et retourne uniquement le domaine ("youcode.ma"). *Indice : Combinez indexOf et slice ou utilisez split.*
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day04/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function email(email){
    // let index = 0;
    // index = email.indexOf("@")
    // return email.slice(index+1);
    let index = 0 ;
    index = email.split("@")
    return index[1]
}
console.log(email("anass@youcode.ma"))