import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CampoFormulario } from '../components/molecules/CampoFormulario';
import { Boton } from '../components/atoms/Boton';
import { Texto } from '../components/atoms/Texto';
import { iniciarSesion } from '../data/usuarios';
import '../styles/pages/Formulario.css';

export function Login() {
    const navigate = useNavigate();
    const [datos, setDatos] = useState({ correo: '', clave: '' });
    const [esAdmin, setEsAdmin] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (datos.correo.trim() === '' || datos.clave === '') {
            setError('Completa tu correo y tu contraseña');
            return;
        }
    
        const resultado = iniciarSesion(datos.correo.trim(), datos.clave, esAdmin);
        if (!resultado.ok) {
            setError(resultado.mensaje);
            return;
        }
        navigate(esAdmin ? '/admin' : '/');
    };

    const cambiarModo = () => {
        setEsAdmin(!esAdmin);
        setError('');
    };

    return (
        <section className="formulario-pagina my-auto">
            <form className="formulario" onSubmit={handleSubmit} noValidate>
                <Texto variant="h2">{esAdmin ? 'acceso administrador' : 'iniciar sesion'}</Texto>

                <CampoFormulario
                    etiqueta="correo"
                    name="correo"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={datos.correo}
                    onChange={handleChange}
                />
                <CampoFormulario
                    etiqueta="contraseña"
                    name="clave"
                    type="password"
                    placeholder="tu contraseña"
                    value={datos.clave}
                    onChange={handleChange}
                />

                {error && <Texto className="formulario__error">{error}</Texto>}

                <Boton type="submit" texto="entrar" className="btn btn-warning w-100 mb-2" />
                <Boton
                    texto={esAdmin ? 'volver al ingreso' : 'ingresar como administrador'}
                    onClick={cambiarModo}
                    className="btn btn-outline-light w-100 mb-3"
                />

                {!esAdmin && (
                    <Texto>
                        ¿no estas registado? <Link to="/registro">crea tu cuenta</Link>
                    </Texto>
                )}
            </form>
        </section>
    );
}