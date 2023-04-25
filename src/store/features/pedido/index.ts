import { IPedido } from "domain/Pedido";

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/store";
import {
  type IState,
  fullfiledSimpleCallbackCase,
  pendingSimpleCallbackCase,
  rejectCallbackCase,
} from "@architecture-it/core";

import { getPedidos, postPedido } from "./asyncActions";

interface IPedidoState extends IState<IPedido[]> {}

const initialState: IPedidoState = {
  data: [],
  error: null,
  isLoading: false,
};

export const pedidoSlice = createSlice({
  name: "pedido",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getall
    builder.addCase(getPedidos.pending, (state) => {
      pendingSimpleCallbackCase(state);
    });

    builder.addCase(getPedidos.rejected, (state, action) => {
      rejectCallbackCase(state, action);
    });

    builder.addCase(getPedidos.fulfilled, (state, action) => {
      fullfiledSimpleCallbackCase(state);

      state.data = action.payload;
    });
    builder.addCase(postPedido.fulfilled, (state, action) => {
      fullfiledSimpleCallbackCase(state);

      state.data = action.payload;
    });
  },
});

export default pedidoSlice.reducer;

// export const { } = personSlice.actions;

export const selectPedido = (state: RootState) => state.pedido;
