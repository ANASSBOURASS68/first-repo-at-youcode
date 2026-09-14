/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FORMATAGE MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction formater(montant) qui prend 1234567 (Number ou String) et retourne "1 234 567 MAD". (Vous pouvez chercher comment utiliser les regex pour insérer des espaces, ou utiliser les boucles/slice).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day04/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function formater(montant) {
    montant = String(montant);

    let partie1 = "";
    let partie2 = "";
    let result = "";

    let reste = montant.length % 3;

    partie1 = montant.slice(0, reste);

    for (let i = reste; i < montant.length; i += 3) {
        partie2 = montant.slice(i, i + 3);

        if (result != "") {
            result += " ";
        }

        result += partie2;
    }

    result = partie1 + " " + result;

    return result + " MAD";
}

console.log(formater("1234567"));