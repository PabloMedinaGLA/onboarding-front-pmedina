import usePedido from "app/pedido/use-pedido";

import Cards from "./component";

export default function ListPedido() {
  const { data } = usePedido();

  // return <PedidoTable data={pedido} />;
  return <Cards data={data} />;
}
