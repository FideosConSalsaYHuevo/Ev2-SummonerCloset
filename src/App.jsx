import { useState } from 'react';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { SeccionCampeones } from './components/organisms/SeccionCampeones';
import { BotonesRoles } from './components/molecules/BotonesRoles';
import { getChampions } from './data/champions';
import './App.css';

function App() {
  const championsList = getChampions();
  const [selectedRole, setSelectedRole] = useState('todos');
  const filteredChampions = championsList.filter((champ) => {
        if (selectedRole === 'todos') return true;
        return champ.role && champ.role.toLowerCase() === selectedRole.toLowerCase();
    });

    return (
        <div className="App">
            <Header />
            <main>
                <section className="buscador">
                    <div className="buscador-superior">
                        <h2>Buscador</h2>
                        <BotonesRoles onSelectRole={(role) => setSelectedRole(role)} />
                    </div>
                </section>
                <SeccionCampeones champions={selectedRole === 'todos' ? championsList : filteredChampions} />
            </main>
            <Footer />
        </div>
    );
}

export default App;