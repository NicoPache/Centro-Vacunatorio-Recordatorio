import { crearFechaHelper } from "../../../compartido/fechaHelper/fechaHelper.js";
const fecha = crearFechaHelper();

function crearEnviadorRecordatorio(emailModule, dao) {
  return {
    recordarDiasAntes: (dias) => {
      enviarRecordatorioPorEstado(
        "CONFIRMADO_PARA_VACUNARSE",
        dias,
        dao,
        emailModule
      );
      enviarRecordatorioPorEstado(
        "VACUNADO_PRIMERA_DOSIS",
        dias,
        dao,
        emailModule
      );
    },
  };
}

async function enviarRecordatorioPorEstado(estado, dias, dao, emailModule) {
  const { solicitudes, found } = await dao.getByEstado(estado);
  if (found) {
    solicitudes.forEach((solicitud) => {
      if (solicitud.turno) {
        const diasPrevios = fecha.obtenerDiasDeDiferencia(
          solicitud.turno.fecha
        );
        if (diasPrevios == dias) {
          emailModule.avisoRecordatorio(solicitud);
        }
      }
    });
  }
}

export { crearEnviadorRecordatorio };
