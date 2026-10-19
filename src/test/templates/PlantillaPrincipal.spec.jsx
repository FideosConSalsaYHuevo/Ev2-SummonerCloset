import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PlantillaPrincipal } from '../../components/templates/PlantillaPrincipal';

const renderPlantilla = (contenido = <p>Contenido de prueba</p>) =>
  render(
    <MemoryRouter>
      <PlantillaPrincipal>{contenido}</PlantillaPrincipal>
    </MemoryRouter>
  );

describe('PlantillaPrincipal (template)', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  // Renderizado correcto + Props (children)
  it('renderiza los children dentro de la etiqueta main', () => {
    renderPlantilla();
    const main = screen.getByRole('main');
    expect(main.textContent).toContain('Contenido de prueba');
  });

  // Renderizado de la estructura
  it('incluye el Header y el Footer de la aplicación', () => {
    renderPlantilla();
    expect(screen.getByRole('banner')).toBeTruthy();       // <header>
    expect(screen.getByRole('contentinfo')).toBeTruthy();  // <footer>
    expect(screen.getByText('SummonerCloset')).toBeTruthy();
  });

  // Props (children distintos)
  it('muestra cualquier contenido distinto que se le pase como children', () => {
    renderPlantilla(<h2>Otra página</h2>);
    expect(screen.getByText('Otra página')).toBeTruthy();
    expect(screen.queryByText('Contenido de prueba')).toBeNull();
  });
});
