// Règles de gestion de CampusPrêt (cahier des charges, section 6).
// Ces fonctions ne dépendent ni de React ni de la base de données :
// on pourra les réutiliser dans les Server Actions aux séances 2 et 3.
import type { Equipement, Emprunt } from "./types";

// Un emprunt est actif tant qu'il n'a pas de date de retour.
export function estActif(emprunt: Emprunt): boolean {
  return emprunt.dateRetour === null;
}

// Nombre de prêts actifs pour un équipement.
export function compterActifs(equipementId: number, emprunts: Emprunt[]): number {
  return emprunts.filter((e) => e.equipementId === equipementId && estActif(e)).length;
}

// RG-02 : disponible = quantité totale - nombre d'emprunts actifs.
export function calculerDisponibilite(equipement: Equipement, emprunts: Emprunt[]): number {
  return equipement.quantiteTotale - compterActifs(equipement.id, emprunts);
}

// RG-01 et RG-08 : champs obligatoires et quantité entière d'au moins 1.
// RG-07 : à la modification, la quantité ne peut pas descendre sous les prêts actifs.
// Retourne un message d'erreur, ou null si tout est correct.
export function validerEquipement(
  donnees: { nom: string; categorie: string; quantiteTotale: number },
  pretsActifs = 0
): string | null {
  if (donnees.nom.trim() === "") return "Le nom est obligatoire.";
  if (donnees.categorie.trim() === "") return "La catégorie est obligatoire.";
  if (!Number.isInteger(donnees.quantiteTotale) || donnees.quantiteTotale < 1) {
    return "La quantité totale doit être un nombre entier d'au moins 1.";
  }
  if (donnees.quantiteTotale < pretsActifs) {
    return `La quantité ne peut pas être inférieure aux ${pretsActifs} prêts actifs.`;
  }
  return null;
}

// RG-03 et RG-04 : données de l'étudiant obligatoires et équipement disponible.
export function validerEmprunt(
  donnees: { nomEtudiant: string; courrielEtudiant: string },
  disponible: number
): string | null {
  if (donnees.nomEtudiant.trim() === "") return "Le nom de l'étudiant est obligatoire.";
  if (donnees.courrielEtudiant.trim() === "") return "Le courriel de l'étudiant est obligatoire.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donnees.courrielEtudiant.trim())) {
    return "Le courriel n'est pas valide (exemple : nom@cegep.ca).";
  }
  if (disponible <= 0) return "Plus aucun exemplaire disponible pour cet équipement.";
  return null;
}

// RG-06 : on ne supprime pas un équipement qui a un historique (même retourné).
export function peutSupprimer(equipementId: number, emprunts: Emprunt[]): boolean {
  return !emprunts.some((e) => e.equipementId === equipementId);
}

// Date du jour au format AAAA-MM-JJ.
export function aujourdhui(): string {
  return new Date().toISOString().slice(0, 10);
}
