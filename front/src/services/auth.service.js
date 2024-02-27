import API from "./api.service";

async function login({ userName, password }) {
  return API.call({
    uri: "session",
    method: "POST",
    body: { userName, password },
  });
}

async function logout() {
  return API.call({
    uri: "session",
    method: "DELETE",
  });
}

async function register({ name, email, userName, password }) {
  return API.call({
    uri: "account",
    method: "POST",
    body: { name, email, userName, password },
  });
}

export { login, logout, register };
