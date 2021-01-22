/**
 * Ver más documentación en:
 * https://github.com/App-Estado-Nutricional-Untels/backend-estado-nutricional/issues?q=is%3Aissue+label%3Acontroller+is%3Aclosed
 */

export enum ApiPaths {
  obtenerReporteGrupalIMC = '/api/alumnos/imc/reporte',

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

  obtenerListadoICCGrupal = '/api/datos-antropometricos/icc-grupal',
  obtenerListadoIMCGrupal = '/api/datos-antropometricos/imc-grupal',

  obtenerPorcentajeSexos = '/api/alumnos/porcentaje-sexo',
  obtenerListadoAlumnos = '/api/alumnos',
  obtenerHistorialDatosAntropometricosPorId = '/api/alumnos/datos-antropometricos/:id',

  obtenerEvolucionICCPorId = '/api/alumnos/icc-evolucion/:id',
  obtenerEvolucionIMCPorId = '/api/alumnos/imc-evolucion/:id',

  obtenerDatosAntropometricosActualesPorId = '/api/alumnos/datos-antropometricos/actual/:id',

  registroDatosAntropometricosAutenticado = '/api/auth/alumnos/datos-antropometricos',
  registroDatosAntropometricosInicialesAutenticado = '/api/auth/alumnos/datos-antropometricos/inicial',

  actualizarUsuarioAutenticado = '/api/auth/usuarios',

  registroUsuarioGeneral = '/api/usuarios',
  registroUsuarioAlumno = '/api/usuarios/alumnos',

  iniciarSesion = '/api/auth/iniciar-sesion',
  registro = '/api/auth/registro',
}
