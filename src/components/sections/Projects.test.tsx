import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './Projects';

// Remplace le module d'intersection observer pour éviter les erreurs dans jsdom
jest.mock('../../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => ({
    isVisible: true,
    domRef: { current: null },
  }),
}));

describe('ProjectCard Component', () => {
  it('renders project correctly', () => {
    render(
      <ProjectCard
        title="Test Project"
        description="A great project"
        technologies={['React', 'TypeScript']}
        githubUrl="https://github.com/SamyBoudjema/test"
        liveUrl="https://samyboudjema.fr"
      />
    );

    // Titre et description
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A great project')).toBeInTheDocument();

    // Technologies
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    // Liens
    const githubLink = screen.getByRole('link', { name: /Voir le code source GitHub/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/SamyBoudjema/test');

    const liveLink = screen.getByRole('link', { name: /Visiter le site/i });
    expect(liveLink).toHaveAttribute('href', 'https://samyboudjema.fr');
    
    // GitLab ne devrait pas être là
    const gitlabLinks = screen.queryAllByRole('link', { name: /GitLab/i });
    expect(gitlabLinks).toHaveLength(0);
  });
});
