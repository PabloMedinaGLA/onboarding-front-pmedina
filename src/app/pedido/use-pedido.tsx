import { IPedido, IPedidoPost } from "domain/Pedido";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { useEffect } from "react";
import { selectPedido } from "store/features/pedido";
import { getPedidos, postPedido } from "store/features/pedido/asyncActions";

export default function usePedido() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectPedido);

  useEffect(() => {
    const promise = dispatch(getPedidos());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const uploadPedido = (pedido: IPedidoPost) => {
    dispatch(postPedido(pedido));
  };

  return { data, uploadPedido };
}
