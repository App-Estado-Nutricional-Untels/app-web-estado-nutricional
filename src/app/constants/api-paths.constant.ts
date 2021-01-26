/**
 * Ver más documentación en:
 * https://github.com/App-Estado-Nutricional-Untels/backend-estado-nutricional/issues?q=is%3Aissue+label%3Acontroller+is%3Aclosed
 */

export enum ApiPaths {
  obtenerReporteGrupalIMC = '/api/alumnos/imc/reporte',
  obtenerReporteGrupalICC = '/api/alumnos/imc/reporte',

  obtenerComboRendimientoAcademico = '/api/rendimientos-academicos',
  obtenerComboNivelEstres = '/api/niveles-estres',
  obtenerComboSexo = '/api/sexos',
  obtenerComboRol = '/api/roles',
  obtenerComboCategoriaIMC = '/api/categorias-imc',
  obtenerComboCategoriaICC = '/api/categorias-icc',

  eliminarUsuarioAlumnoPorId = '/api/usuarios/alumnos/:id',
  eliminarUsuarioPorId = '/api/usuarios/:id',

  registroRecomendacion = '/api/datos-antropometricos/recomendacion',

  obtenerListadoUsuarios = '/api/usuarios',
  obtenerListadoPersonas = '/api/personas',

  obtenerListadoICCGrupal = '/api/datos-antropometricos/icc-grupal',
  obtenerListadoIMCGrupal = '/api/datos-antropometricos/imc-grupal',

  obtenerPorcentajeSexos = '/api/alumnos/porcentaje-sexo',
  obtenerListadoAlumnos = '/api/alumnos',

  obtenerHistorialDatosAntropometricosPorIdAlumno = '/api/alumnos/datos-antropometricos/:id',
  obtenerHistorialDatosAntropometricosPorIdPersona = '/api/personas/datos-antropometricos/:id',

  obtenerEvolucionICCPorIdAlumno = '/api/alumnos/icc-evolucion/:id',
  obtenerEvolucionIMCPorIdAlumno = '/api/alumnos/imc-evolucion/:id',

  obtenerEvolucionICCPorIdPersona = '/api/personas/icc-evolucion/:id',
  obtenerEvolucionIMCPorIdPersona = '/api/personas/imc-evolucion/:id',

  obtenerDatosAntropometricosActualesPorIdAlumno = '/api/alumnos/datos-antropometricos/actual/:id',
  obtenerDatosAntropometricosActualesPorIdPersona = '/api/personas/datos-antropometricos/actual/:id',

  registroDatosAntropometricosAutenticado = '/api/auth/alumnos/datos-antropometricos',
  registroDatosAntropometricosInicialesAutenticado = '/api/auth/alumnos/datos-antropometricos/inicial',

  actualizarUsuarioAutenticado = '/api/auth/usuarios',

  registroUsuarioGeneral = '/api/usuarios',
  registroUsuarioAlumno = '/api/usuarios/alumnos',

  iniciarSesion = '/api/auth/iniciar-sesion',
  registro = '/api/auth/registro',
}
