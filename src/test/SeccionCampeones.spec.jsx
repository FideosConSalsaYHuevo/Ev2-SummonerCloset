import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SeccionCampeones from '../../components/organisms/SeccionCampeones';

describe('SeccionCampeones Organism', () => {
  const mockChampions = [
    { id: 'Aatrox', name: 'Aatrox', role: 'top', image: 'Aatrox.webp' },
    { id: 'Ahri', name: 'Ahri', role: 'middle', image: 'Ahri.webp' }
  ];

  it('renderiza la lista de campeones correctamente', () => {
    render(
      <MemoryRouter>
        <SeccionCampeones 
          champions={mockChampions} 
          esFavorito={() => false} 
          onToggleFavorito={() => {}} 
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Aatrox')).toBeTruthy();
    expect(screen.getByText('Ahri')).toBeTruthy();
  });
});