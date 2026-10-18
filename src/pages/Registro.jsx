import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CampoFormulario } from '../components/molecules/CampoFormulario';
import { Boton } from '../components/atoms/Boton';
import { Texto } from '../components/atoms/Texto';
import { registrarUsuario, iniciarSesion } from '../data/usuarios';
import '../styles/pages/Formulario.css';

export function Registro() {
    const navigate = useNavigate();
    const [datos, setDatos] = useState({ nombre: '', correo: '', clave: '', confirmar: '' });
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const validar = () => {
        const nuevos = {};
        const nombre = datos.nombre.trim();
        if (nombre.length < 3 || nombre.length > 30) {
            nuevos.nombre = 'el nombre debe tener entre 3 y 30 caracteres';
        }
        if (!/^\S+@\S+\.\S+$/.test(datos.correo.trim())) {
            nuevos.correo = 'ingresa un correo valido';
        }
        if (datos.clave.length < 6 || datos.clave.length > 20) {
            nuevos.clave = 'la contraseña debe tener entre 6 y 20 caracteres';
        }
        if (datos.confirmar !== datos.clave) {
            nuevos.confirmar = 'las contraseñas no coinciden';
        }
        return nuevos;
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevos = validar();
        setErrores(nuevos);
        if (Object.keys(nuevos).length > 0) return;

        const correo = datos.correo.trim();
        const resultado = registrarUsuario({ nombre: datos.nombre.trim(), correo, clave: datos.clave });
        if (!resultado.ok) {
            setErrores({ correo: resultado.mensaje });
            return;
        }
        iniciarSesion(correo, datos.clave);
        navigate('/');
    };

    return (
        <section className="formulario-pagina my-auto">
            <form className="formulario" onSubmit={handleSubmit} noValidate>
                <Texto variant="h2">Crear cuenta</Texto>

                <CampoFormulario etiqueta="Nombre" name="nombre" placeholder="Tu nombre de invocador"
                    value={datos.nombre} onChange={handleChange} error={errores.nombre} />
                <CampoFormulario etiqueta="Correo" name="correo" type="email" placeholder="correo@ejemplo.com"
                    value={datos.correo} onChange={handleChange} error={errores.correo} />
                <CampoFormulario etiqueta="Contraseña" name="clave" type="password" placeholder="6 a 20 caracteres"
                    value={datos.clave} onChange={handleChange} error={errores.clave} />
                <CampoFormulario etiqueta="Repetir contraseña" name="confirmar" type="password" placeholder="Repite tu contraseña"
                    value={datos.confirmar} onChange={handleChange} error={errores.confirmar} />

                <Boton type="submit" texto="Registrarme" className="btn btn-warning w-100 mb-3" />
                <Texto>
                    ¿Ya tienes cuenta? <Link to="/login">Inicia sesion</Link>
                </Texto>
            </form>
        </section>
    );
}