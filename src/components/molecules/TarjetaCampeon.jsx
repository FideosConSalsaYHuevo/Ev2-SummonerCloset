import { Imagen } from '../atoms/Imagen';
import { Texto } from '../atoms/Texto';
import '../../styles/molecules/TarjetaCampeon.css';

export function TarjetaCampeon({ name, image, onClick }) {
   return (
       <article className="tarjeta-campeon" onClick={onClick}>
           <Imagen src={image} alt={name} />
           <Texto variant="p">{name}</Texto>
       </article>
   );
}