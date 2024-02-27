import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://luciacoutinho:SU7FOR3ddcQirAFg@testtesis1.kpk1ogf.mongodb.net/?retryWrites=true&w=majority"
);
//const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("testTesis1");

async function getMascotasDeUsuario(idAccount) {
  await client.connect();
  const filterMongo = { deleted: { $ne: true }, account: idAccount };

  return db.collection("mascotas").find(filterMongo).toArray();
}

async function getMascotas(filter = {}) {
  await client.connect();

  const filterMongo = { deleted: { $ne: true } };

  const regex = new RegExp(filter.nombre, "i");
  if (filter?.nombre) {
    filterMongo.$and = [{ nombre: { $regex: regex } }];
  }

  if (filter?.categoria) {
    filterMongo.categoria = filter.categoria;
  }

  if (filter?.account) {
    filterMongo.account = filter.account;
  }

  return db.collection("mascotas").find(filterMongo).toArray();
}

async function getMascotaById(id) {
  await client.connect();
  return db.collection("mascotas").findOne({ _id: new ObjectId(id) });
}

async function createMascota(mascota, account) {
  await client.connect();
  await db.collection("mascotas").insertOne({ ...mascota, account });
  return mascota;
}

async function editMascota(idMascota, mascota) {
  await client.connect();
  const documentoExistente = await db
    .collection("mascotas")
    .findOne({ _id: new ObjectId(idMascota) });
  const nuevoDocumento = { ...documentoExistente, ...mascota };
  await db
    .collection("mascotas")
    .updateOne({ _id: new ObjectId(idMascota) }, { $set: nuevoDocumento });
  client.close();
  return mascota;
}

async function replaceMascota(idMascota, mascota) {
  await client.connect();
  await db
    .collection("mascotas")
    .replaceOne({ _id: new ObjectId(idMascota) }, mascota);
  return mascota;
}

async function deleteMascota(idMascota) {
  await client.connect();
  await db.collection("mascotas").deleteOne({ _id: new ObjectId(idMascota) });

  return {
    id: idMascota,
  };
}

export {
  getMascotas,
  getMascotaById,
  createMascota,
  editMascota,
  deleteMascota,
  replaceMascota,
  getMascotasDeUsuario,
};
