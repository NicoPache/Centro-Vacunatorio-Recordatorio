import moment from "moment";

const crearFechaHelper = () => {
  return {
    obtenerDiasDeDiferencia: (fecha) => {
      const tipoDiferencia = "days";
      const hoy = moment(moment().format("YYYY-MM-DD"));
      const dia = tranformarFecha(fecha);
      return dia.diff(hoy, tipoDiferencia);
    },

    obtenerDifereciaEntreDosDias(desde, hasta) {
      const tipoDiferencia = "days";
      const fecha1 = tranformarFecha(hasta);
      const fecha2 = tranformarFecha(desde);
      return fecha1.diff(fecha2, tipoDiferencia);
    },

    sumarDias(cant, fecha) {
      const fechaMoment = tranformarFecha(fecha);
      fechaMoment.add(cant, "days");

      return fechaMoment.format("DD-MM-YYYY");
    },
  };
};

function tranformarFecha(fecha) {
  const fechaArray = fecha.split("-");
  const fechaMomentPersona = moment(
    `${fechaArray[2]}-${fechaArray[1]}-${fechaArray[0]}`
  );
  return fechaMomentPersona;
}

export { crearFechaHelper };
