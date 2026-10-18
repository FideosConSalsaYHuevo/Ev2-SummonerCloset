import { Navigate } from 'react-router-dom';
import { getUsuarioActual } from '../data/usuarios';

//si no hay sesion o el rol no coincide manda al login
export function RutaProtegida({ rol, children }) {
  const usuario = getUsuarioActual();
  if (usuario === null || (rol && usuario.rol !== rol)) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
