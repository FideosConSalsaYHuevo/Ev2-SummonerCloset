import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../components/organisms/Footer';

describe('Footer (organism)', () => {
  // Renderizado correcto
  it('renderiza el footer con sus secciones y derechos reservados', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo').getAttribute('id')).toBe('footer');
    expect(screen.getByText('NUESTRAS REDES')).toBeTruthy();
    expect(screen.getByText('PÁGINA OFICIAL')).toBeTruthy();
    expect(screen.getByText(/Todos los derechos reservados/)).toBeTruthy();
  });

  // Renderizado de lista (todos los enlaces)
  it('renderiza los enlaces a Facebook, Instagram y League of Legends', () => {
    render(<Footer />);
    expect(screen.getAllByRole('link').length).toBe(3);
    expect(screen.getByAltText('Facebook')).toBeTruthy();
    expect(screen.getByAltText('Instagram')).toBeTruthy();
    expect(screen.getByAltText('League of Legends')).toBeTruthy();
  });

  // Props de los enlaces
  it('abre los enlaces externos en una pestaña nueva con la url correcta', () => {
    render(<Footer />);
    const facebook = screen.getByAltText('Facebook').closest('a');

    expect(facebook.getAttribute('href')).toBe('https://www.facebook.com/RiotGames');
    expect(facebook.getAttribute('target')).toBe('_blank');
  });
});
