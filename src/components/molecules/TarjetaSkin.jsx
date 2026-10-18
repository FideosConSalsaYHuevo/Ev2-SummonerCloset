import { Imagen } from '../atoms/Imagen';
import { Texto } from '../atoms/Texto';
import '../../styles/molecules/TarjetaSkin.css';

export function TarjetaSkin({ name, image, onClick }) {
    return (
        <article className="campeon-tarjeta" onClick={onClick} style={{ cursor: 'pointer' }}>
            <Imagen src={image} alt={name} />
            <Texto variant="p">{name}</Texto>
        </article>
    );
}

export default TarjetaSkin;