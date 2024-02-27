import express from "express";
import MascotaRouteApi from "./api/routes/mascotas.api.routes.js";
import AccountRouteApi from "./api/routes/account.api.routes.js";
import cors from "cors";
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'huellasacasa', 
  api_key: '749873276873579', 
  api_secret: 'ob9NWMx-JFnxrYgO8UknaL5Y5eE' 
});

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use("/api", express.json());

app.use("/", express.static("public"));
app.use("/mascotas/img", express.static("content/img/mascotas"));

app.use("/api", MascotaRouteApi);
app.use("/api", AccountRouteApi);

app.listen(2023, function () {
  console.log("Servidor levantado! http://localhost:2023");
});
