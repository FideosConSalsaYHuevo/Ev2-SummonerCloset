import { Boton } from '../atoms/Boton';

export function BotonesRoles({ onSelectRole }) {
    const roles = [
        { id: 'todos', nombre: 'Todos', icono: '/imagenes/roles/all.png' },
        { id: 'top', nombre: 'Top', icono: '/imagenes/roles/top.png' },
        { id: 'jungle', nombre: 'Jungle', icono: '/imagenes/roles/jungle.png' },
        { id: 'middle', nombre: 'Middle', icono: '/imagenes/roles/middle.png' },
        { id: 'bottom', nombre: 'Bottom', icono: '/imagenes/roles/bottom.png' },
        { id: 'support', nombre: 'Support', icono: '/imagenes/roles/support.png' }
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