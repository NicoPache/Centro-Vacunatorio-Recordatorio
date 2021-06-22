function crearErrorSolicitudExistente(message) {
  const err = new Error(message);
  err.type = "ERROR_SOLICITUD_EXISTENTE";
  return err;
}

export { crearErrorSolicitudExistente };
