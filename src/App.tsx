import React, { Suspense } from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';

// Composants de structure
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections critiques de la page (chargées immédiatement)
import Hero from './components/sections/Hero';

// Sections secondaires en Lazy Loading
const About = React.lazy(() => import('./components/sections/About'));
const Projects = React.lazy(() => import('./components/sections/Projects'));
const Skills = React.lazy(() => import('./components/sections/Skills'));
const Contact = React.lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1f2c',
            color: '#eaeaea',
            border: '1px solid rgba(100, 255, 218, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#64ffda',
              secondary: '#1a1f2c',
            },
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', color: '#64ffda' }}>Chargement...</div>}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
