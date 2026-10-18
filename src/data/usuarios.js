const KEY = 'usuarios';
const KEY_SESION = 'usuarioActual';

const usuariosIniciales = [
  { id: 1, nombre: 'administrador', correo: 'admin@summonercloset.cl', clave: 'admin123', rol: 'admin' },
  { id: 2, nombre: 'invocador', correo: 'usuario@correo.com', clave: 'user12345', rol: 'cliente' },
];

function cargar() {
  const guardado = localStorage.getItem(KEY);
  if (!guardado) {
    localStorage.setItem(KEY, JSON.stringify(usuariosIniciales));
    return usuariosIniciales;
  }
  return JSON.parse(guardado);
}

function guardar(lista) {
  localStorage.setItem(KEY, JSON.stringify(lista));
}

export function getUsuarios() {
  return cargar();
}

export function getUsuarioById(id) {
  return cargar().find((u) => u.id === id);
}

export function createUsuario(datos) {
  const lista = cargar();
  const nuevoId = lista.length > 0 ? Math.max(...lista.map((u) => u.id)) + 1 : 1;
  const nuevo = { rol: 'cliente', ...datos, id: nuevoId };
  guardar([...lista, nuevo]);
  return nuevo;
}

export function updateUsuario(id, cambios) {
  const lista = cargar().map((u) => (u.id === id ? { ...u, ...cambios } : u));
  guardar(lista);
}

export function deleteUsuario(id) {
  guardar(cargar().filter((u) => u.id !== id));
}

export function registrarUsuario({ nombre, correo, clave }) {
  const existe = cargar().some((u) => u.correo.toLowerCase() === correo.toLowerCase());
  if (existe) {
    return { ok: false, mensaje: 'correo ya esta registrado' };
  }
  createUsuario({ nombre, correo, clave });
  return { ok: true };
}

export function iniciarSesion(correo, clave, comoAdmin = false) {
  const usuario = cargar().find(
    (u) => u.correo.toLowerCase() === correo.toLowerCase() && u.clave === clave
  );
  if (!usuario) {
    return { ok: false, mensaje: 'correo o contraseña incorrectos' };
  }
  if (comoAdmin && usuario.rol !== 'admin') {
    return { ok: false, mensaje: 'esta cuenta no es de administrador' };
  }
 

  const { clave: _clave, ...sinClave } = usuario;
  localStorage.setItem(KEY_SESION, JSON.stringify(sinClave));
  return { ok: true, usuario: sinClave };
}

export function cerrarSesion() {
  localStorage.removeItem(KEY_SESION);
}

export function getUsuarioActual() {
  const guardado = localStorage.getItem(KEY_SESION);
  return guardado ? JSON.parse(guardado) : null;
}
