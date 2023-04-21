import { useAppDispatch, useAppSelector } from "store/hooks";
import { useEffect } from "react";
import { selectPedido } from "store/features/pedido";
import { getPedidos } from "store/features/pedido/asyncActions";

export default function usePedido() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectPedido);

  useEffect(() => {
    const promise = dispatch(getPedidos());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return data;
}
