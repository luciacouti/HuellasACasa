import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MascotasList from "../MascotaList";

function ProfilePage() {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    fetch(`http://localhost:2023/api/profile`, {
      headers: { "auth-token": token },
    })
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, [navigate]);

  return (
    <div className="cuenta-bg">
      <div className="title-section cuenta px-3 px-md-5">
        <h2>Tu cuenta</h2>
        <h3>
          ¡Hola <span>{profile.name}</span>!
        </h3>
        <p>Desde esta sección podrás ver y administrar tus publicaciones</p>
      </div>
      <div className="container-cuenta">
        <MascotasList account={profile._id} />
      </div>
    </div>
  );
}

export default ProfilePage;
