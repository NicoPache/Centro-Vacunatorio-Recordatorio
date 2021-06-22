import { crearPaciente } from "./Paciente.js";
import { crearTurno } from "./Turno.js";
import { crearErrorDatosInvalidos } from "../../compartido/errores/ErrorDatosInvalidos.js";

const estadosDeSolicitud = [
  "PENDIENTE",
  "CONFIRMADO",
  "COMPLETADOPD",
  "COMPLETADOSD",
];

let idSolicitud = 0;

function crearSolicitudDeTurno(datos) {
  const solicitud = {};

  solicitud.paciente = crearPaciente(datos);

  if (!datos.turno) {
    solicitud.turno = null;
  } else {
    solicitud.turno = crearTurno(datos);
  }

  if (!datos.estado) {
    solicitud.estado = "PENDIENTE";
  } else {
    const esEstadoValido = estadosDeSolicitud.some((e) => {
      e === datos.estado;
    });
    if (!esEstadoValido) {
      throw crearErrorDatosInvalidos("estado de solicitud invalido");
    }
    solicitud.estado = datos.estado;
  }

  solicitud.id = idSolicitud++;

  return solicitud;
}

export { crearSolicitudDeTurno };
