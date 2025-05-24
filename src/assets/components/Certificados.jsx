import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

function Certificados() {
  const certificados = [
    {
      id: 1,
      titulo: "Desenvolvimento Web Completo",
      instituicao: "Udemy",
      data: "2023",
      link: "https://www.udemy.com/certificate/UC-c5386fc2-c302-4b18-910f-9ec16f569450/",
      imagem: "/imagens/certificados/Certificado_Desenvolvimento_Web.jpg",
      descricao: "Curso completo de desenvolvimento web, cobrindo HTML, CSS, JavaScript, Bootstrap e mais."
    },
    {
      id: 2,
      titulo: "React.js Avançado",
      instituicao: "ProgramadorBR",
      data: "2023",
      link: "https://programadorbr.com/certificado/DVWBBODS23RE281118",
      imagem: "/imagens/certificados/Certificado_ReactJs.png",
      descricao: "Aprofundamento em React.js, incluindo Hooks, Context API e gerenciamento de estado."
    },
    {
      id: 3,
      titulo: "Firebase, jQuery e Bootstrap",
      instituicao: "ProgramadorBR",
      data: "2022",
      link: "https://certificados.programadorbr.com/certificado/DVWBBODS23FI281118",
      imagem: "/imagens/certificados/Certificado_FJB.png",
      descricao: "Curso completo de Bootstrap, jQuery e Firebase."
    },
    {
      id: 4,
      titulo: "PHP",
      instituicao: "Udemy",
      data: "2023",
      link: "https://www.udemy.com/certificate/UC-22dcd4a7-459d-4d61-8738-28592c45e343/",
      imagem: "/imagens/certificados/Certificado_PHP.jpg",
      descricao: "Curso completo de PHP."
    }
  ];

  return (
    <section id="certificados" className="py-5">
      <div className="container">
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificados
        </motion.h2>

        <div className="row justify-content-center g-4">
          {certificados.map((certificado, index) => (
            <motion.div 
              className="col-md-6 col-lg-4"
              key={certificado.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="card h-100 shadow-sm"
                whileHover={{ y: -5, boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="position-relative">
                  <img 
                    src={certificado.imagem} 
                    className="card-img-top" 
                    alt={certificado.titulo}
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      backgroundColor: '#f8f9fa',
                      padding: '1rem'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml,${encodeURIComponent(`
                        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                          <rect width="400" height="200" fill="#f8f9fa"/>
                          <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#6c757d" text-anchor="middle" dy=".3em">
                            Certificado
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <FaCertificate className="text-warning" size={24} />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{certificado.titulo}</h5>
                  <p className="card-text text-muted mb-2">
                    <small>{certificado.instituicao} • {certificado.data}</small>
                  </p>
                  <p className="card-text">{certificado.descricao}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <motion.a 
                    href={certificado.link}
                    className="btn btn-outline-primary w-100"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    Ver Certificado
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificados; 