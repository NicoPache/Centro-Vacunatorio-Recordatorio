import { crearErrorDatosInvalidos } from "../../compartido/errores/ErrorDatosInvalidos.js";

function crearPaciente(datos) {
  const paciente = {};
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (!datos.nombre) {
    console.log(datos);
    throw crearErrorDatosInvalidos("falta el nombre");
  } else {
    paciente.nombre = datos.nombre;
  }

  if (!datos.apellido) {
    throw crearErrorDatosInvalidos("falta el apellido");
  } else {
    paciente.apellido = datos.apellido;
  }

  if (!datos.email) {
    throw crearErrorDatosInvalidos("falta el email");
  }

  //verifica si es un email
  if (!emailFormat.test(datos.email)) {
    throw crearErrorDatosInvalidos("no se ingreso un email valido");
  } else {
    paciente.email = datos.email;
  }

  if (!datos.antecedentes) {
    throw crearErrorDatosInvalidos("falta antecedentes");
  } else {
    paciente.antecedentes = datos.antecedentes;
  }

  if (!datos.foto) {
    throw crearErrorDatosInvalidos("falta foto");
  } else {
    paciente.foto = datos.foto;
  }

  if (!datos.edad) {
    throw crearErrorDatosInvalidos("falta la edad");
  }

  if (isNaN(Number(datos.edad))) {
    throw crearErrorDatosInvalidos("la edad debe ser un entero");
  } else {
    paciente.edad = Number(datos.edad);
  }

  if (!datos.dni) {
    throw crearErrorDatosInvalidos("falta el dni");
  }

  if (isNaN(Number(datos.dni))) {
    throw crearErrorDatosInvalidos("el dni debe ser numerico");
  } else {
    paciente.dni = Number(datos.dni);
  }

  return paciente;
}

export { crearPaciente };
