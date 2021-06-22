import schedule from "node-schedule";
const tarea = [];

function crearTemporizador() {
  return {
    crearTemporizadorFechaHora: (nombre, rule, tarea) => {
      const job = new schedule.scheduleJob(nombre, rule, function () {
        tarea();
      });
    },

    cancelarTemporizador: (nombre) => {
      try {
        const current_job = schedule.scheduledJobs[nombre];
        current_job.cancel();
        console.log(`temporizador ${nombre} cancelado`);
      } catch (error) {
        throw console.error(error);
      }
    },

    modificarTemporizador: (nombre, rule) => {
      const current_j = schedule.scheduledJobs[nombre];
      current_j.cancel();
      current_j.runOnDate(rule);
    },
  };
}

export { crearTemporizador };
