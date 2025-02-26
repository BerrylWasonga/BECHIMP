import React from 'react';
import { Header } from './components/Header';
import { Scene } from './components/Scene';
import { Work } from './components/Work';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        
        {/* Hero Section with 3D Scene */}
        <section className="h-screen relative">
          <Scene />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Berryl Wasonga
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Full Stack Web Developer
              </p>
            </div>
          </div>
        </section>

        <Work />
        <Skills />
        <About />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App