import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Boton } from '../atoms/Boton';
import { getUsuarioActual, cerrarSesion } from '../../data/usuarios';
import '../../styles/organisms/Header.css';

export function Header() {
    const navigate = useNavigate();
    useLocation();
    const [, setVersion] = useState(0);
    const usuario = getUsuarioActual();

    const handleCerrarSesion = () => {
        cerrarSesion();
        setVersion((v) => v + 1); // fuerza el re-render aunque ya estemos en '/'
        navigate('/');
    };
    
    return (
        <header className="header">
            <Link to="/">
                <h1 className="logo-title" style={{ color: '#fcb674', cursor: 'pointer' }}>
                    SummonerCloset
                </h1>
            </Link>
            <nav>
                <Link to="/">inicio</Link>
                <a href="#footer">nosotros</a>
                <a href="#footer">contacto</a>
                <Link to="/favoritos">ver favoritos</Link>
            </nav>

        {usuario === null && (
        <>
            <Link to="/login">iniciar sesión</Link>
            <Link to="/registro">crear cuenta</Link>
        </>
        )}
        {usuario !== null && (
        <>
            <span>Hola, {usuario.nombre}</span>
            {usuario.rol === 'admin' && <Link to="/admin">panel admin</Link>}
            <Boton texto="cerrar sesión" onClick={handleCerrarSesion} className="btn btn-outline-light btn-sm" />
        </>
        )}
        </header>
            );
}

export default Header;

