import { useState } from 'react';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { SeccionCampeones } from './components/organisms/SeccionCampeones';
import { BotonesRoles } from './components/molecules/BotonesRoles';
import { Buscador } from './components/molecules/Buscador';
import { getChampions } from './data/champions';
import './App.css';

function App() {
  const championsList = getChampions();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('todos');
  const filteredChampions = championsList.filter((champ) => {
        const matchesRole = selectedRole === 'todos' || (champ.role && champ.role.toLowerCase() === selectedRole.toLowerCase());
        const matchesSearch = champ.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRole && matchesSearch;
    });

    return (
        <div className="App">
            <Header />
            <main>
                <section className="buscador">
                    <div className="buscador-superior">
                        <h2>Buscador</h2>
                        <BotonesRoles onSelectRole={(role) => setSelectedRole(role)} />
                        <Buscador 
                            searchTerm={searchTerm} 
                            onSearchChange={(e) => setSearchTerm(e.target.value)} 
                        />
                    </div>
                </section>
                <SeccionCampeones champions={filteredChampions} />
            </main>
            <Footer />
        </div>
    );
}

export default App;