import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { getChampions } from '../data/champions';
import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';
import { SeccionSkins } from '../components/organisms/SeccionSkins';
import { TarjetaSkin } from '../components/molecules/TarjetaSkin';

export function VerCampeon() {
    const { id } = useParams();
    const championsList = getChampions();
    
    const champion = championsList.find((c) => c.id.toLowerCase() === id.toLowerCase());

    if (!champion) {
        return (
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <Container className="my-5 text-center text-light flex-grow-1">
                    <h2 style={{ color: '#fcb674' }}>Campeón no encontrado</h2>
                    <Link to="/" className="btn btn-warning mt-3">Volver al inicio</Link>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1 py-4">
                <Container>
                    <div className="mb-4">
                        <Link to="/" className="btn btn-outline-warning btn-sm mb-3">← Volver al inicio</Link>
                        <h1 style={{ fontFamily: 'BeaufortLoL, serif', color: '#fcb674' }}>{champion.name}</h1>
                    </div>
                    <SeccionSkins skins={champion.skins} />
                    <BiografiadeCampeon description={champion.description} />
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default VerCampeon;