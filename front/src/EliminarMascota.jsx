import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MascotaListItem.css";
import "./App.css";

function EliminarMascota({ idMascota }) {
  const [mascota, setMascota] = useState({});

  useEffect(() => {
    fetch(`http://localhost:2023/api/mascotas/${idMascota}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMascota(data);
        }
      });
  }, [idMascota]);

  const handleEliminar = () => {
    fetch(`http://localhost:2023/api/mascotas/${idMascota}`, {
      method: "DELETE",
    })
      .then((response) => {
        window.location.href = `/mascotas/${mascota.categoria}s`;
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="row justify-content-center">
      {/* card de la mascota */}
      <div className="col-md-10 col-12 d-flex align-items-stretch px-2 px-md-3 mb-4 ">
        <Link to={`/mascotas/${mascota._id}`} className="mascota-view">
          <div className="card-perro eliminarpubli row justify-content-start align-items-stretch">
            <div className="col-5 px-0">
              <img
                src={mascota.imagen}
                className="img-fluid rounded-img-full"
              />
            </div>
            <div className="col-7 card-perro-content pb-3 pt-2 text-left px-4">
              <h4>{mascota.nombre}</h4>
              <span>{mascota.raza}</span>
              <div className="div-ubicacion d-flex align-items-center">
                <p>
                  <i className="icofont-location-pin icofont-2x ml-auto"></i>
                  {mascota.zona_perdida}
                </p>
              </div>
              {/* boton para eliminar mascota    */}
              <Link to={`/mascotas/${mascota.categoria}s`}>
                <button className="btn btn-azul-outlines w-100 my-1">
                  Cancelar
                </button>
              </Link>
              <button
                className="btn btn-naranja w-100 my-1"
                onClick={handleEliminar}
              >
                Eliminar
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EliminarMascota;

EliminarMascota.propTypes = {
  idMascota: PropTypes.string.isRequired,
};
