import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { SeccionCampeones } from './components/organisms/SeccionCampeones';
import { getChampions } from './data/champions';
import './App.css';

function App() {
  const championsList = getChampions();

  return (
    <div className="App">
        <Header />

        <main>
            <section className="buscador">
                <div className="buscador-superior">
                    <h2>Buscador</h2>
                </div>
            </section>
            <SeccionCampeones champions={championsList} />
        </main>

        <Footer />
    </div>
  );
}

export default App;