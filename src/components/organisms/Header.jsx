import { Link } from 'react-router-dom';
import '../../styles/organisms/Header.css';

export function Header() {
    return (
        <header className="header">
            <Link to="/">
                <h1 className="logo-title" style={{ color: '#fcb674', cursor: 'pointer' }}>
                    SummonerCloset
                </h1>
            </Link>
            <nav>
                <a href="#">inicio</a>
                <a href="#footer">nosotros</a>
                <a href="#footer">contacto</a>
            </nav>
            <a href="#login">iniciar sesión</a>
        </header>
    );
}

export default Header;