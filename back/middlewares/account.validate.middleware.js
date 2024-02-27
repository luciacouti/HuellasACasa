import * as scheme from "../schemes/account.schemes.js";

async function validateAccount(req, res, next) {
  return scheme.account
    .validate(req.body, { abortEarly: false, stripUnknown: true })
    .then((account) => {
      req.body = account;
      next();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

async function validateLogin(req, res, next) {
  return scheme.login
    .validate(req.body, { abortEarly: false, stripUnknown: true })
    .then((account) => {
      req.body = account;
      next();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

async function validateProfile(req, res, next) {
  return scheme.profile
    .validate(req.body, { abortEarly: false, stripUnknown: true })
    .then((profile) => {
      req.body = profile;
      next();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export { validateAccount, validateProfile, validateLogin };
