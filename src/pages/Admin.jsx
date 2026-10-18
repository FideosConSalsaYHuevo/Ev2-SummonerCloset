import { PlantillaPrincipal } from '../components/templates/PlantillaPrincipal';
import { Texto } from '../components/atoms/Texto';
import { getUsuarioActual, getUsuarios } from '../data/usuarios';

export function Admin() {
  const admin = getUsuarioActual();
  const usuarios = getUsuarios();

  return (
    <PlantillaPrincipal>
      <section className="container text-white py-4">
        <Texto variant="h2">Panel de administracion</Texto>
        <Texto>Bienvenido, {admin.nombre}</Texto>

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
    </PlantillaPrincipal>
  );
}
