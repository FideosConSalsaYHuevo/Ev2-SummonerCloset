import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TarjetaCampeon } from '../../components/molecules/TarjetaCampeon';

describe('TarjetaCampeon (molecule)', () => {
  // Renderizado correcto + Props
  it('renderiza el nombre y la imagen del campeón recibidos por props', () => {
    render(<TarjetaCampeon name="Aatrox" image="/aatrox.webp" esFavorito={false} onToggleFavorito={() => {}} />);

    expect(screen.getByText('Aatrox')).toBeTruthy();
    expect(screen.getByAltText('Aatrox').getAttribute('src')).toBe('/aatrox.webp');
  });

  // Renderizado condicional
  it('muestra la estrella llena y aria-pressed=true solo si es favorito', () => {
    const { rerender } = render(
      <TarjetaCampeon name="Ahri" image="/ahri.webp" esFavorito={false} onToggleFavorito={() => {}} />
    );
    let boton = screen.getByRole('button');
    expect(boton.textContent).toBe('☆');
    expect(boton.getAttribute('aria-pressed')).toBe('false');

    rerender(<TarjetaCampeon name="Ahri" image="/ahri.webp" esFavorito={true} onToggleFavorito={() => {}} />);
    boton = screen.getByRole('button');
    expect(boton.textContent).toBe('★');
    expect(boton.getAttribute('aria-pressed')).toBe('true');
  });

  // Eventos
  it('al hacer clic en la estrella llama a onToggleFavorito y NO a onClick de la tarjeta', () => {
    const onClick = jasmine.createSpy('onClick');
    const onToggleFavorito = jasmine.createSpy('onToggleFavorito');
    render(
      <TarjetaCampeon name="Zed" image="/zed.webp" esFavorito={false} onClick={onClick} onToggleFavorito={onToggleFavorito} />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onToggleFavorito).toHaveBeenCalledTimes(1);
    expect(onClick).not.toHaveBeenCalled();
  });
});
