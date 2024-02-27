import EditarMascota from "../../EditarMascota";
import { useParams } from "react-router-dom";

function EditarMascotaPage() {
  const { idMascota } = useParams();
  return (
    <>
      <div className="header-section-bg">
        <div className="header-section container-fluid mx-0">
          <div className="row justify-content-center">
            <div className="col-12 title-section px-md-5">
              <h2>Modificar publicación</h2>
              <h3>Editar Mascota</h3>
              {/* <p>
                Completá los datos para cargar una nueva mascota al listado de
                búsqueda
              </p> */}
            </div>
          </div>
        </div>
        <div className="container">
          <EditarMascota idMascota={idMascota} />
        </div>
      </div>
    </>
  );
}

export default EditarMascotaPage;
