import { IPedido } from "domain/Pedido";

import iconPedido from "../../../../assets/iconPedido.svg";

import styles from "./index.module.scss";

interface IFooterCardsProps {
  cuentaCorriente: string;
  cuando: string;
}

export default function FooterCard({ cuentaCorriente, cuando }: IFooterCardsProps) {
  return (
    <div className={styles.cardFooter}>
      <div className={styles.cardFooterCC}>
        <p>Cuenta Corriente</p>
        <p>{cuentaCorriente}</p>
      </div>

      <p className={styles.fechaCard}>{cuando}</p>
    </div>
  );
}
