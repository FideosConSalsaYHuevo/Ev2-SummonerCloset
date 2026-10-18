import { TarjetaCampeon } from '../molecules/TarjetaCampeon';
import { useNavigate } from 'react-router-dom';
import '../../styles/organisms/SeccionCampeones.css';

export function SeccionCampeones({
    champions,
    esFavorito,
    onToggleFavorito,
    titulo = 'Campeones',
    mensajeVacio = 'No hay campeones para mostrar.',
}) {
    const navigate = useNavigate();
    return (
        <section className="campeones">
            <h2>{titulo}</h2>
            {champions.length === 0 && <p style={{ color: '#ffcb9a' }}>{mensajeVacio}</p>}
            <div className="campeones-tarjetas">
                {champions.map((champ) => (
                    <TarjetaCampeon
                        key={champ.id}
                        name={champ.name}
                        image={champ.image}
                        esFavorito={esFavorito(champ.id)}
                        onToggleFavorito={() => onToggleFavorito(champ.id)}
                        onClick={() => navigate(`/champion/${champ.id}`)}
                    />
                ))}
            </div>
        </section>
    );
}