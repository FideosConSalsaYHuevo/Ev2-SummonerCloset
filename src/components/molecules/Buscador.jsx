import { Input } from '../atoms/Input';
import { Boton } from '../atoms/Boton';

export function Buscador({ searchTerm, onSearchChange }) {
    return (
        <div className="buscador input-group mb-3">
            <Input 
                type="text" 
                placeholder="Buscar campeón..." 
                value={searchTerm} 
                onChange={onSearchChange}
                className="form-control"
            />
        </div>
    );
}