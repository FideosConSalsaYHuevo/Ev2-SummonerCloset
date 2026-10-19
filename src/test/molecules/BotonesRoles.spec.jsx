import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BotonesRoles } from '../../components/molecules/BotonesRoles';

describe('BotonesRoles (molecule)', () => {
  // Renderizado correcto (lista completa)
  it('renderiza un botón por cada rol (6 en total)', () => {
    render(<BotonesRoles onSelectRole={() => {}} selectedRole="todos" />);
    expect(screen.getAllByRole('button').length).toBe(6);
    ['Todos', 'Top', 'Jungle', 'Middle', 'Bottom', 'Support'].forEach((rol) => {
      expect(screen.getByAltText(rol)).toBeTruthy();
    });
  });

  // Renderizado condicional + Props
  it('marca como activo solo el botón del rol seleccionado', () => {
    render(<BotonesRoles onSelectRole={() => {}} selectedRole="jungle" />);

    const activo = screen.getByAltText('Jungle').closest('button');
    const inactivo = screen.getByAltText('Top').closest('button');

    expect(activo).toHaveClass('active-role');
    expect(inactivo).not.toHaveClass('active-role');
  });

  // Eventos
  it('llama a onSelectRole con el id del rol al hacer clic', () => {
    const onSelectRole = jasmine.createSpy('onSelectRole');
    render(<BotonesRoles onSelectRole={onSelectRole} selectedRole="todos" />);

    fireEvent.click(screen.getByAltText('Support').closest('button'));

    expect(onSelectRole).toHaveBeenCalledWith('support');
  });
});
