import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import "minireset.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import appLogo from "./assets/img/logo_horizontal.png";

import "./App.css";
export function App() {
  const { token } = useContext(AuthContext);
  return (
    <div className="App">
      <header id="header" className="fixed-top mb-5">
        <nav className="navbar navbar-expand-lg py-0 px-md-4">
          <div className="container-fluid">
            <Link to="/">
              {" "}
              <div className="logo mx-auto mx-lg-1 mr-lg-auto">
                <img
                  src={appLogo}
                  alt="Logo Hoggo"
                  className="img-fluid"
                  id="logo-header"
                />{" "}
              </div>{" "}
              <h1 className="d-none">Huellas a Casa</h1>
            </Link>
            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-menu" id="navbarNav">
              <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <li>
                    <Link to="/mascotas/perdidos">Perdidos</Link>
                  </li>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link to="/mascotas/encontrados">Encontrados</Link>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-center ml-auto mb-2 mb-lg-0">
                {token ? (
                  <>
                    <li className="nav-item">
                      {" "}
                      <Link to="/profile">Cuenta</Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link to="/logout">Cerrar sesión</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      {" "}
                      <Link to="/register">Registrate</Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link to="/login">Iniciar sesión</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      {/* <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"
        crossOrigin="anonymous"
      ></script> */}
      <footer className="footer sticky-footer d-none">
        <div className="container footer-bottom">
          <div className="row justify-content-center">
            <div className="col-12 menosp">
              <div className="text-center">
                <p className="mb-0">Coutinho Lucia - DWM4AV</p>
                <p>Proyecto Final</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
