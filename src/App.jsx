import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { Admin } from './pages/Admin';
import { RutaProtegida } from './routes/RutaProtegida';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route
        path="/admin"
        element={
          <RutaProtegida rol="admin">
            <Admin />
          </RutaProtegida>
        }
      />
    </Routes>
  );
}

export default App;
