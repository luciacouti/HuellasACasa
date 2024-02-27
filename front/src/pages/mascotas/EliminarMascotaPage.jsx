import EliminarMascota from "../../EliminarMascota";
import { useParams } from "react-router-dom";

function EliminarMascotaPage() {
  const { idMascota } = useParams();
  return (
    <>
      <div className="header-section-bg">
        <div className="header-section container-fluid mx-0">
          <div className="row justify-content-center">
            <div className="col-12 title-section px-md-5">
              <h2>Eliminar mascota</h2>
              <h3>¿Deseas eliminar esta publicación?</h3>
              {/* <p>
                Completá los datos para cargar una nueva mascota al listado de
                búsqueda
              </p> */}
            </div>
          </div>
        </div>
        <div className="container listado-perros">
          <EliminarMascota idMascota={idMascota} />
        </div>
      </div>
    </>
  );
}

export default EliminarMascotaPage;
