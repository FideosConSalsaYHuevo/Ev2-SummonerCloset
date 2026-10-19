import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TarjetaSkin } from '../../components/molecules/TarjetaSkin';

describe('TarjetaSkin (molecule)', () => {
  // Renderizado correcto
  it('renderiza el nombre de la skin', () => {
    render(<TarjetaSkin name="Blood Moon Aatrox" image="/skin.webp" />);
    expect(screen.getByText('Blood Moon Aatrox')).toBeTruthy();
  });

  // Props
  it('usa la imagen recibida por props como src', () => {
    render(<TarjetaSkin name="Blood Moon Aatrox" image="/skin.webp" />);
    expect(screen.getByAltText('Blood Moon Aatrox').getAttribute('src')).toBe('/skin.webp');
  });

  // Eventos
  it('ejecuta onClick al hacer clic sobre la tarjeta', () => {
    const onClick = jasmine.createSpy('onClick');
    render(<TarjetaSkin name="DRX Aatrox" image="/drx.webp" onClick={onClick} />);

    fireEvent.click(screen.getByText('DRX Aatrox'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
