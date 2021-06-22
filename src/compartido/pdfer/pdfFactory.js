import { crearConversorPdf } from "./ConvertirAPDF.js";

const ruta = "./Pdfs";

function crearPdfer() {
  return crearConversorPdf(ruta);
}

export { crearPdfer };
