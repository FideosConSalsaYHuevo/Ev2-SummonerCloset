import { Texto } from '../components/atoms/Texto';
import { getUsuarioActual, getUsuarios } from '../data/usuarios';

export function Admin() {
  const admin = getUsuarioActual();
  const usuarios = getUsuarios();

  return (
    <section className="container text-white py-4 my-auto">
      <Texto variant="h2">Panel de administracion</Texto>
      <Texto>Bienvenido, {admin?.nombre || 'Administrador'}</Texto>

      <table className="table table-dark table-striped mt-3">
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Correo</th><th>Rol</th></tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.correo}</td>
              <td>{u.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Admin;