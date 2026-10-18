import '../../styles/organisms/Footer.css';

export function Footer() {
    return (
        <footer id="footer">
            <div className="footer-paginas">
                <h3>NUESTRAS REDES</h3>
                <a href="https://www.facebook.com/RiotGames" target="_blank" rel="noreferrer">
                    <i>
                        <img src={`${import.meta.env.BASE_URL}imagenes/global/facebook.webp`} alt="Facebook" />
                    </i> Facebook
                </a>
                <a href="https://www.instagram.com/riotgames" target="_blank" rel="noreferrer">
                    <i>
                        <img src={`${import.meta.env.BASE_URL}imagenes/global/instagram.webp`} alt="Instagram" />
                    </i> Instagram
                </a>
            </div>
            
            <div className="derechos">
                <p>Todos los derechos reservados a tilinazo67</p>
            </div>
            
            <div className="riot">
                <h3>PÁGINA OFICIAL</h3>
                <a href="https://www.leagueoflegends.com" className="riot-link" target="_blank" rel="noreferrer">
                    <i>
                        <img src={`${import.meta.env.BASE_URL}imagenes/global/leagueoflegends.webp`} alt="League of Legends" />
                    </i> League of Legends
                </a>
            </div>
        </footer>
    );
}

export default Footer;