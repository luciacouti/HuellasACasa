import * as tokenService from "../services/token.services.js";

async function tokenVerify(req, res, next) {
  const token = req.headers["auth-token"];

  if (!token) {
    return res.status(401).json({ error: { message: "No se envio el token" } });
  }

  const tokenVerify = await tokenService.verifyToken(token);

  if (!tokenVerify) {
    return res.status(401).json({ error: { message: "Token no valido" } });
  }

  req.account = tokenVerify;

  next();
}

export { tokenVerify };
