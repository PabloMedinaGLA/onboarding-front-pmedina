import { IPedidoPost } from "domain/Pedido";

import { Alert, Button, Input } from "@architecture-it/stylesystem";
import { Box, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";
import { useState } from "react";
import usePedido from "app/pedido/use-pedido";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "../components/index.module.scss";

export default function Form() {
  const [cerrar, setCerrar] = useState(false);
  const { uploadPedido } = usePedido();

  const validationSchema = yup.object({
    cuentaCorriente: yup
      .number()
      .required("Campo requerido")
      .typeError("Ingrese caracteres Numericos"),
    codigoDeContratoInterno: yup
      .number()
      .required("Campo requerido")
      .typeError("Ingrese caracteres Numericos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values: FieldValues) => {
    const pedido: IPedidoPost | any = {
      cuentaCorriente: values.cuentaCorriente.toString(),
      codigoDeContratoInterno: values.codigoDeContratoInterno,
    };

    setCerrar(true);
    uploadPedido(pedido);
  };

  return (
    <section className={styles.root}>
      {cerrar && (
        <Alert
          color="success"
          iconProps={{
            icon: faCheckCircle,
          }}
          open={cerrar}
          variant="outlined"
          onCloseProp={() => {
            setCerrar(false);
          }}
        >
          <Typography variant="subtitle2">
            Nuevo Pedido <strong>fue creado con éxito </strong>
          </Typography>
        </Alert>
      )}

      <form
        action=""
        className={styles.container}
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <h1>Registro Pedido</h1>
        <Box marginTop="var(--spacing-4)" sx={{ width: "1", height: "50px" }} textAlign="center">
          <Input
            {...register("cuentaCorriente", {
              required: true,
            })}
            error={Boolean(errors.cuentaCorriente)}
            helperText={errors.cuentaCorriente ? (errors.cuentaCorriente.message as string) : ""}
            label=""
            placeholder="Cuenta Corriente"
            sx={{ width: 1 }}
            onChange={() => {}}
          />
        </Box>
        <Box marginTop="var(--spacing-6)" sx={{ width: "1", height: "50px" }}>
          <Input
            {...register("codigoDeContratoInterno", {
              required: true,
            })}
            error={Boolean(errors.codigoDeContratoInterno)}
            helperText={
              errors.codigoDeContratoInterno
                ? (errors.codigoDeContratoInterno.message as string)
                : ""
            }
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
