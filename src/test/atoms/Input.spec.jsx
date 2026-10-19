import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../components/atoms/Input';

describe('Input (atom)', () => {
  // Renderizado correcto
  it('renderiza un input de tipo text por defecto con su placeholder', () => {
    render(<Input placeholder="Escribe aquí" />);
    const input = screen.getByPlaceholderText('Escribe aquí');
    expect(input.getAttribute('type')).toBe('text');
  });

  // Props
  it('usa el type, name y value recibidos por props', () => {
    render(<Input type="password" name="clave" value="secreto" onChange={() => {}} placeholder="clave" />);
    const input = screen.getByPlaceholderText('clave');
    expect(input.getAttribute('type')).toBe('password');
    expect(input.getAttribute('name')).toBe('clave');
    expect(input.value).toBe('secreto');
  });

  // Estado + Eventos
  it('actualiza el estado del componente padre cuando el usuario escribe', () => {
    function Wrapper() {
      const [texto, setTexto] = useState('');
      return (
        <>
          <Input placeholder="nombre" value={texto} onChange={(e) => setTexto(e.target.value)} />
          <span data-testid="eco">{texto}</span>
        </>
      );
    }
    render(<Wrapper />);

    fireEvent.change(screen.getByPlaceholderText('nombre'), { target: { value: 'Jinx' } });

    expect(screen.getByTestId('eco').textContent).toBe('Jinx');
    expect(screen.getByPlaceholderText('nombre').value).toBe('Jinx');
  });
});
