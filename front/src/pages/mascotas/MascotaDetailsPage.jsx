import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GoogleMapComponent from "../../GoogleMaps";

function MascotaDetailsPage() {
  const [mascota, setMascota] = useState({});
  const { idMascota } = useParams();

  useEffect(() => {
    fetch(`http://localhost:2023/api/mascotas/${idMascota}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMascota(data);
        }
      });
  }, [idMascota]);

  // Función para renderizar el mapa con las coordenadas de la mascota
  const renderizarMapa = () => {
    if (mascota?.ubicacion) {
      return <GoogleMapComponent coordenadas={mascota?.ubicacion} />;
    } else {
      return <p>Ubicación no disponible</p>;
    }
  };

  return (
    <section className="container detalle-perrito px-lg-5 mx-lg-5 pt-0">
      <div id="detalle-perdidos_body px-lg-5 mx-lg-5" className="container">
        <div className="row">
          <div className="col-12 pb-3">
            <Link
              to={`/mascotas/${mascota?.categoria?.toLowerCase()}s`}
              className="naranja volver text-white"
            >
              <i className="bi bi-arrow-left"></i>Volver al listado de mascotas{" "}
              {mascota?.categoria?.toLowerCase().slice(0, -1) + "as"}
            </Link>
          </div>
          <div className="col-xs-6 col-md-6 col-lg-7">
            <img src={mascota?.imagen} className="w-100" alt="Perro perdido" />
            <div className="w-100 btn btn-naranja text-white py-2 my-2">
              <Link
                to={`https://wa.me/${
                  mascota?.whatsapp
                }?text=Hola!%20Tengo%20información%20sobre%20tu%20${mascota?.especie?.toLowerCase()}%20${mascota?.categoria?.toLowerCase()}%20${
                  mascota?.nombre
                }`}
                target="_blank"
                className="text-white"
              >
                <i className="bi bi-whatsapp"></i> Tengo Información sobre{" "}
                {mascota?.nombre}
              </Link>
            </div>
            <div className="w-100 btn btn-naranja text-white py-2 my-2">
              <Link
                to={`mailto:${mascota?.mail}`}
                target="_blank"
                className="text-white"
              >
                <i className="bi bi-envelope"></i> Avisar que ví a{" "}
                {mascota?.nombre}
              </Link>
            </div>
          </div>

          <div className="col-xs-6 col-md-6 col-lg-5">
            <div className="info-detalle-perrito">
              <h2 className="mt-1">
                Información del{" "}
                <span className="naranja">
                  {" "}
                  {mascota?.especie?.toLowerCase()}{" "}
                  {mascota?.categoria?.toLowerCase()}
                </span>
              </h2>
              <ul className="ml-0">
                <li>
                  <strong>Nombre</strong>: {mascota?.nombre}
                </li>
                <li>
                  <strong>Sexo</strong>: {mascota?.sexo}
                </li>
                <li>
                  <strong>Tamaño</strong>: {mascota?.tamano}
                </li>
                <li>
                  <strong>Color</strong>: {mascota?.color}
                </li>
                <li>
                  <strong>Raza</strong>: {mascota?.raza}
                </li>
                <li>
                  <strong>Edad</strong>: {mascota?.edad}
                </li>
                <li>
                  <strong>Provincia</strong>: {mascota?.provincia}
                </li>
                <li>
                  <strong>Localidad</strong>: {mascota?.municipio}
                </li>
                <li>
                  <strong>Fecha en la que se perdió</strong>: {mascota?.fecha}
                </li>
                <li>
                  <strong>Descripción</strong>: {mascota?.descripcion}
                </li>
                <li>
                  <strong>Celular de contacto</strong>: {mascota?.celular}
                </li>
                <li>
                  <strong>WhatsApp de contacto</strong>: {mascota?.whatsapp}
                </li>
              </ul>
            </div>
            <div className="info-detalle-perrito">
              <h2 className="mt-1">
                Ubicación del{" "}
                <span className="naranja">
                  {" "}
                  {mascota?.especie?.toLowerCase()}{" "}
                  {mascota?.categoria?.toLowerCase()}
                </span>
              </h2>
              {renderizarMapa()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MascotaDetailsPage;
