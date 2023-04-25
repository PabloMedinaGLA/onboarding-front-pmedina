import { IPedido } from "domain/Pedido";

import { useEffect, useState } from "react";
import CardSkeleton from "skeletons/Cards";

import styles from "./index.module.scss";
import HeaderCard from "./HeaderCard";
import MainCard from "./MainCard";
import FooterCard from "./FooterCard";
import Filtros from "./Filtro/Filtros";

interface IPedidoCardsProps {
  data: IPedido[];
}

// un metodo que reciba DATA y reciba el selector y que devuelva el array filtrado por el selector

export default function Cards({ data }: IPedidoCardsProps) {
  const [stateData, setStateData] = useState<IPedido[]>(data);

  useEffect(() => {
    setStateData(data);
  }, [data]);

  return (
    <section className={styles.root}>
      <section className={styles.actions}>{/* IconButton actions acá */}</section>
      <section className={styles.container}>
        <div className={styles.containerHead}>
          <h1>Pedidos</h1>
          <Filtros data={data} setStateData={setStateData} />
        </div>

        <div className={styles.containerboxAllCards}>
          {data.length == 0 && <CardSkeleton />}
          {stateData &&
            stateData.map(({ numeroDePedido, estadoDelPedido, cuentaCorriente, cuando }, i) => {
              return (
                <div key={i} className={styles.containerCard}>
                  <HeaderCard numeroDePedido={numeroDePedido} />

                  <MainCard estadoDelPedido={estadoDelPedido.id} />

                  <FooterCard cuando={cuando} cuentaCorriente={cuentaCorriente} />
                </div>
              );
            })}
        </div>
      </section>
    </section>
  );
}
