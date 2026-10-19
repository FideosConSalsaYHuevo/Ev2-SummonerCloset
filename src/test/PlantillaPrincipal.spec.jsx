import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlantillaPrincipal from '../../components/templates/PlantillaPrincipal';

describe('PlantillaPrincipal Template', () => {
  it('renderiza la estructura principal de la plantilla', () => {
    render(
      <MemoryRouter>
        <PlantillaPrincipal />
      </MemoryRouter>
    );
    
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toBeTruthy();
  });
});