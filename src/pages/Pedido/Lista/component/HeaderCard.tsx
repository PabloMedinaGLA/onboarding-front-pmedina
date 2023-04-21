import iconPedido from "../../../../assets/iconPedido.svg";

import styles from "./index.module.scss";

interface IHeaderCardsProps {
  numeroDePedido: number | null;
}

export default function HeaderCard({ numeroDePedido }: IHeaderCardsProps) {
  return (
    <div className={styles.cardHeader}>
      <p>Pedido</p>
      <div className={styles.containernumeroPedido}>
        <p>#{numeroDePedido ? numeroDePedido : "------"}</p>
        <img alt="iconpedido" src={iconPedido} />
      </div>
    </div>
  );
}
