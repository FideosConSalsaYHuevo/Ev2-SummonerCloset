// src/test/Button.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Boton } from '../components/atoms/Boton';

describe('Boton (atom)', () => {
  // Renderizado correcto
  it('renderiza el botón con el texto recibido', () => {
    const { getByText } = render(<Boton>Haz click</Boton>);
    expect(getByText('Haz click')).toBeTruthy();
  });

  // Props
  it('aplica la clase recibida por props', () => {
    render(<Boton className="btn-primary">Haz click</Boton>);
    const button = screen.getByText('Haz click');
    expect(button).toHaveClass('btn-primary');
  });

  // Eventos
  it('ejecuta la función onClick al hacer clic', () => {
    const onClick = jasmine.createSpy('onClick');
    render(<Boton texto="Enviar" onClick={onClick} />);

    fireEvent.click(screen.getByText('Enviar'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
