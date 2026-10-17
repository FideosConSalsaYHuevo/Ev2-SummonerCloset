import { Imagen } from '../atoms/Imagen';
import { Texto } from '../atoms/Texto';

export function ChampionCard({ name, image, onClick }) {
   return (
       <article className="campeon-tarjeta" onClick={onClick}>
           <Imagen src={image} alt={name} />
           <Texto variant="p">{name}</Texto>
       </article>
   );
}