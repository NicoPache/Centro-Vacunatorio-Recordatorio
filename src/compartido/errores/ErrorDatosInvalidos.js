function crearErrorDatosInvalidos(message) {
  const err = new Error(message);
  err.type = "ERROR_DATOS_INVALIDOS";
  return err;
}

export { crearErrorDatosInvalidos };
