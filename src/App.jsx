import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { Admin } from './pages/Admin';
import { RutaProtegida } from './routes/RutaProtegida';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { VerCampeon } from './pages/VerCampeon';
import { Favoritos } from '../pages/Favoritos';
import './App.css';

function App() {
    return (
        <div className="App d-flex flex-column min-vh-100">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/champion/:id" element={<VerCampeon />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route
                    path="/admin"
                    element={
                        <RutaProtegida rol="admin">
                            <Admin />
                        </RutaProtegida>
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;