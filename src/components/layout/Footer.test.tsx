import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
    it('renders the correct current year and name', () => {
        render(<Footer />);
        const year = new Date().getFullYear();
        const footerElement = screen.getByText(`© ${year} Samy Boudjema`);
        expect(footerElement).toBeInTheDocument();
    });
});
