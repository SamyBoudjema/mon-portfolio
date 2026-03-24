import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './Contact';

// Mock du module EmailJS et react-hot-toast
jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn().mockResolvedValue({ status: 200, text: 'OK' }),
}));

jest.mock('react-hot-toast', () => ({
  promise: jest.fn().mockResolvedValue(true),
  error: jest.fn(),
  success: jest.fn(),
}));

// Remplace le module d'intersection observer
jest.mock('../../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => ({
    isVisible: true,
    domRef: { current: null },
  }),
}));

describe('ContactForm Component', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    process.env.REACT_APP_EMAILJS_SERVICE_ID = 'test_service';
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'test_template';
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY = 'test_key';
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('shows required validation errors when submitting empty form', async () => {
    render(<ContactForm />);
    
    // Clique sur le bouton "Envoyer"
    fireEvent.submit(screen.getByRole('button', { name: /Envoyer/i }));
    
    // Vérifie les messages d'erreur via Yup / react-hook-form
    await waitFor(() => {
      expect(screen.getByText('Nom et Prénom sont obligatoires')).toBeInTheDocument();
      expect(screen.getByText('Adresse e-mail est obligatoire')).toBeInTheDocument();
      expect(screen.getByText('Message est obligatoire')).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(<ContactForm />);
    
    // Remplit le champ email avec une valeur invalide
    const emailInput = screen.getByLabelText(/Adresse e-mail \*/i);
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.submit(screen.getByRole('button', { name: /Envoyer/i }));
    
    await waitFor(() => {
      expect(screen.getByText('Adresse e-mail invalide')).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(<ContactForm />);
    
    // Remplit le formulaire correctement
    fireEvent.change(screen.getByLabelText(/Nom et Prénom \*/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Adresse e-mail \*/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message \*/i), { target: { value: 'Hello world' } });
    
    fireEvent.submit(screen.getByRole('button', { name: /Envoyer/i }));
    
    await waitFor(() => {
      // Les erreurs ne doivent pas être affichées
      expect(screen.queryByText('Nom et Prénom sont obligatoires')).not.toBeInTheDocument();
      expect(screen.queryByText('Adresse e-mail est obligatoire')).not.toBeInTheDocument();
    });
  });
});
