import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaTools, FaFileDownload } from 'react-icons/fa';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from 'react-icons/si';

function Sobre({ skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Git',
  'Responsive Design'
] }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getIcon = (skillName) => {
    switch (skillName.toLowerCase()) {
      case 'react': return <SiReact className="me-2" style={{ fontSize: '1.5rem' }} />;
      case 'javascript': return <SiJavascript className="me-2" style={{ fontSize: '1.5rem' }} />;
      case 'html5': return <SiHtml5 className="me-2" style={{ fontSize: '1.5rem' }} />;
      case 'css3': return <SiCss3 className="me-2" style={{ fontSize: '1.5rem' }} />;
      case 'bootstrap': return <SiBootstrap className="me-2" style={{ fontSize: '1.5rem' }} />;
      case 'git': return <SiGit className="me-2" style={{ fontSize: '1.5rem' }} />;
      default: return null;
    }
  };

  return (
    <section id="sobre" className="py-5 mt-5">
      <div className="container">
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaCode className="me-2" /> Sobre Mim
        </motion.h2>
        
        <div className="row align-items-center">
          <motion.div 
            className="col-md-4 text-center mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/imagens/foto-perfil.jpeg" 
              alt="Foto de Breno Oliveira" 
              className="img-fluid rounded-circle shadow hover-zoom"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
              onError={(e) => e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250"><rect width="250" height="250" fill="%23f8f9fa"/><text x="50%" y="50%" font-family="Arial" font-size="16" fill="%236c757d" text-anchor="middle" dy=".3em">Foto não encontrada</text></svg>'}
              loading="lazy"
            />
            
            <motion.a
              href="/curriculo.pdf"
              className="btn btn-primary btn-lg mt-4 d-flex align-items-center justify-content-center gap-2 mx-auto"
              style={{ maxWidth: '250px' }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <FaFileDownload className="me-2" />
              Baixar Currículo
            </motion.a>
          </motion.div>

          <motion.div 
            className="col-md-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="lead">
              <FaLaptopCode className="me-2" /> Olá! Meu nome é <strong>Breno Oliveira</strong>, sou desenvolvedor front-end apaixonado por criar interfaces modernas e intuitivas. Com experiência em React, JavaScript e outras tecnologias web, busco sempre entregar soluções elegantes e eficientes.
            </p>
            <p>
              Minha jornada na programação começou há 4 anos, e desde então venho me especializando em desenvolvimento web, com foco em criar experiências digitais memoráveis.
            </p>

            <div className="skills-section mt-4">
              <h3 className="h5 mb-3">
                <FaTools className="me-2" /> Habilidades Técnicas
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="badge bg-primary d-flex align-items-center p-2"
                    style={{ fontSize: '1rem' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {getIcon(skill)}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

Sobre.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string)
};

export default Sobre;
