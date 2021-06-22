import { crearServer } from "./compartido/routeo/server.js";
import { crearCURecodatorio } from "./vacunacion/negocio/enviarRecordatorio/CUFactoryRecordatorio.js";
import { crearTemporizador } from "./compartido/temporizador/Temporizador.js";
import {getPort} from './config.js'

 const recordatorio = crearCURecodatorio();
const temporizador = crearTemporizador()

async function main() {
  const servidor = crearServer();

  await servidor.conectar(getPort());
  temporizador.crearTemporizadorFechaHora(
    "recordatorio",
    { hour: 8, minute: 30},
    () => {
     recordatorio.recordarDiasAntes(6);
    }
  ); 
  
}

main();
 



