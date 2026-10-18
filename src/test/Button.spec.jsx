// src/test/Button.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Boton } from '../components/atoms/Boton';


describe('Button Component', () => {
 it('renderiza el botón correctamente', () => {
   const { getByText } = render(<Boton>Haz click</Boton>);
   expect(getByText('Haz click')).toBeTruthy();
 });


 it('aplica los props correctamente', () => {
    render(<Boton className="btn-primary">Haz click</Boton>);
    const button = screen.getByText('Haz click');
    expect(button).toHaveClass('btn-primary');
  });
});
