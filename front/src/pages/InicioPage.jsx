// import MascotaList from "../../MascotaList";
// import React from "react";
import { Link } from "react-router-dom";

import appLogo from "../assets/img/logo_huellas_a_casa_color_horizontal.svg";
import portadaPerdidosDesktop from "../assets/img/portadas-inicio-mascotas-perdidas-desktop.jpg";
import portadaPerdidosMobile from "../assets/img/portadas-inicio-mascotas-perdidas-mobile.jpg";
import portadaEncontradosDesktop from "../assets/img/portadas-inicio-mascotas-encontradas-desktop.jpg";
import portadaEncontradosMobile from "../assets/img/portadas-inicio-mascotas-encontradas-mobile.jpg";
import imgAcerca from "../assets/img/about.png";

function InicioPage() {
  return (
    <>
      <div className="seccion-inicio">
        <section className="pt-0 pb-0 pb-md-3 hero">
          <div className="hero-container d-none d-md-block align-items-center">
            <div className="container align-items-center">
              <div className="row justify-content-start align-items-center">
                <div className="col-10 col-md-5 col-lg-5 py-3">
                  <img
                    src={appLogo}
                    alt="Logo Huellas a Casa"
                    className="img-fluid logo-hero"
                  />
                  <h2 className="">
                    Publicá mascotas
                    <br />
                    perdidas y encontradas
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-mobile d-md-none pt-3">
            <div className="container align-items-center">
              <div className="row justify-content-center align-items-center">
                <div className="col-11 py-3">
                  <img
                    src={appLogo}
                    alt="Logo Huellas a Casa"
                    className="img-fluid logo-hero py-0 my-0"
                  />
                  <h2 className="text-center">
                    Publicá mascotas
                    <br />
                    perdidas y encontradas
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="perdidos mt-0 mt-md-5 pt-md-5">
        <div className="container px-md-5">
          <div className="row justify-content-center">
            <div
              className="col-12 col-md-6 d-flex align-items-stretch px-2 px-md-3 text-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Link to="/mascotas/perdidos">
                <div className="div-portada">
                  <picture className="img-fluid">
                    <source
                      media="(max-width:576px)"
                      srcSet={portadaPerdidosDesktop}
                    />
                    <source
                      media="(max-width:768px)"
                      srcSet={portadaPerdidosMobile}
                    />

                    <img
                      src={portadaPerdidosDesktop}
                      className="d-block w-100 img-fluid"
                      alt="Perros perdidos"
                    />
                  </picture>
                </div>

                <p className="d-none d-md-block">
                  Publicá una foto de tu mascota perdida para que los demás te
                  ayuden a buscarla
                </p>
              </Link>
            </div>

            <div
              className="col-12 col-md-6 d-flex align-items-stretch px-2 px-md-3 text-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Link to="/mascotas/encontrados">
                <div className="div-portada">
                  <picture className="img-fluid">
                    <source
                      media="(max-width:576px)"
                      srcSet={portadaEncontradosDesktop}
                    />
                    <source
                      media="(max-width:768px)"
                      srcSet={portadaEncontradosMobile}
                    />

                    <img
                      src={portadaEncontradosDesktop}
                      className="d-block w-100 img-fluid"
                      alt="Perros encontrados"
                    />
                  </picture>
                </div>
                <p className="d-none d-md-block">
                  Publicá a la mascota que encontraste perdida para que sus
                  dueños <i className="fas fa-lastfm    "></i> encuentren
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Acerca ======= --> */}
      <section className="acerca-info app mt-0 mt-md-3 pt-0">
        <div className="container px-4 px-md-5">
          <div className="row justify-content-center justify-content-lg-between">
            <div className="col-8 col-lg-4 align-items-center order-1 img pt-md-5 mockup">
              <figure>
                <img
                  src={imgAcerca}
                  alt="¿Qué es huellas a casa?"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-md-12 col-lg-7 d-flex flex-column justify-content-center align-items-md-stretch order-2 order-md-1">
              <div>
                <div className="titulo-seccion text-center pb-3 mb-0">
                  <h2 className="pb-0 mb-0 text-lg-left ml-0 pl-0">
                    ¿Qué es <em>Huellas a Casa</em>?
                  </h2>
                </div>

                <p>
                  Muchas veces nos hemos encontrado ante la situación de ver a
                  una persona poniendo un cartel en la calle o subiendo una foto
                  en las redes sociales avisando que se perdió su perro. Pero
                  también hemos visto que muchas personas encuentran perros o
                  gatos solos y perdidos en la calle y también los publican
                  buscando encontrar a sus dueños, que tal vez nunca vean esa
                  foto.
                </p>
                <p>
                  <strong>
                    Huellas a Casa es una plataforma que ayuda a conectar a los
                    dueños de las mascotas perdidas con las personas que las
                    encontraron.
                  </strong>
                </p>
                <p>
                  La página brinda la posibilidad a las personas que perdieron a
                  sus mascotas de publicar una foto de ellas junto con los datos
                  de contacto. De esta manera, si alguien encuentra un perro en
                  la calle y no sabe quién es su dueño, podrá entrar al
                  <em>listado de perros perdidos</em>, ver si coinciden los
                  rasgos con alguno de los publicados y contactar así a sus
                  dueños. Si no halla ningún perrito parecido, también podrá
                  publicar al que encontró en la sección de
                  <em>encontrados</em>, a la que van a poder acceder los dueños
                  que están buscando a sus perros para ver si alguien los ha
                  encontrado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Fin acerca --> */}
    </>
  );
}

export default InicioPage;
