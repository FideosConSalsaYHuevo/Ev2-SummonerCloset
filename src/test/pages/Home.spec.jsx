import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home';

describe('Home Page', () => {
  it('renderiza el título del buscador', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const title = screen.getByText('Buscador');
    expect(title).toBeTruthy();
  });

  it('renderiza el input de búsqueda de campeones', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const inputElement = screen.getByPlaceholderText('Buscar campeón...');
    expect(inputElement).toBeTruthy();
  });

  it('renderiza la sección principal con la etiqueta main', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeTruthy();
    expect(mainElement).toHaveClass('flex-grow-1');
  });
});