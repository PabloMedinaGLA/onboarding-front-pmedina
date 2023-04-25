import { IPedidoPost } from "domain/Pedido";

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as useCases from "app/pedido";
import { isAxiosError } from "@architecture-it/core";
import type { RootState } from "store/store";

import { displayAlert } from "../alert/asyncActions";

const MESSAGE_STATUS = new Map<number, string>();

MESSAGE_STATUS.set(404, "La información solicitada no existe.");
MESSAGE_STATUS.set(500, "Error de servidor. Inténtelo de nuevo más tarde.");

export const getPedidos = createAsyncThunk(
  "pedido/getAll",
  async (_, { rejectWithValue, signal }) => {
    try {
      const pedidos = await useCases.getAll(signal);

      return pedidos;
    } catch (error: any) {
      let message = "Ocurrió un error al obtener los colaboradores";

      if (isAxiosError(error)) {
        const errorCode = error.response?.status as number;

        message = MESSAGE_STATUS.get(errorCode) ?? message;
      }

      displayAlert({
        type: "error",
        message,
      });

      return rejectWithValue(error);
    }
  },
  {
    //siempre y cuando no esté cargando el estado hace la llamada
    condition: (_, { getState }) => {
      const { pedido } = getState() as RootState;

      return !pedido.isLoading;
    },
  }
);

export const postPedido = createAsyncThunk(
  "pedido/post",
  async (pedido: IPedidoPost, { rejectWithValue, signal }) => {
    try {
      await useCases.post(pedido);
      const pedidos = await useCases.getAll(signal);

      return pedidos;
    } catch (error: any) {
      let message = "Ocurrió un error POST";

      if (isAxiosError(error)) {
        const errorCode = error.response?.status as number;

        message = MESSAGE_STATUS.get(errorCode) ?? message;
      }

      displayAlert({
        type: "error",
        message,
      });

      return rejectWithValue(error);
    }
  },
  {
    //siempre y cuando no esté cargando el estado hace la llamada
    condition: (_, { getState }) => {
      const { pedido } = getState() as RootState;

      return !pedido.isLoading;
    },
  }
);
