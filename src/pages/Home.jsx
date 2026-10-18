import { useState } from 'react';
import { SeccionCampeones } from '../components/organisms/SeccionCampeones';
import { BotonesRoles } from '../components/molecules/BotonesRoles';
import { Buscador } from '../components/molecules/Buscador';
import { getChampions } from '../data/champions';
import { useFavoritos } from '../hooks/useFavoritos';

export function Home() {
    const { esFavorito, toggleFavorito } = useFavoritos();
    
    const championsList = getChampions();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('todos');

    const filteredChampions = championsList.filter((champ) => {
        const champRole = champ.role ? champ.role.trim().toLowerCase() : '';
        const currentRole = selectedRole.trim().toLowerCase();

        const matchesRole = currentRole === 'todos' || champRole === currentRole;
        const matchesSearch = champ.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRole && matchesSearch;
    });

    return (
        <main className="flex-grow-1">
            <section className="buscador">
                <div className="buscador-superior">
                    <h2>Buscador</h2>
                    <Buscador 
                        searchTerm={searchTerm} 
                        onSearchChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <BotonesRoles 
                        onSelectRole={(role) => setSelectedRole(role)}
                        selectedRole={selectedRole}
                    />
                </div>
            </section>
            <SeccionCampeones
                champions={filteredChampions}
                esFavorito={esFavorito}
                onToggleFavorito={toggleFavorito}
            />
        </main>
    );
}

export default Home;