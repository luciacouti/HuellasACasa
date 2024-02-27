import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function GoogleMapComponent({ setCoordenadas,coordenadas }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAysD0sRkRxVXhm0wsKiMFEoLqzWiaXyXU",
  });

  const [map, setMap] = useState(null);
  const [marcadorPosition, setMarcadorPosition] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);

  const obtenerUbicacion = () => {
    if (coordenadas) {
      const {lat,lng} = coordenadas
      setUbicacion({ lat: Number(lat), lng: Number(lng)});
      setMarcadorPosition({ lat: Number(lat), lng: Number(lng)})
      return null
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUbicacion({ lat: latitude, lng: longitude });

        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      console.error("La geolocalización no está disponible en este navegador.");
    }
  };

  const handleClick = (e) => {
    if (coordenadas) return null
    setMarcadorPosition({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
    setCoordenadas({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  useEffect(() => {
    obtenerUbicacion();
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={ubicacion}
      zoom={15}
      onUnmount={onUnmount}
      onClick={handleClick}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={marcadorPosition} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMapComponent;
