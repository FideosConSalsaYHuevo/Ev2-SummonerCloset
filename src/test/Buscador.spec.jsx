import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Buscador from '../../components/molecules/Buscador';

describe('Buscador Molecule', () => {
  it('renderiza el input de búsqueda correctamente', () => {
    render(<Buscador searchTerm="" onSearchChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/buscar/i);
    expect(inputElement).toBeTruthy();
  });

  it('dispara el evento de cambio cuando el usuario escribe', () => {
    const handleChange = jasmine.createSpy('onSearchChange');
    render(<Buscador searchTerm="" onSearchChange={handleChange} />);
    
    const inputElement = screen.getByPlaceholderText(/buscar/i);
    fireEvent.change(inputElement, { target: { value: 'Aatrox' } });

    expect(handleChange).toHaveBeenCalled();
  });
});