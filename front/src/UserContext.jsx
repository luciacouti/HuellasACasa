import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:2023/api/profile`, {
      headers: { "auth-token": localStorage.getItem("token") },
    })
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [setUserData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
