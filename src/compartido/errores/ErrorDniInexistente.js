function crearErrorDniInexistente(message) {
  const err = new Error(message);
  err.type = "ERROR_DNI_INEXISTENTE";
  return err;
}

export { crearErrorDniInexistente };
