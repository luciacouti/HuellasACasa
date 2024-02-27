import * as service from "../../services/account.services.js";
import * as tokenService from "../../services/token.services.js";
import * as profileService from "../../services/profile.services.js";
import * as accountService from "../../services/account.services.js";
import * as mascotaService from "../../services/mascotas.services.js";
import { SendUserEmail } from "../../services/mail.services.js";



async function createAccount(req, res) {
  return service
    .createAccount(req.body)
    .then(()=>SendUserEmail(req.body.email))
    .then(() => {
      res.status(201).json({ message: "La cuenta fue creado correctamente" });
    })
    .catch((err) => {
      res.status(400).json({ error: { message: err.message } });
    });
}

async function createProfile(req, res) {
  return profileService
    .createProfile(req.account, req.body)
    .then(() => {
      res.status(201).json({ message: "Perfil actualizado correctamente." });
    })
    .catch((err) => {
      res.status(400).json({ error: { message: err.message } });
    });
}

async function getProfile(req, res) {
  try {
    const accountData = await accountService.getAccount(req.account._id);
    const mascotas = await mascotaService.getMascotasDeUsuario(req.account._id);
    res.send({ ...accountData, mascotas });
  } catch (err) {
    res.status(400).json({ error: { message: err.message } });
  }
}

async function login(req, res) {
  return service
    .login(req.body)
    .then(async (account) => {
      return { token: await tokenService.createToken(account), account };
    })
    .then((token) => {
      res.status(200).json(token);
    })
    .catch((err) => {
      res.status(400).json({ error: { message: err.message } });
    });
}

async function logout(req, res) {
  const token = req.headers["auth-token"];
  const account = req.account;

  return tokenService
    .removeToken(token, account)
    .then(() => {
      res.status(200).json({ message: "La cuenta fue cerrada correctamente" });
    })
    .catch((err) => {
      res.status(400).json({ error: { message: err.message } });
    });
}

export { createAccount, login, logout, createProfile, getProfile };
