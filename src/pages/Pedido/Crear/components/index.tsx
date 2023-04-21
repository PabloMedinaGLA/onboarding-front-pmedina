import { Alert, Button, Input } from "@architecture-it/stylesystem";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";

import styles from "../components/index.module.scss";

interface FormData {
  cuentaCorriente: number;
  codigoContratoInterno: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((values: any) => {
    alert("Form submit!" + JSON.stringify(values));
  });

  return (
    <section className={styles.root}>
      <form action="" className={styles.container} onSubmit={onSubmit}>
        <h1>Registro Pedido</h1>
        <Box marginTop="var(--spacing-4)">
          <Input
            {...register("cuentaCorriente", {
              required: true,
              validate: (value) => value === getValues("codigoContratoInterno"),
            })}
            label=""
            placeholder="Cuenta Corriente"
            sx={{ width: 300 }}
            onChange={() => {}}
          />
          {errors.cuentaCorriente && (
            <Alert
              open
              color="error"
              iconProps={{
                icon: faCheckCircle,
              }}
              variant="outlined"
              onCloseProp={() => {}}
            >
              <Typography variant="body2">
                Tu mensaje <strong>no </strong>
                pudo ser enviado.
              </Typography>
            </Alert>
          )}
        </Box>
        <Box marginTop="var(--spacing-6)">
          <Input
            {...register("codigoContratoInterno", {
              required: true,
              validate: (value) => value === getValues("codigoContratoInterno"),
            })}
            label=""
            placeholder={"Codigo Contrato Interno"}
            sx={{ width: 300 }}
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
