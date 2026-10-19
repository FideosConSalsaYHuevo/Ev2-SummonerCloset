import { getChampions } from '../data/champions';
import { useFavoritos } from '../hooks/useFavoritos';
import { SeccionCampeones } from '../components/organisms/SeccionCampeones';

export function Favoritos() {
    const { favoritos, esFavorito, toggleFavorito } = useFavoritos();

    const campeonesFavoritos = getChampions().filter((champ) =>
        favoritos.includes(champ.id)
    );

    return (
        <main className="flex-grow-1">
            <SeccionCampeones
                champions={campeonesFavoritos}
                esFavorito={esFavorito}
                onToggleFavorito={toggleFavorito}
                titulo="Mis favoritos"
                mensajeVacio="Aún no tienes campeones favoritos. Márcalos con la estrella ☆ desde el inicio."
            />
        </main>
    );
}

export default Favoritos;