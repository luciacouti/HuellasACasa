import { MongoClient, ObjectId } from "mongodb";
import bcrypt from "bcrypt";

const client = new MongoClient(
  "mongodb+srv://luciacoutinho:SU7FOR3ddcQirAFg@testtesis1.kpk1ogf.mongodb.net/?retryWrites=true&w=majority"
);
//const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("testTesis1");
const accounts = db.collection("accounts");

async function createAccount(account) {
  await client.connect();

  const accountExist = await accounts.findOne({ userName: account.userName });

  if (accountExist) {
    throw new Error("El nombre usuario ya se encuentra en uso.");
  }

  const newAccoutn = {
    ...account,
  };

  const salt = await bcrypt.genSalt(10);

  newAccoutn.password = await bcrypt.hash(account.password, salt);

  await accounts.insertOne(newAccoutn);
}

async function login(account) {
  await client.connect();

  const accountExist = await accounts.findOne({ userName: account.userName });

  if (!accountExist) {
    throw new Error("El usuario no existe");
  }

  const isMatch = await bcrypt.compare(account.password, accountExist.password);
  if (!isMatch) {
    throw new Error("Password incorrecto");
  }

  return { ...accountExist, password: undefined };
}

async function getAccount(idAccount) {
  await client.connect();
  const account = await accounts.findOne({ _id: new ObjectId(idAccount) });

  if (!account) {
    throw new Error("El usuario no existe");
  }

  return account;
}

export { createAccount, login, getAccount };
