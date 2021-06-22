import { crearEnviadorRecordatorio } from "./casoDeUso_enviarRecordatorio.js";
import { crearEmailModule } from "../../../compartido/moduloMailing/emailModule.js";
import { getDaoSolicitudes } from "../../persistencia/factoryDaoSolicitudes.js";
import { getAuth } from "../../../config.js";

function crearCURecodatorio() {
  const emailModule = crearEmailModule(getAuth());
  const dao = getDaoSolicitudes();
  const recordatorio = crearEnviadorRecordatorio(emailModule, dao);

  return recordatorio;
}

export { crearCURecodatorio };
