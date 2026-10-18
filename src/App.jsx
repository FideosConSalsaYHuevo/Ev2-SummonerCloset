import { Routes, Route } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { Home } from './pages/Home';
import { VerCampeon } from './pages/VerCampeon';
import './App.css';

function App() {
    return (
        <div className="App d-flex flex-column min-vh-100">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/champion/:id" element={<VerCampeon />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;