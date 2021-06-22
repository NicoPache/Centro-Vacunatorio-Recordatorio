import { crearEmailModule } from "../../../compartido/moduloMailing/emailModule.js";
import { crearDaoSolicitudesDeTurno } from "../../persistencia/daos/daoSolicitudesDeTurno.js";
import { getDaoSolicitudes } from "../../persistencia/factoryDaoSolicitudes.js";
import { HabilitarSolicitud } from "./habilitarSolicitud.js";
import { getAuth, getAdminEmail } from "../../../config.js";

const emailModule = crearEmailModule(getAuth(), getAdminEmail());
const daoSolicitudes = crearDaoSolicitudesDeTurno();
const daoSolicitudesMongo = getDaoSolicitudes();

function crearCU_HabilitarPaciente() {
  return HabilitarSolicitud(daoSolicitudesMongo, emailModule);
}

export { crearCU_HabilitarPaciente };
