const KEY = 'favoritos';

export function getFavoritos() {
  try {
    const guardado = localStorage.getItem(KEY);
    return guardado ? JSON.parse(guardado) : [];
  } catch {
    return [];
  }
}

export function guardarFavoritos(ids) {
  localStorage.setItem(KEY, JSON.stringify(ids));
}