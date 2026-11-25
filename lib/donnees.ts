// Données fictives pour la séance 1.
// À la séance 2, elles seront remplacées par la base de données (Prisma).
import type { Equipement, Emprunt } from "./types";

export const equipements: Equipement[] = [
  { id: 1, nom: "Portable Dell Latitude", categorie: "Ordinateurs", description: "Écran 14 pouces, Windows 11", quantiteTotale: 5 },
  { id: 2, nom: "iPad 10e génération", categorie: "Tablettes", description: "Avec étui et chargeur", quantiteTotale: 1 },
  { id: 3, nom: "Projecteur Epson", categorie: "Projecteurs", description: null, quantiteTotale: 2 },
  { id: 4, nom: "Casque d'écoute Logitech", categorie: "Accessoires", description: "Avec micro", quantiteTotale: 8 },
  { id: 5, nom: "MacBook Air", categorie: "Ordinateurs", description: "Puce M2", quantiteTotale: 2 },
];

export const emprunts: Emprunt[] = [
  { id: 1, nomEtudiant: "Léa Morin", courrielEtudiant: "lea.morin@cegep.ca", dateEmprunt: "2026-11-20", dateRetour: null, equipementId: 1 },
  { id: 2, nomEtudiant: "Sam Tremblay", courrielEtudiant: "sam.tremblay@cegep.ca", dateEmprunt: "2026-11-18", dateRetour: "2026-11-21", equipementId: 2 },
  { id: 3, nomEtudiant: "Noah Gagnon", courrielEtudiant: "noah.gagnon@cegep.ca", dateEmprunt: "2026-11-21", dateRetour: null, equipementId: 2 },
  { id: 4, nomEtudiant: "Emma Roy", courrielEtudiant: "emma.roy@cegep.ca", dateEmprunt: "2026-11-22", dateRetour: null, equipementId: 3 },
];
