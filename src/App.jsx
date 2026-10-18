import { Routes, Route } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { Home } from './pages/Home';
import { VerCampeon } from './pages/VerCampeon';
import { IniciarSesion } from './pages/IniciarSesion';
import { CrearCuenta } from './pages/CrearCuenta';
import './App.css';

function App() {
    return (
        <div className="App d-flex flex-column min-vh-100">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/login" element={<IniciarSesion />} />
                <Route path="/register" element={<CrearCuenta />} />

                <Route path="/champion/:id" element={<VerCampeon />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;