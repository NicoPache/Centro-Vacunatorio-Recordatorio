import { createEmailComprobante } from "./emailComprobante.js";

function crearEmailModule(auth, adminEmail) {
  const emailComprobante = createEmailComprobante(auth.mail, auth.pass);

  return {
    avisoAPaciente: async (paciente) => {
      const mensaje = `${paciente.nombre} ${paciente.apellido} te avisamos que estas en la lista de espera para ser vacunado, te notificaremos cuando tengas un turno asignado`;

      const datosMail = {
        from: auth.user,
        to: paciente.email,
        asunto: "VACUNACION",
        mensaje: mensaje,
      };
      await emailComprobante.send(datosMail);
    },
    avisoAAdmin: async (paciente) => {
      const datosPaciente = `Nombre: ${paciente.nombre} ${paciente.apellido} <br/>
      Dni: ${paciente.dni} <br/>
      Edad: ${paciente.edad} <br/>
      Email: ${paciente.email} <br/>
      Antecedentes: ${paciente.antecedentes}`;
      const mensaje = `Nuevo paciente ingresado a la lista de espera, revise los datos y confirme su admision para asignarle un turno <br/> Datos del paciente: <br/>${datosPaciente}`;
      const datosMail = {
        from: auth.user,
        to: adminEmail,
        asunto: "Vacunatorio: Nuevo paciente ingresado",
        mensaje: mensaje,
        fileName: paciente.foto.fileName,
        root: paciente.foto.filePath,
        type: paciente.foto.type,
      };

      await emailComprobante.sendWithImage(datosMail);
    },
    avisoRecordatorio: async (solicitud) => {
      const mensaje = `<div> Hola ${solicitud.paciente.nombre},<br> Recordamos que tu fecha de vacunación es el: ${solicitud.turno.fecha}, te esperamos en el ${solicitud.turno.lugar}! </div>`;
      const subject =
        solicitud.estado == "CONFIRMADO_PARA_VACUNARSE"
          ? "Recordatorio primera dosis"
          : "Recordatorio segunda dosis";
      const datosMail = {
        from: "Vacunate",
        to: solicitud.paciente.email,
        subject: subject,
        mensaje: mensaje,
      };
      await emailComprobante.sendWithImageVacunate(datosMail);
    },
  };
}

export { crearEmailModule };
