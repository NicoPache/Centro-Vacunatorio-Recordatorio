import { crearDaoSolicitudesMongo } from "./mongo/daoSolicitudesMongo.js";
import { crearMongoClient } from "./mongo/mongoClient.js";
import { getDBAuth } from "../../config.js";

const conectionStr = getDBAuth();
const mongoClient = crearMongoClient(conectionStr);
const db = await mongoClient.connect();
const ultimaSolicitud = await db
  .collection("solicitudes")
  .find({})
  .sort({ id: -1 })
  .limit(1)
  .toArray();
const lastId = ultimaSolicitud[0].id;
const daoSolicitudesMongo = crearDaoSolicitudesMongo(db, lastId);

function getDaoSolicitudes() {
  return daoSolicitudesMongo;
}

export { getDaoSolicitudes };
