import { IPedido } from "domain/Pedido";

import { ServiceBase, type ICommonOptions } from "@architecture-it/core";
import env from "@architecture-it/react-env";
import { msalInstance } from "msalInstance";
import axios from "axios";
import { addResponseInterceptorRefreshToken } from "@architecture-it/azure-b2c";

const BASE_URL = env("API") + "v1/Pedido";

const data: IPedido[] = [
  {
    id: "00000000-0000-0000-0000-000000000000",
    numeroDePedido: 123,
    cicloDelPedido: "00000000-0000-0000-0000-000000000000",
    codigoDeContratoInterno: 448822,
    estadoDelPedido: {
      id: 1,
      descripcion: "CREADO",
    },
    cuentaCorriente: "448822",
    cuando: "02/15/2023",
  },
  {
    id: "b6a01d69-4755-4553-9276-00850639210c",
    numeroDePedido: 123123123412,
    cicloDelPedido: "b6a01d69-4755-4553-9276-00850639210c",
    codigoDeContratoInterno: 44444,
    estadoDelPedido: {
      id: 2,
      descripcion: "ASIGNADO",
    },
    cuentaCorriente: "44444",
    cuando: "02/22/2023",
  },
];

class _PedidoService extends ServiceBase {
  constructor() {
    super(BASE_URL!);

    //util for refresh token
    addResponseInterceptorRefreshToken(this.client, msalInstance, axios);
  }
  // implementar getPersons
  getAll({ signal }: ICommonOptions) {
    return axios.get(BASE_URL);
  }

  // getAll = ({ signal }: ICommonOptions) =>
  //   new Promise<{ data: IPedido[] }>((resolve, _reject) => {
  //     return resolve({ data });
  //   });
}

const PedidoService = new _PedidoService();

export default PedidoService;
