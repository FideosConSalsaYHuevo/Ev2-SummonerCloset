import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../../components/organisms/Header';

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

describe('Header (organism)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  // Renderizado correcto
  it('renderiza el logo y los enlaces de navegación', () => {
    renderHeader();
    expect(screen.getByText('SummonerCloset')).toBeTruthy();
    expect(screen.getByText('inicio')).toBeTruthy();
    expect(screen.getByText('ver favoritos').getAttribute('href')).toBe('/favoritos');
  });

  // Renderizado condicional
  it('sin sesión muestra "iniciar sesión" y "crear cuenta"; con sesión muestra el saludo', () => {
    renderHeader();
    expect(screen.getByText('iniciar sesión')).toBeTruthy();
    expect(screen.getByText('crear cuenta')).toBeTruthy();
    expect(screen.queryByText(/Hola,/)).toBeNull();
  });

  it('con sesión de administrador muestra saludo y el enlace al panel admin', () => {
    localStorage.setItem('usuarioActual', JSON.stringify({ id: 1, nombre: 'administrador', rol: 'admin' }));
    renderHeader();

    expect(screen.getByText('Hola, administrador')).toBeTruthy();
    expect(screen.getByText('panel admin')).toBeTruthy();
    expect(screen.queryByText('iniciar sesión')).toBeNull();
  });

  // Estado + Eventos
  it('al cerrar sesión se limpia el usuario y vuelve a mostrar "iniciar sesión"', () => {
    localStorage.setItem('usuarioActual', JSON.stringify({ id: 2, nombre: 'invocador', rol: 'cliente' }));
    renderHeader();

    fireEvent.click(screen.getByText('cerrar sesión'));

    expect(screen.getByText('iniciar sesión')).toBeTruthy();
    expect(localStorage.getItem('usuarioActual')).toBeNull();
  });
});
