import { Footer, Header, useToggle } from "@architecture-it/stylesystem";
import { UserAvatar, SidebarWrapper } from "@architecture-it/azure-b2c";
import { useLocation, useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { faHome, faListUl, faPlus } from "@fortawesome/pro-solid-svg-icons";

import styles from "./Main.module.scss";

interface IMainProps {
  children: React.ReactNode;
}

export default function Main({ children }: IMainProps) {
  const [open, { handleOpen, handleClose }] = useToggle();

  const { pathname } = useLocation();

  const isAuth = useIsAuthenticated();

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header onClickButton={handleOpen}>
        <UserAvatar />
      </Header>
      <SidebarWrapper
        authenticatedRoutes={[
          {
            item: "home",
            onClick: () => {
              if (pathname !== "/") {
                navigate("/");
              }
              handleClose();
            },
            selected: pathname === "/",
            fontAwesomeProps: {
              icon: faHome,
            },
            className: styles.listItem,
            divider: true,
            isAuthorized: isAuth,
          },
          {
            item: "Crear Pedido",
            onClick: () => {
              if (pathname !== "/crear-pedido") {
                navigate("/crear-pedido");
              }
              handleClose();
            },
            selected: pathname === "/",
            fontAwesomeProps: {
              icon: faPlus,
            },
            className: styles.listItem,
            divider: true,
            isAuthorized: isAuth,
          },
          {
            item: "Lista Pedidos",
            onClick: () => {
              if (pathname !== "/lista-pedidos") {
                navigate("/lista-pedidos");
              }
              handleClose();
            },
            selected: pathname === "/",
            fontAwesomeProps: {
              icon: faListUl,
            },
            className: styles.listItem,
            divider: true,
            isAuthorized: isAuth,
          },
        ]}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
