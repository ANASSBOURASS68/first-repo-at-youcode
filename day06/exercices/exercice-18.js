/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let utulisateur1 = {
    nom : "ANASS",
    age : 25,
}
let utulisateur2 = {
    nom : "ANASS",
    age : 25,
}


function sontIdentiques(obj1, obj2){
    let firstobj = Object.keys(obj1);
    let secondobj =  Object.keys(obj2);
    if(firstobj.length !== secondobj.length){
        return false
    }
    for (let i = 0 ; i<firstobj.length ; i++){
        if(obj1[firstobj[i]] !== obj2[secondobj[i]]){
            return false;
        }
    }
    return true
}

console.log(sontIdentiques(utulisateur1,utulisateur2))