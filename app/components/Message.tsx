type Props = {
  type: "succes" | "erreur";
  texte: string;
};

// Message de retour après une action (succès en vert, erreur en rouge).
export default function Message({ type, texte }: Props) {
  const couleurs =
    type === "succes"
      ? "border-green-300 bg-green-50 text-green-800"
      : "border-red-300 bg-red-50 text-red-800";

  return (
    <p role={type === "erreur" ? "alert" : "status"} className={`rounded-md border px-4 py-2 text-sm ${couleurs}`}>
      {texte}
    </p>
  );
}
