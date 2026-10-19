import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CampoFormulario } from '../../components/molecules/CampoFormulario';

describe('CampoFormulario (molecule)', () => {
  // Renderizado correcto
  it('renderiza la etiqueta y el input con su placeholder', () => {
    render(<CampoFormulario etiqueta="Correo" name="correo" placeholder="correo@ejemplo.com" />);
    expect(screen.getByText('Correo')).toBeTruthy();
    expect(screen.getByPlaceholderText('correo@ejemplo.com')).toBeTruthy();
  });

  // Renderizado condicional
  it('muestra el mensaje de error solo cuando recibe la prop error', () => {
    const { rerender } = render(
      <CampoFormulario etiqueta="Correo" name="correo" placeholder="correo" />
    );
    expect(screen.queryByText('ingresa un correo valido')).toBeNull();

    rerender(
      <CampoFormulario etiqueta="Correo" name="correo" placeholder="correo" error="ingresa un correo valido" />
    );
    expect(screen.getByText('ingresa un correo valido')).toBeTruthy();
    expect(screen.getByPlaceholderText('correo')).toHaveClass('is-invalid');
  });

  // Estado + Eventos
  it('actualiza el valor del estado cuando el usuario escribe en el campo', () => {
    function Wrapper() {
      const [valor, setValor] = useState('');
      return (
        <CampoFormulario
          etiqueta="Nombre"
          name="nombre"
          placeholder="tu nombre"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      );
    }
    render(<Wrapper />);

    const input = screen.getByPlaceholderText('tu nombre');
    fireEvent.change(input, { target: { value: 'Invocador' } });

    expect(input.value).toBe('Invocador');
  });
});
