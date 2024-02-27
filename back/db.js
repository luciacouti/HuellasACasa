import { MongoClient } from "mongodb";

// localhost IPv6 IPv4

const client = new MongoClient(
  "mongodb+srv://luciacoutinho:SU7FOR3ddcQirAFg@testtesis1.kpk1ogf.mongodb.net/?retryWrites=true&w=majority"
);
//const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("testTesis1");

client
  .connect()
  .then(function () {
    console.log("Coneccion exitosa!");

    db.collection("mascotas").insertOne({ name: "Node! otro dato!" });
  })
  .catch(function () {
    console.log("Coneccion incorrecta...");
  });
