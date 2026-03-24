import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkillItem } from './Skills';

// Remplace le module d'intersection observer pour éviter les erreurs dans jsdom
jest.mock('../../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => ({
    isVisible: true,
    domRef: { current: null },
  }),
}));

describe('SkillItem Component', () => {
  it('renders a skill name and its icon correctly', () => {
    render(<SkillItem name="React" icon="fab fa-react" />);
    
    // Vérifie le nom
    expect(screen.getByText('React')).toBeInTheDocument();
    
    // Vérifie la présence de l'icône
    // eslint-disable-next-line testing-library/no-node-access
    const iconWrapper = screen.getByText('React').previousSibling;
    // eslint-disable-next-line testing-library/no-node-access
    const iconElement = iconWrapper?.firstChild as HTMLElement;
    expect(iconElement).toHaveClass('fab');
    expect(iconElement).toHaveClass('fa-react');
    expect(iconElement).toHaveAttribute('aria-hidden', 'true');
  });
});
