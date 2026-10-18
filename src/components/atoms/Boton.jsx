export function Boton({ texto, onClick, className, type = 'button', children }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {texto}{children}
    </button>
  );
}
