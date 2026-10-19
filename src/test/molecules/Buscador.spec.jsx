import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Buscador } from '../../components/molecules/Buscador';

describe('Buscador (molecule)', () => {
  // Renderizado correcto
  it('renderiza el input con el placeholder "Buscar campeón..."', () => {
    render(<Buscador searchTerm="" onSearchChange={() => {}} />);
    expect(screen.getByPlaceholderText('Buscar campeón...')).toBeTruthy();
  });

  // Props
  it('muestra en el input el valor recibido en searchTerm', () => {
    render(<Buscador searchTerm="Ahri" onSearchChange={() => {}} />);
    expect(screen.getByPlaceholderText('Buscar campeón...').value).toBe('Ahri');
  });

  // Eventos
  it('llama a onSearchChange cuando el usuario escribe', () => {
    const onSearchChange = jasmine.createSpy('onSearchChange');
    render(<Buscador searchTerm="" onSearchChange={onSearchChange} />);

    fireEvent.change(screen.getByPlaceholderText('Buscar campeón...'), { target: { value: 'Zed' } });

    expect(onSearchChange).toHaveBeenCalledTimes(1);
  });
});
