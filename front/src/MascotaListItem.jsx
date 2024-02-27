import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MascotaListItem.css";
import { useContext } from "react";
import { UserContext } from "./UserContext";

("C:/Users/lucia/Documents/Diseño Web/4to Cuatrimestre/Proyecto Final/Huellas a Casa- App programación/Desarrollo/Tesis 1_8");

function MascotaListItem({ mascota }) {
  const { userData } = useContext(UserContext);
  return (
    <div className="col-xl-3 col-md-4 col-6 d-flex align-items-stretch px-2 px-md-3 px-xl-2 mb-4">
      <Link to={`/mascotas/${mascota._id}`} className="mascota-view">
        <div className="card-perro">
          {mascota.aparecio && (
            <div className="encontrado-label">Encontrado</div>
          )}
          <div
            className={`contenido-card ${
              mascota.aparecio ? "aparecio-true" : ""
            }`}
          >
            <img
              // TODO: Cambiar el url por el url posta (esto es re villero)
              //src={`http://127.0.0.1:2023/api/mascotas/imagen/${mascota.imagen}`}
              src={mascota.imagen}
              className="img-fluid rounded-img"
            />
            <div className="card-perro-content pb-3 pt-2">
              <h3>{mascota.nombre}</h3>
              <span>{mascota.raza}</span>
              <div className="div-ubicacion d-flex justify-content-around align-items-center">
                <p>
                  <i className="icofont-location-pin icofont-2x ml-auto"></i>
                  {mascota.provincia}
                </p>
              </div>
              {userData && userData._id && userData._id == mascota.account ? (
                <div className="botones row">
                  <div className="col-6 p-1">
                    <Link
                      to={`/mascotas/${mascota.categoria}s/eliminar/${mascota._id}`}
                    >
                      <button className="btn btn-naranja btn-block w-100 px-0 px-lg-1">
                        <span className="d-none d-md-block">Eliminar</span>{" "}
                        <i className="bi bi-trash-fill d-md-none"></i>
                      </button>
                    </Link>
                  </div>
                  <div className="col-6 p-1">
                    <Link
                      to={`/mascotas/${mascota.categoria}s/editar/${mascota._id}`}
                    >
                      <button className="btn btn-azul btn-block w-100 px-0 px-lg-1">
                        <span className="d-none d-md-block">Editar</span>{" "}
                        <i className="bi bi-pencil-fill d-md-none"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

MascotaListItem.propTypes = {
  mascota: PropTypes.object.isRequired,
  account: PropTypes.string,
};

export default MascotaListItem;
