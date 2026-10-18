import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';

export function PlantillaPrincipal({ children }) {
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
