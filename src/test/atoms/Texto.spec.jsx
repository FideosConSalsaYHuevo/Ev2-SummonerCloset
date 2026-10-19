import React from 'react';
import { render, screen } from '@testing-library/react';
import { Texto } from '../../components/atoms/Texto';

describe('Texto (atom)', () => {
  // Renderizado correcto
  it('renderiza como párrafo (p) por defecto con el contenido', () => {
    render(<Texto>Hola invocador</Texto>);
    const el = screen.getByText('Hola invocador');
    expect(el.tagName).toBe('P');
  });

  // Props (variant)
  it('renderiza la etiqueta indicada en la prop variant', () => {
    render(<Texto variant="h2">Título</Texto>);
    expect(screen.getByText('Título').tagName).toBe('H2');
  });

  // Props (className)
  it('aplica la clase recibida por props', () => {
    render(<Texto className="texto-error">Error</Texto>);
    expect(screen.getByText('Error')).toHaveClass('texto-error');
  });
});
