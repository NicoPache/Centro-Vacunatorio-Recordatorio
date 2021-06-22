import { crearErrorDatosInvalidos } from "../../compartido/errores/ErrorDatosInvalidos.js";

const tiposDeVacunaAceptadas = ["sputnik-v", "covishield", "sinopharm"];

function crearTurno(datos) {
  const turno = {};
  const dateFormat = /^(\d{2})\-(\d{2})\-(\d{4})$/;
  let esVacunaAceptada = false;

  if (!datos.fecha) {
    turno.fecha = undefined;
  } else if (!dateFormat.test(datos.fecha)) {
    throw crearErrorDatosInvalidos("fecha invalida");
  } else {
    turno.fecha = datos.fecha;
  }

  if (!datos.lugarVac) {
    throw crearErrorDatosInvalidos("falta el lugar de vacunacion");
  }

  if (!datos.tipoVacuna) {
    throw crearErrorDatosInvalidos("falta el tipo de vacuna");
  } else {
    esVacunaAceptada = tiposDeVacunaAceptadas.some(
      (vacunaAceptada) => vacunaAceptada === datos.tipoVacuna
    );
  }

  if (!esVacunaAceptada) {
    throw crearErrorDatosInvalidos("tipo de vacuna incorrecta");
  } else {
    turno.tipoVacuna = datos.tipoVacuna;
  }

  if (!datos.lugarVac) {
    throw crearErrorDatosInvalidos("falta el lugar de vacunacion");
  } else {
    turno.lugarVac = datos.lugarVac;
  }

  turno.fueAplicada = false;

  return turno;
}

export { crearTurno };
