import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PrincipalSkeleton from "../skeletons/Principal";

const Home = lazy(() => import("../pages/Home"));
const User = lazy(() => import("../pages/User"));
const Person = lazy(() => import("../pages/Person"));
const ListaPedido = lazy(() => import("../pages/Pedido/Lista"));
const CrearPedido = lazy(() => import("../pages/Pedido/Crear"));

import ProtectedRoute from "./ProtectedRoute";
import InteractionRoute from "./InteractionRoute";

export default function AppRoutes() {
  return (
    <Suspense fallback={<PrincipalSkeleton />}>
      <Routes>
        <Route element={<InteractionRoute />}>
          <Route element={<ProtectedRoute />}>
            <Route element={<User />} path="user" />
            <Route element={<CrearPedido />} path="crear-pedido" />
            <Route element={<ListaPedido />} path="lista-pedidos" />
          </Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
