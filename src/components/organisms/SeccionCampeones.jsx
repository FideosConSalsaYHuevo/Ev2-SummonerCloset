import { TarjetaCampeon } from '../molecules/TarjetaCampeon';
import { useNavigate } from 'react-router-dom';
import '../../styles/organisms/SeccionCampeones.css';

export function SeccionCampeones({ champions }) {
    const navigate = useNavigate();
    return (
        <section className="campeones">
            <h2>Campeones</h2>
            <div className="campeones-tarjetas">
                {champions.map((champ) => (
                    <TarjetaCampeon
                        key={champ.id}
                        name={champ.name}
                        image={champ.image}
                        onClick={() => navigate(`/champion/${champ.id}`)}
                    />
                ))}
            </div>
        </section>
    );
}