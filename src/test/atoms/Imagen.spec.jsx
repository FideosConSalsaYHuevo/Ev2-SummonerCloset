import React from 'react';
import { render, screen } from '@testing-library/react';
import { Imagen } from '../../components/atoms/Imagen';

describe('Imagen (atom)', () => {
  // Renderizado correcto
  it('renderiza una etiqueta img con su texto alternativo', () => {
    render(<Imagen src="/foto.webp" alt="Aatrox" />);
    const img = screen.getByAltText('Aatrox');
    expect(img.tagName).toBe('IMG');
  });

  // Props
  it('usa el src recibido por props', () => {
    render(<Imagen src="/foto.webp" alt="Aatrox" />);
    expect(screen.getByAltText('Aatrox').getAttribute('src')).toBe('/foto.webp');
  });

  // Props (className)
  it('aplica la clase recibida por props', () => {
    render(<Imagen src="/foto.webp" alt="Aatrox" className="img-fluid" />);
    expect(screen.getByAltText('Aatrox')).toHaveClass('img-fluid');
  });
});
