import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Componente de cabeçalho com navegação
function Header({ onThemeChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    onThemeChange(!isDarkTheme);
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${isDarkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
      style={{
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#home"><span className="brand-highlight">Breno Oliveira</span></a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <motion.li 
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a className="nav-link" href="#sobre">Sobre</a>
            </motion.li>
            <motion.li 
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a className="nav-link" href="#projetos">Projetos</a>
            </motion.li>
            <motion.li 
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a className="nav-link" href="#certificados">Certificados</a>
            </motion.li>
            <motion.li 
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a className="nav-link" href="#contato">Contato</a>
            </motion.li>
            <motion.li className="nav-item ms-3">
              <button 
                className="btn btn-outline-primary"
                onClick={toggleTheme}
                aria-label={`Mudar para tema ${isDarkTheme ? 'claro' : 'escuro'}`}
              >
                {isDarkTheme ? '☀️' : '🌙'}
              </button>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  onThemeChange: PropTypes.func.isRequired
};

export default Header;
