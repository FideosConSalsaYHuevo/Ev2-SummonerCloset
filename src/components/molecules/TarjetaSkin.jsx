import '../../styles/molecules/TarjetaSkin.css';

export function TarjetaSkin({ name, image }) {
    return (
        <div className="tarjeta-campeon">
            <div className="imagen-container">
                <img src={image} alt={name} className="img-fluid" />
            </div>
            <div className="info-container">
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default TarjetaSkin;