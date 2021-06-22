import {crearConfirmadorDeTurno} from './ConfirmadorDeTurno.js'
//import {crearMailer} from '../../../Compartido/moduloMailing/mailerFactory.js'
import {crearPdfer} from '../../../Compartido/pdfer/pdfFactory.js'
import {getDaoSolicitudes} from '../../Persistencia/factoryDaoSolicitudes.js'
import {CrearPreparadorDeDatosParaPdf} from '../../../Compartido/pdfer/PreparadorDeDatosPdf.js'



 //inicializo mi CU
 async function crearCuConfirmadorDeTurno(){
    const confirmadorDeTurno = crearConfirmadorDeTurno(
        crearPdfer(), 
        //await crearMailer(),
        getDaoSolicitudes(),
        CrearPreparadorDeDatosParaPdf()
        )
        return confirmadorDeTurno
 }

 export {crearCuConfirmadorDeTurno}