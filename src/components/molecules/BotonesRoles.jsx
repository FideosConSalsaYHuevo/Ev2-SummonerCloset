import { Boton } from '../atoms/Boton';

export function BotonesRoles({ onSelectRole }) {
    const roles = [
        { id: 'todos', nombre: 'Todos', icono: '/imagenes/global/Specialist_icon.webp' },
        { id: 'top', nombre: 'Top', icono: '/imagenes/global/Top_icon.webp' },
        { id: 'jungle', nombre: 'Jungle', icono: '/imagenes/global/Jungle_icon.webp' },
        { id: 'middle', nombre: 'Middle', icono: '/imagenes/global/Middle_icon.webp' },
        { id: 'bottom', nombre: 'Bottom', icono: '/imagenes/global/Bottom_icon.webp' },
        { id: 'support', nombre: 'Support', icono: '/imagenes/global/Support_icon.webp' }
    ];

    return (
        <div className="roles d-flex flex-wrap gap-2 justify-content-center p-2">
            {roles.map((rol) => (
                <Boton 
                    key={rol.id}
                    className="boton-filtro btn btn-dark p-1 d-flex align-items-center justify-content-center"
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
            ))}
        </div>
    );
}