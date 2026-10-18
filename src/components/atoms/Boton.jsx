import '../../styles/atoms/Boton.css';

export function Boton({ texto, onClick, className, children }) {
    return (
        <button className={className} onClick={onClick}>
            {children || texto}
        </button>
    );
}