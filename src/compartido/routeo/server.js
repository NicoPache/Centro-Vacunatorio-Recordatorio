import express from "express";

import { crearRouterSolicitudes } from "../../vacunacion/routeo/routers/routerSolicitudes.js";

function crearServer() {
  return {
    conectar: async (port) => {
      const app = express();

      app.use(express.json());

      app.use("/solicitudes", crearRouterSolicitudes());

      app.use("/uploads", express.static("uploads"));

      return new Promise((resolve, reject) => {
        const server = app.listen(port, () => {
          resolve(server);
        });
        server.on("error", (error) => {
          reject(error);
        });
      });
    },
  };
}

export { crearServer };
