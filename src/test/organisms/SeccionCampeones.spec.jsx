import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SeccionCampeones } from '../../components/organisms/SeccionCampeones';

const champions = [
  { id: 'aatrox', name: 'Aatrox', image: '/aatrox.webp' },
  { id: 'ahri', name: 'Ahri', image: '/ahri.webp' },
  { id: 'zed', name: 'Zed', image: '/zed.webp' },
];

const renderSeccion = (props = {}) =>
  render(
    <MemoryRouter>
      <SeccionCampeones
        champions={champions}
        esFavorito={() => false}
        onToggleFavorito={() => {}}
        {...props}
      />
    </MemoryRouter>
  );

describe('SeccionCampeones (organism)', () => {
  // Renderizado correcto (lista completa)
  it('renderiza una tarjeta por cada campeón del conjunto de datos', () => {
    renderSeccion();
    expect(screen.getByText('Aatrox')).toBeTruthy();
    expect(screen.getByText('Ahri')).toBeTruthy();
    expect(screen.getByText('Zed')).toBeTruthy();
    expect(screen.getAllByRole('article').length).toBe(3);
  });

  // Renderizado condicional + Props
  it('muestra el mensaje vacío solo cuando no hay campeones', () => {
    renderSeccion({ champions: [], mensajeVacio: 'Aún no tienes favoritos' });
    expect(screen.getByText('Aún no tienes favoritos')).toBeTruthy();
    expect(screen.queryAllByRole('article').length).toBe(0);
  });

  it('no muestra el mensaje vacío cuando sí hay campeones', () => {
    renderSeccion({ mensajeVacio: 'Aún no tienes favoritos' });
    expect(screen.queryByText('Aún no tienes favoritos')).toBeNull();
  });

  // Eventos
  it('llama a onToggleFavorito con el id del campeón al pulsar su estrella', () => {
    const onToggleFavorito = jasmine.createSpy('onToggleFavorito');
    renderSeccion({ onToggleFavorito });

    fireEvent.click(screen.getByLabelText('Agregar a Ahri a favoritos'));

    expect(onToggleFavorito).toHaveBeenCalledWith('ahri');
  });
});
