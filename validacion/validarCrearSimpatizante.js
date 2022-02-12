export default function validarCrearSimpatizante(valores) {
  let errores = {};
  //validar la cedula
  if (!valores.cedula) {
    errores.nombre = "La cedula es obligatoria";
  }

  //validar nombre
  if (!valores.nombre) {
    errores.nombre = "Nombre obligatorio";
  }
  //validar direccion
  if (!valores.direccion) {
    errores.direccion = "Direccion obligatoria";
  }
  //validar telefono
  if (!valores.telefono) {
    errores.telefono = "Telefono obligatorio";
  }
  //validar comuna
  if (!valores.comuna) {
    errores.comuna = "comuna obligatorio";
  }
  //validar puesto
  if (!valores.puesto) {
    errores.puesto = "puesto obligatorio";
  }

  //validar lider
  if (!valores.lider) {
    errores.lider = "la lider es obligatoria";
  }

  return errores;
}
