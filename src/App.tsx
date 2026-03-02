import './App.css';
import { Toaster } from 'react-hot-toast';

// Composants de structure
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections de la page
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

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
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
