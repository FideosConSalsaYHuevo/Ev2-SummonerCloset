import { useState } from 'react';
import { Header } from '../components/organisms/Header';
import { Footer } from '../components/organisms/Footer';

export function IniciarSesion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Iniciando sesión con el correo: ${email}`);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
                <div className="card bg-dark text-light p-4 shadow-lg border" style={{ width: '100%', maxWidth: '400px', borderColor: '#C79B3B' }}>
                    <h2 className="text-center mb-4" style={{ fontFamily: 'BeaufortLoL, serif', color: '#fcb674' }}>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" style={{ color: '#ffcb9a' }}>Correo electrónico</label>
                            <input 
                                type="email" 
                                className="form-control bg-secondary text-light border-0" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="invoker@league.com"
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{ color: '#ffcb9a' }}>Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control bg-secondary text-light border-0" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required 
                            />
                        </div>
                        <button type="submit" className="btn w-100 mt-3" style={{ backgroundColor: '#C79B3B', color: '#09101f', fontWeight: 'bold' }}>
                            Entrar
                        </button>
                    </form>
                    <p className="text-center mt-3 text-muted" style={{ fontSize: '14px' }}>
                        ¿No tienes cuenta? <a href="/register" style={{ color: '#fcb674' }}>Regístrate aquí</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}