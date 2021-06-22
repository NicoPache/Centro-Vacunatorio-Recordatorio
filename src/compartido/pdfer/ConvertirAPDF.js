import { jsPDF } from "jspdf";

// Debe existir la ruta que se envia como parámetro, de lo contrario catchea el error y no crea los pdf.
function crearConversorPdf(ruta){


  return{
    pasarAPdf : (titulo, nombrePdf, datos)=>{
      const doc = new jsPDF();
      //seteo por defecto el tipo de letra ya que no es importante en nuestro caso de uso que haya diferentes instancias con distintas fuentes
      doc.setFont("times", "normal")

      try {
        //genero el string que va a ser el texto princial (arrancando por el titulo)
        let info=titulo
          for (const atributo in datos) {
            if (datos.hasOwnProperty.call(datos, atributo)) {
              const element = datos[atributo];
              info = info + "\n" + element.toString();
            }
         }
        //los margenes tambien lo dejo por defecto por el mismo motivo que las fuentes
        doc.text(info, 20, 20); 
        //lo guardo en la ruta indicada con el nombre indicado
        doc.save(ruta + "/" + nombrePdf + ".pdf")

      } catch (error) {
        console.log(error)
      }
    },
    getRutaPdfs : () =>{
      return ruta
    }
}
}


export {
  crearConversorPdf
}