// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CreadoConExito({ especie, categoria }) {
  return (
    <div className="exito row justify-content-center py-3">
      <div className="col-12 col-md-10 titulo-seccion text-center ">
        <h3>
          Tu {especie.toLowerCase()} {categoria.toLowerCase()} fue cargado con
          éxito{" "}
        </h3>
        {categoria === "Perdido" ? (
          <p>¡Esperamos que aparezca pronto!</p>
        ) : (
          <p>¡Esperamos que encuentres a sus dueños pronto!</p>
        )}
        <div className="check">
          <i className="bi bi-check-circle"></i>
        </div>
        <Link
          className="btn btn-naranja w-100"
          to={`../mascotas/${categoria}s`}
        >
          Volver al listado
        </Link>
      </div>
    </div>
  );
}

export default CreadoConExito;

CreadoConExito.propTypes = {
  especie: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
};
