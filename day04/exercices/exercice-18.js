/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day04/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let para = "Enelot, l'éléphant élégant, expérime une envie extraordinaire d'explorer l'Est de l'Eurore";
function  combiendeE(text){
    let newpara = para.split("").reduce(function(acc,cur){
    if(cur === "E" || cur === "e"){
        acc++;
        }
        return acc;
    },0);
    return `E : e =  ${newpara}`
    
}



console.log(combiendeE(para))