import { Imagen } from '../atoms/Imagen';
import { Texto } from '../atoms/Texto';
import '../../styles/molecules/TarjetaCampeon.css';

export function TarjetaCampeon({ name, image, onClick, esFavorito, onToggleFavorito }) {
   const handleFavorito = (e) => {
       e.stopPropagation();
       onToggleFavorito();
   };

   return (
       <article className="campeon-tarjeta" onClick={onClick}>
           <button
               type="button"
               className={`favorito-btn ${esFavorito ? 'activo' : ''}`}
               onClick={handleFavorito}
               aria-pressed={esFavorito}
               aria-label={esFavorito ? `Quitar a ${name} de favoritos` : `Agregar a ${name} a favoritos`}
           >
               {esFavorito ? '★' : '☆'}
           </button>
           <Imagen src={image} alt={name} />
           <Texto variant="p">{name}</Texto>
       </article>
   );
}