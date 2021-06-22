function CrearPreparadorDeDatosParaPdf(){ 
    return {
            prepararDatos(paciente, turno){
                const datos = [
                    "Nombre : " + paciente.nombre,
                    "Apellido : " + paciente.apellido,
                    "Dni : " + paciente.dni,
                    "Fecha : " + turno.fecha,
                    "Lugar : " + turno.lugarVac,
                    "Tipo Vacuna: " + turno.tipoVacuna]
                return datos
            }
    }
}
export { CrearPreparadorDeDatosParaPdf }