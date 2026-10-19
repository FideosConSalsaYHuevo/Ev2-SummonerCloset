import { useState, useEffect } from 'react';
import { getFavoritos, guardarFavoritos } from '../data/favoritos.js';

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState(getFavoritos);

  useEffect(() => {
    guardarFavoritos(favoritos);
  }, [favoritos]);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const esFavorito = (id) => favoritos.includes(id);

  return { favoritos, toggleFavorito, esFavorito };
}