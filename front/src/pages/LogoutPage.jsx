import { useState, useCallback, useContext } from "react";
import * as authService from "../services/auth.service";
import { AuthContext } from "../AuthContext";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

function LogoutPage() {
  const [success, setSuccess] = useState(false);
  const { setToken } = useContext(AuthContext);
  const { setUserData } = useContext(UserContext);

  const onSubmit = useCallback(() => {
    return authService
      .logout()
      .then((data) => {
        fetch(`http://localhost:2023/api/profile`, {
          headers: { "auth-token": data.token },
        }).then(() => {
          setToken(null);
          setUserData(null);
          localStorage.removeItem("token");
          setSuccess(true);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setToken, setUserData]);

  return (
    <section className="container">
      <div className="row justify-content-center div-portada py-5">
        {success ? (
          <>
            <div className="col-12 titulo-seccion sesion-cerrada">
              <h2>Sesión cerrada correctamente </h2>
              <i className="bi bi-check-circle"></i>
            </div>
            <div className="col-10 col-md-6 col-lg-4 text-cfenter">
              <Link className="btn btn-azul-outlines w-100" to="/login">
                Iniciar sesión
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="col-12 titulo-seccion text-center pb-1">
              <h2>¿Desea cerrar la sesión?</h2>
            </div>
            <div className="col-12">
              <div className="col-10 col-md-5 col-lg-3 mx-auto">
                <img
                  src="https://res.cloudinary.com/huellasacasa/image/upload/v1708914197/huellasacasa/tuosipmko94l1nydyrdu.png"
                  alt="Hamster"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-6 col-md-5 col-lg-4">
              <Link
                className="btn btn-azul-outlines w-100"
                to="/mascotas/perdidos"
              >
                Volver
              </Link>
            </div>
            <div className="col-6 col-md-5 col-lg-4">
              <button
                className="btn btn-naranja w-100"
                type="submit"
                onClick={onSubmit}
              >
                Cerrar Sesión
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default LogoutPage;
