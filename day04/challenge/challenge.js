/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · CHALLENGE
 * LE FILTRE À INSULTES / CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous développez le système de chat d'un jeu vidéo en ligne pour YouCode.
 *
 * Consignes :
 * 1. Vous avez une liste (tableau) de mots interdits : ["noob", "idiot", "nul"].
 * 2. Créez une fonction filtrerMessage(message) qui reçoit le message tapé par le joueur.
 * 3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), il doit être remplacé par des astérisques de la même longueur (ex: "").
 * 4. Retournez le message censuré.
 *
 * Exemple de test :
 * filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")
 * -> Résultat attendu : "Tu es vraiment un GROS  et un * !!"
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day04/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let list = ["noob", "idiot", "null"];

function filtremessage(message){
    let minisculemessage = message.toLowerCase();
    let messagelist = minisculemessage.split(" ");
    for (let i=0 ; i<messagelist.length ; i++){
        if(list.includes(messagelist[i])){
    minisculemessage = minisculemessage.replace(messagelist[i], "*".repeat(messagelist[i].length));        }
    }
    return minisculemessage;
}
console.log(filtremessage("tu es noob et idiot aussi null"))