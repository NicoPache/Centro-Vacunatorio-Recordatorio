import { crearSolicitudDeTurno } from "../../modelos/SolicitudDeTurnoOLD.js";
import { crearErrorSolicitudExistente } from "../../../compartido/errores/ErrorSolicitudExistente.js";

function HabilitarSolicitud(daoSolicitudesDeTurno, emailModule) {
  return {
    ejecutar: async (datosSolicitud) => {
      const solicitud = crearSolicitudDeTurno(datosSolicitud);
      const { added } = await daoSolicitudesDeTurno.addUnique(solicitud);
      if (!added) {
        throw crearErrorSolicitudExistente(
          "paciente ya tiene una solicitud asignada"
        );
      }
      await emailModule.avisoAPaciente(solicitud.paciente);
      await emailModule.avisoAAdmin(solicitud.paciente);

      return solicitud;
    },
  };
}

export { HabilitarSolicitud };
