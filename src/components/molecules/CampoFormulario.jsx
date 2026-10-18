import { Input } from '../atoms/Input';
import { Texto } from '../atoms/Texto';
import '../../styles/molecules/CampoFormulario.css';

export function CampoFormulario({ etiqueta, name, type = 'text', placeholder, value, onChange, error }) {
  return (
  <div className="campo-formulario">
    <label htmlFor={name}>{etiqueta}</label>
    <Input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`form-control ${error ? 'is-invalid' : ''}`}
    />
    {error && <Texto className="campo-formulario__error">{error}</Texto>}
    </div>
    );
}
