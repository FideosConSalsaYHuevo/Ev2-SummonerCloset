import { TarjetaSkin } from '../molecules/TarjetaSkin';
import '../../styles/organisms/SeccionSkins.css';

export function SeccionSkins({ skins }) {
    return (
        <section className="campeones mb-5">
            <h2>Aspectos (Skins)</h2>
            <div className="campeones-tarjetas">
                {skins.map((skin) => (
                    <TarjetaSkin 
                        key={skin.id}
                        name={skin.name}
                        image={skin.image}
                    />
                ))}
            </div>
        </section>
    );
}