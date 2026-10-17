import { ChampionCard } from '../molecules/TarjetaCampeon';

export function SeccionCampeones({ champions }) {
   return (
       <section className="campeones">
           <h2>Campeones</h2>
           <div className="campeones-tarjetas">
               {champions.map((champ) => (
                   <ChampionCard 
                       key={champ.id} 
                       name={champ.name} 
                       image={champ.image} 
                       onClick={() => window.location.href = champ.link}
                   />
               ))}
           </div>
       </section>
   );
}