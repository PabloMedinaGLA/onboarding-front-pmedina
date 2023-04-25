import { IPedidoPost } from "domain/Pedido";

import PedidoService from "services/PedidoService";

export async function getAll(signal?: AbortSignal) {
  const { data } = await PedidoService.getAll({ signal });

  return data;
}

export async function post(pedido: IPedidoPost) {
  await PedidoService.post(pedido);
}

// export async function postAll(signal?: AbortSignal) {

// }
