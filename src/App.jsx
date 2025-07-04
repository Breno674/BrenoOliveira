import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './assets/components/Header';
import Sobre from './assets/components/Sobre';
import Projetos from './assets/components/Projetos';
import Certificados from './assets/components/Certificados';
import Contato from './assets/components/Contato';
import Loading from './assets/components/Loading';
import './styles/global.css';

// Componente principal do aplicativo
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se o usuário tem preferência por tema escuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(prefersDark);

    // Simula o carregamento da página
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Aplica o tema ao body
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  const handleThemeChange = (newTheme) => {
    setIsDarkTheme(newTheme);
  };

  // Componente de fundo animado
  const codeSymbols = ['<', '>', '/', '{', '}', ';', '=', '(', ')', 'const', 'let', 'function', '=>', 'if', 'else', 'return', 'React', 'JSX', 'div', 'span', 'class', 'id'];
  const rainColumns = 24;
  const rain = Array.from({ length: rainColumns }).map((_, i) => {
    const symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
    const left = (i * 100) / rainColumns;
    const duration = 4 + Math.random() * 6;
    const delay = Math.random() * 5;
    return (
      <span
        key={i}
        className="code-rain-symbol"
        style={{
          left: `${left}vw`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        {symbol}
      </span>
    );
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="code-rain" aria-hidden="true">{rain}</div>
      <Header onThemeChange={handleThemeChange} />
      <main className="flex-grow-1">
        <div className="container">
          <Sobre />
          <Projetos />
          <Certificados />
          <Contato />
        </div>
      </main>
      <footer className="text-center py-4">
        <div className="container">
          <p className="mb-0">
            © {new Date().getFullYear()} Breno Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;