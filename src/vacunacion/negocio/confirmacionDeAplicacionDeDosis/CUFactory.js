import { crearCasoDeUso_ConfirmacionAplicacionDeDosis } from "./CU_ConfirmacionAplicacionDeDosis.js";
import { crearConversorPdf } from "../../../compartido/pdfer/ConvertirAPDF.js";
import { getDaoSolicitudes } from "../../persistencia/factoryDaoSolicitudes.js";
import {getAuth} from '../../../config.js'
import { createEmailComprobante } from "../../../compartido/moduloMailing/emailComprobante.js";
import {CrearPreparadorDeDatosParaPdf} from '../../../compartido/pdfer/PreparadorDeDatosPdf.js'

const auth = getAuth()


const pdfConversor = crearConversorPdf("./pdfs/");
const daoSolicitudes = getDaoSolicitudes();
const emailComprobante = createEmailComprobante(auth.mail, auth.pass)
const preparadorPdf = CrearPreparadorDeDatosParaPdf()

function createCU_ConfirmacionAplicacionDeDosis() {
  const CU_ConfirmacionAplicacionDeDosis =
    crearCasoDeUso_ConfirmacionAplicacionDeDosis(
      pdfConversor,
      daoSolicitudes,
      emailComprobante,
      preparadorPdf
    );

  return CU_ConfirmacionAplicacionDeDosis;
}

export default { createCU_ConfirmacionAplicacionDeDosis };
