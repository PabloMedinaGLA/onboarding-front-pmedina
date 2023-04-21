import PedidoService from "services/PedidoService";

export async function getAll(signal?: AbortSignal) {
  const { data } = await PedidoService.getAll({ signal });

  return data;
}

// export async function postAll(signal?: AbortSignal) {

// }
