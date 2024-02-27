import CrearMascota from "../../CrearMascota";

function CrearMascotaPage() {
  return (
    <>
      <section className="header-section-bg">
        <div className="header-section container-fluid mx-0">
          <div className="row justify-content-center">
            <div className="col-12 title-section px-md-5">
              <h2>Nueva Publicación</h2>
              <h3>Crear Mascota</h3>
              <p>
                Completá los datos para cargar una nueva mascota al listado de
                búsqueda
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <CrearMascota />
        </div>
      </section>
    </>
  );
}

export default CrearMascotaPage;
