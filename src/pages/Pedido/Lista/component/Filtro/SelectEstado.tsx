import { IPedido } from "domain/Pedido";

import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

interface IPropEstadoPedido {
  data: IPedido[];
  setStateData: React.Dispatch<React.SetStateAction<IPedido[]>>;
}

export default function SelecOpcion({ setStateData, data }: IPropEstadoPedido) {
  const [estadoPedido, setEstadoPedido] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEstadoPedido(event.target.value);
    filtrarEstadoPedido(event.target.value);
  };

  const filtrarEstadoPedido = (estado: string) => {
    var resultDataEstadoPedido = data.filter((pedido) => {
      if (pedido.estadoDelPedido.descripcion == estado || estado == "") {
        return pedido;
      }
    });

    setStateData(resultDataEstadoPedido);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} variant="outlined">
      <Select
        displayEmpty
        color="primary"
        inputProps={{ "aria-label": "Without label" }}
        value={estadoPedido}
        onChange={handleChange}
      >
        <MenuItem value={""}>
          <p>Seleccionar Estado</p>
        </MenuItem>
        <MenuItem value={"CREADO"}>Creado</MenuItem>
        <MenuItem value={"ASIGNADO"}>Asignado</MenuItem>
        <MenuItem value={"CERRADO"}>Cerrado</MenuItem>
        <MenuItem value={"RECHAZADO"}>Rechazado</MenuItem>
      </Select>
    </FormControl>
  );
}
