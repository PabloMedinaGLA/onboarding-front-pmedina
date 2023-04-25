import { IPedidoPost } from "domain/Pedido";

import { Alert, Button, Input } from "@architecture-it/stylesystem";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import { useState } from "react";
import usePedido from "app/pedido/use-pedido";

import styles from "../components/index.module.scss";

export default function Form() {
  const [boolSubmit, setBoolSubmit] = useState("default");
  const [cerrar, setCerrar] = useState(true);
  const { uploadPedido } = usePedido();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IPedidoPost>();

  const expresion = /^[0-9]*$/;

  const onSubmit = handleSubmit((values: IPedidoPost) => {
    if (expresion.test(values.cuentaCorriente) && expresion.test(values.codigoDeContratoInterno)) {
      uploadPedido(values);
      setBoolSubmit("enviado");
    } else {
      setBoolSubmit("rechazado");
      setCerrar(true);
    }
  });

  return (
    <section className={styles.root}>
      {boolSubmit == "rechazado" && (
        <Alert
          color="error"
          iconProps={{
            icon: faCheckCircle,
          }}
          open={cerrar}
          variant="outlined"
          onCloseProp={() => {
            setCerrar(false), setBoolSubmit("default");
          }}
        >
          <Typography variant="body2">
            No puedo ser enviado su <strong>Pedido </strong>
          </Typography>
        </Alert>
      )}
      {boolSubmit == "enviado" && (
        <Alert
          color="success"
          iconProps={{
            icon: faCheckCircle,
          }}
          open={cerrar}
          variant="outlined"
          onCloseProp={() => {
            setCerrar(false), setBoolSubmit("default");
          }}
        >
          <Typography variant="subtitle2">
            Nuevo Pedido <strong>fue creado con éxito, </strong>
          </Typography>
        </Alert>
      )}

      <form action="" className={styles.container} onSubmit={onSubmit}>
        <h1>Registro Pedido</h1>
        <Box marginTop="var(--spacing-4)" sx={{ width: "40%" }}>
          <Input
            {...register("cuentaCorriente", {
              required: true,
              validate: (value) => value === getValues("cuentaCorriente"),
            })}
            label=""
            placeholder="Cuenta Corriente"
            sx={{ width: 1 }}
            onChange={() => {}}
          />
        </Box>
        <Box marginTop="var(--spacing-6)" sx={{ width: "40%" }}>
          <Input
            {...register("codigoDeContratoInterno", {
              required: true,
              validate: (value) => value === getValues("codigoDeContratoInterno"),
            })}
            label=""
            placeholder={"Codigo Contrato Interno"}
            sx={{ width: "100%" }}
            onChange={() => {}}
          />
        </Box>
        <Button
          color="primary"
          style={{ display: "block", width: "150px", margin: "40px 0" }}
          text="Enviar"
          type="submit"
          variant="contained"
        />
      </form>
    </section>
  );
}
