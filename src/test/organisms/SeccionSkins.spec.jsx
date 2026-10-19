import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SeccionSkins } from '../../components/organisms/SeccionSkins';

const skins = [
  { id: 1, name: 'Aatrox', image: '/s1.webp' },
  { id: 2, name: 'Blood Moon Aatrox', image: '/s2.webp' },
  { id: 3, name: 'DRX Aatrox', image: '/s3.webp' },
];

describe('SeccionSkins (organism)', () => {
  // Renderizado correcto (lista completa)
  it('renderiza el título y una tarjeta por cada skin', () => {
    render(<SeccionSkins skins={skins} />);
    expect(screen.getByText('Skins')).toBeTruthy();
    expect(screen.getAllByRole('article').length).toBe(3);
  });

  // Renderizado condicional + Estado + Eventos
  it('muestra el panel de detalle solo después de hacer clic en una skin', () => {
    render(<SeccionSkins skins={skins} />);
    expect(screen.queryByText('Cerrar')).toBeNull();

    fireEvent.click(screen.getByText('Blood Moon Aatrox'));

    expect(screen.getByText('Cerrar')).toBeTruthy();
    expect(screen.getByText('Cromas')).toBeTruthy();
    // el nombre aparece en la tarjeta y en el título del panel
    expect(screen.getAllByText('Blood Moon Aatrox').length).toBe(2);
  });

  // Estado + Eventos
  it('oculta el panel de detalle al pulsar el botón Cerrar', () => {
    render(<SeccionSkins skins={skins} />);
    fireEvent.click(screen.getByText('DRX Aatrox'));
    expect(screen.getByText('Cerrar')).toBeTruthy();

    fireEvent.click(screen.getByText('Cerrar'));

    expect(screen.queryByText('Cerrar')).toBeNull();
    expect(screen.queryByText('Cromas')).toBeNull();
  });
});
