import { useState, useRef } from 'react';
import { TarjetaSkin } from '../molecules/TarjetaSkin';
import '../../styles/organisms/SeccionSkins.css';

export function SeccionSkins({ skins }) {
    const [selectedSkin, setSelectedSkin] = useState(null);
    const panelRef = useRef(null);

    const handleSelectSkin = (skin) => {
        setSelectedSkin(skin);
        
        setTimeout(() => {
            panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    };

    return (
        <section className="campeones mb-5">
            <h2>Skins</h2>
            <div className="campeones-tarjetas">
                {skins.map((skin) => (
                    <TarjetaSkin 
                        key={skin.id}
                        name={skin.name}
                        image={skin.image}
                        onClick={() => handleSelectSkin(skin)}
                    />
                ))}
            </div>

            {selectedSkin && (
                <div ref={panelRef} className="skin-detalle-panel">
                    <button 
                        className="btn btn-sm btn-outline-light float-end"
                        onClick={() => setSelectedSkin(null)}
                    >
                        Cerrar
                    </button>
                    
                    <h3 className="skin-detalle-titulo">
                        {selectedSkin.name}
                    </h3>
                    
                    <div className="row mt-3">
                        <div className="col-md-6 text-center">
                            <img 
                                src={selectedSkin.image} 
                                alt={selectedSkin.name} 
                                className="img-fluid rounded shadow skin-imagen-splash" 
                            />
                        </div>

                        <div className="Detalles">
                            <h5>Cromas</h5>
                            <h5>Habilidades In-Game</h5>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default SeccionSkins;