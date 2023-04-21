import creado from "../../../../assets/creado-cerrado.svg";
import asignado from "../../../../assets/asignadoIcon.svg";
import cerrado from "../../../../assets/creado-cerrado.svg";
import rechazado from "../../../../assets/rechazado.svg";

import styles from "./index.module.scss";

interface IMainCardsProps {
  estadoDelPedido: number;
}
const opciones: { [key: number]: any } = {
  1: {
    imagen: creado,
    estilo: "creado",
  },
  2: {
    imagen: asignado,
    estilo: "asignado",
  },
  3: {
    imagen: cerrado,
    estilo: "cerrado",
  },
  4: {
    imagen: rechazado,
    estilo: "rechazado",
  },
};

export default function MainCard({ estadoDelPedido }: IMainCardsProps) {
  return (
    <div className={`${styles.cardMain} ${styles[opciones[estadoDelPedido].estilo]}`}>
      <img alt="icono" src={opciones[estadoDelPedido].imagen} />
      <p>{opciones[estadoDelPedido].estilo}</p>
    </div>
  );
}
