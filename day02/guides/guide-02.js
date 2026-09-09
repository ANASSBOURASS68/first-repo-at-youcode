/**
 * JOUR 02 — GUIDE 02
 * Attendre un événement (Boucle while)
 *
 * OBJECTIF
 * On vous donne un nombre N = 100. Divisez ce nombre par 2 en boucle jusqu'à ce qu'il soit strictement inférieur à 1. Comptez combien de divisions ont été nécessaires.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.
let n = 100;
let i = 0;
while (n >= 1){
    n = n/2;
    console.log(n);
    i++;
}
console.log("Nombre de divisions :", i);