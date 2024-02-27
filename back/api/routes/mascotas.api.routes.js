import { Router } from "express";
import * as controller from "../controllers/mascotas.api.controllers.js";
import {
  validateMascota,
  validateEditMascota,
} from "../../middlewares/mascotas.validate.middlewares.js";
import { tokenVerify } from "../../middlewares/token.validate.middleware.js";
import { v4 as uuidv4 } from "uuid";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    const uuid = uuidv4();
    cb(null, `${Date.now()}_${uuid}.jpg`);
  },
});
const upload = multer({ storage: storage });

const route = Router();

route.get("/mascotas/imagen/:imagen", controller.getImagenMascota)
route.get("/mascotas", controller.getMascotas);
route.get("/mascotas/:idMascota", controller.getMascotaById);
// route.post(
//   "/mascotas",
//   [tokenVerify, upload.single(), validateMascota],
//   function (req, res) {
//     console.log("Body:", req.body);
//     console.log("Files:", req.file);

//     res.send("Se recibió el archivo!");
//   }
// );
route.post(
  "/mascotas",
  [tokenVerify, upload.single(), validateMascota],
  controller.createMascota
);

route.patch(
  "/mascotas/:idMascota",
  [validateEditMascota],
  controller.editMascota
);
route.delete("/mascotas/:idMascota", controller.deleteMascota);

export default route;
