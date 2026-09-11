/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let fruits = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];

function calcF(fruits){ 
    let tabC = [];
    for(let i = 0 ; i<fruits.length ; i++){
        let trouve = false;
        for(let j = 0 ; j<tabC.length ; j++){
        
            if(tabC[j].fruits === fruits[i] ){
                tabC[j].nombre++;
                trouve = true;
                
            }
            
                
            }
            if(trouve === false){
                tabC.push({
                    fruits : fruits[i],
                    nombre : 1,
                });
        }
    }
    return tabC;
}
console.log(calcF(fruits))




