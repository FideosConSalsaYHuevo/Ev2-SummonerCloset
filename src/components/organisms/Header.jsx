import '../../styles/organisms/Header.css';

export function Header() {
    return (
        <header className="navbar-custom">
            <h1>SummonerCloset</h1>
            <nav>
                <a href="#">inicio</a>
                <a href="#footer">nosotros</a>
                <a href="#footer">contacto</a>
            </nav>
            <a href="#login">iniciar sesión</a>
        </header>
    );
}