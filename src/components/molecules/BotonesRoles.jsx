import { Boton } from '../atoms/Boton';
import '../../styles/molecules/BotonesRoles.css';

export function BotonesRoles({ onSelectRole, selectedRole }) {
    const roles = [
        { id: 'todos', nombre: 'Todos', icono: `${import.meta.env.BASE_URL}imagenes/global/Specialist_icon.webp` },
        { id: 'top', nombre: 'Top', icono: `${import.meta.env.BASE_URL}imagenes/global/Top_icon.webp` },
        { id: 'jungle', nombre: 'Jungle', icono: `${import.meta.env.BASE_URL}imagenes/global/Jungle_icon.webp` },
        { id: 'middle', nombre: 'Middle', icono: `${import.meta.env.BASE_URL}imagenes/global/Middle_icon.webp` },
        { id: 'bottom', nombre: 'Bottom', icono: `${import.meta.env.BASE_URL}imagenes/global/Bottom_icon.webp` },
        { id: 'support', nombre: 'Support', icono: `${import.meta.env.BASE_URL}imagenes/global/Support_icon.webp` }
    ];

    return (
        <div className="roles d-flex flex-wrap gap-2 justify-content-center p-2">
            {roles.map((rol) => {
                const isActive = selectedRole === rol.id;

                return (
                    <Boton 
                        key={rol.id}
                        className={`boton-filtro btn btn-dark p-1 d-flex align-items-center justify-content-center ${isActive ? 'active-role' : ''}`}
                        onClick={() => onSelectRole(rol.id)}
                    >
                        <img 
                            src={rol.icono} 
                            alt={rol.nombre} 
                            title={rol.nombre} 
                            style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
                            onError={(e) => { e.target.style.display = 'none'; }} 
                        />
                    </Boton>
                );
            })}
        </div>
    );
}