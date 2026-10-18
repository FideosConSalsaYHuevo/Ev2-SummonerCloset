import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { getChampions } from '../data/champions';
import { SeccionSkins } from '../components/organisms/SeccionSkins';

export function VerCampeon() {
    const { id } = useParams();
    const championsList = getChampions();
    const champion = championsList.find((c) => c.id.toLowerCase() === id.toLowerCase());

    return (
        <main className="flex-grow-1 py-4">
            <Container>
                <div className="mb-4">
                    <h1 style={{ fontFamily: 'BeaufortLoL, serif', color: '#fcb674' }}>Skins de {champion.name}</h1>
                </div>
                <SeccionSkins skins={champion.skins} />
            </Container>
        </main>
    );
}

export default VerCampeon;