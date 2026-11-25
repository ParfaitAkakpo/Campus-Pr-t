// Les deux types de données de CampusPrêt.
// À la séance 2, Prisma générera des types équivalents à partir du schéma.

export type Equipement = {
  id: number;
  nom: string;
  categorie: string;
  description: string | null; // facultative
  quantiteTotale: number;
};

export type Emprunt = {
  id: number;
  nomEtudiant: string;
  courrielEtudiant: string;
  dateEmprunt: string; // format AAAA-MM-JJ
  dateRetour: string | null; // null tant que le prêt est actif
  equipementId: number; // clé étrangère vers Equipement
};
