type Props = {
  disponible: number;
  total: number;
};

// Badge vert si au moins un exemplaire est disponible, rouge sinon.
export default function IndicateurDisponibilite({ disponible, total }: Props) {
  if (disponible > 0) {
    return (
      <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
        {disponible} / {total} disponible{disponible > 1 ? "s" : ""}
      </span>
    );
  }

  return (
    <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
      Indisponible (0 / {total})
    </span>
  );
}
