export interface IPedido {
  id: string;
  numeroDePedido: number | null;
  cicloDelPedido: string;
  codigoDeContratoInterno: number;
  estadoDelPedido: IEstadoDelPedido;
  cuentaCorriente: string;
  cuando: string;
}

export interface IEstadoDelPedido {
  id: number;
  descripcion: string;
}
