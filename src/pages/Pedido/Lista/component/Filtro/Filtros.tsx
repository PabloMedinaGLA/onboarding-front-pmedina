import { IPedido } from "domain/Pedido";

import { Box } from "@mui/material";
import { Input, faSearch } from "@architecture-it/stylesystem";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../index.module.scss";

import SelecOpcion from "./SelectEstado";

// interface IPropStateArrow {
//   arrow: number;
//   setArrow: React.Dispatch<SetStateAction<number>>;
//   setArrow2: React.Dispatch<SetStateAction<number>>;
//   setArrow3: React.Dispatch<SetStateAction<number>>;
// }

interface IPropEstadoPedido {
  setStateData: React.Dispatch<React.SetStateAction<IPedido[]>>;
  data: IPedido[];
}

export default function Filtros({ data, setStateData }: IPropEstadoPedido) {
  const [busqueda, setBusqueda] = useState("");

  const filtrarBusquedaPedido = (terminoBusqueda: string) => {
    var resultDataBusqueda = data.filter((elemento) => {
      if (
        elemento.numeroDePedido?.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });

    setStateData(resultDataBusqueda);
  };

  return (
    <div className={styles.containerfiltro}>
      <div className={styles.containerSearch}>
        <Box display="flex" height="47px">
          <Input
            classes={{ formControl: "myCustomClass" }}
            endAdornment={<FontAwesomeIcon icon={faSearch} />}
            placeholder="N° Pedido"
            value={busqueda}
            onChange={(event) => {
              setBusqueda(event.target.value);
              filtrarBusquedaPedido(event.target.value);
            }}
          />
        </Box>
        <div className={styles.containerOrdenarPor}>
          <SelecOpcion data={data} setStateData={setStateData} />
        </div>
      </div>
    </div>
  );
}
