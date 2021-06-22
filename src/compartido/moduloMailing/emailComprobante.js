import { createEmailSender } from "./emailSender.js";
import { createEmailBuilder } from "./emailBuilder.js";

function createEmailComprobante(user, pass) {
  const builder = createEmailBuilder();
  const sender = createEmailSender(user, pass);

  return {
    send: async (datos) => {
      let email = builder.createEmailPlainText(
        datos.from,
        datos.to,
        datos.asunto,
        datos.mensaje
      );
      await sender.send(email);
    },

    sendWithImage: async (datos) => {
      let email = builder.createEmailWithAttachment(
        datos.from,
        datos.to,
        datos.asunto,
        datos.mensaje,
        datos.fileName,
        datos.root,
        datos.type
      );
      await sender.send(email);
    },
    sendWithImageVacunate: async (datos) => {
      let email = builder.createEmailWithImage(
        datos.from,
        datos.to,
        datos.subject,
        datos.mensaje
      );
      await sender.send(email);
    },
    sendEmailWithAttachment: async (to, nombrePdf, pdfPath) => {
      let email =  builder.createEmailWithAttachment('Yo', to, "Datos para su vacunacion", "<h1> Datos de su vacunacion ! </h1> <b> Usted recibió adjunto en un pdf los datos para su vacunación</b>", nombrePdf, pdfPath, "application/pdf");
      sender.send(email);
  },
    
  };
}

export { createEmailComprobante };
