import { Skeleton } from "@mui/material";

import styles from "../Cards/Cards.module.scss";

export default function Card() {
  return (
    <div className={styles.containerCard}>
      <div className={styles.cardHeader}>
        <Skeleton width="30%" />
        <div className={styles.containernumeroPedido}>
          <Skeleton width="10%" />
          <Skeleton width="90%" />
        </div>
      </div>

      <div className={styles.cardMain}>
        <Skeleton height="100%" variant="rectangular" width="100%" />
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.cardFooterCC}>
          <Skeleton width="50%" />
          <Skeleton width="30%" />
        </div>

        <Skeleton width="30%" />
      </div>
    </div>
  );
}
