import express from "express";
import { crearCU_HabilitarPaciente } from "../../negocio/habilitarSolicitud/CUFactory.js";
import { crearImageMiddleware } from "./imageMiddleware.js";
import { crearCuConfirmadorDeTurno } from "../../negocio/confirmadorDeTurno/confirmadorFactory.js";
import CUFactory from "../../negocio/confirmacionDeAplicacionDeDosis/CUFactory.js";

const imageMiddleware = crearImageMiddleware({
  dest: "./uploads",
  fieldName: "foto",
});

function crearRouterSolicitudes() {
  const routerSolicitudes = express.Router();

  routerSolicitudes.post("/", imageMiddleware, async (req, res, next) => {
    try {
      const CU_HabilitarPaciente = crearCU_HabilitarPaciente();
      const solicitud = await CU_HabilitarPaciente.ejecutar(req.body);

      res.status(200).json(solicitud);
    } catch (error) {
      next(error);
    }
  });

  routerSolicitudes.post("/vacunar/:dni", async (req, res, next) => {
    try {
      const CU_ConfirmacionAplicacionDeDosis =
      CUFactory.createCU_ConfirmacionAplicacionDeDosis();
      const pacienteAct = await CU_ConfirmacionAplicacionDeDosis.ejecutar(parseInt(req.params.dni, 10));
      res.status(200).json(pacienteAct);
    } catch (error) {
      next(error);
    }
  });

  routerSolicitudes.patch("/", async (req, res, next) => {
    const casoDeUso = await crearCuConfirmadorDeTurno();
    try {
      await casoDeUso.confirmarPaciente(req.body);
      res.json(200);
    } catch (error) {
      next(error);
    }
  });

  routerSolicitudes.use((error, req, res, next) => {
    if (error.type === "ERROR_DATOS_INVALIDOS") {
      res.status(400);
    } else if (error.type === "ERROR_SOLICITUD_EXISTENTE") {
      res.status(400);
    } else if (error.type === "ERROR_SOLICITUD_NO_ENCONTRADA") {
      res.status(404);
    } else if (error.type === "ERROR_DNI_INEXISTENTE") {
      res.status(404);
    }

    res.json({ message: error.message });
  });

  return routerSolicitudes;
}

export { crearRouterSolicitudes };
