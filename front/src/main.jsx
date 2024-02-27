import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error404 from "./pages/Error404";
import "bootstrap/dist/css/bootstrap.css";
import MascotaListPage from "./pages/mascotas/MascotaListPage";
import MascotaDetailsPage from "./pages/mascotas/MascotaDetailsPage";
import CrearMascotaPage from "./pages/mascotas/CrearMascotaPage";
import EditarMascotaPage from "./pages/mascotas/EditarMascotaPage";
import EliminarMascotaPage from "./pages/mascotas/EliminarMascotaPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";
import InicioPage from "./pages/InicioPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <InicioPage />,
      },
      {
        path: "mascotas/perdidos",
        element: <MascotaListPage categoria="Perdido" />,
      },
      {
        path: "mascotas/encontrados",
        element: <MascotaListPage categoria="Encontrado" />,
      },

      {
        path: "mascotas/:idMascota",
        element: <MascotaDetailsPage />,
      },
      {
        path: "mascotas/nuevo",
        element: <CrearMascotaPage />,
      },
      {
        path: "mascotas/perdidos/editar/:idMascota",
        element: <EditarMascotaPage categoria="Perdido" />,
      },
      {
        path: "mascotas/encontrados/editar/:idMascota",
        element: <EditarMascotaPage categoria="Encontrado" />,
      },
      {
        path: "mascotas/encontrados/eliminar/:idMascota",
        element: <EliminarMascotaPage categoria="Encontrado" />,
      },
      {
        path: "mascotas/perdidos/eliminar/:idMascota",
        element: <EliminarMascotaPage categoria="Perdido" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
      //  {
      //   path: "mascotas/nuevo",
      //   element: <CreadoConExito />,
      // },
      /*{
        path: 'mascotas/crear',
        element: <CrearMascota />
      },*/
    ],
  },
]);

// JSX
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
