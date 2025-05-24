import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

// Componente de seção "Projetos"
function Projetos() {
  const [filtro, setFiltro] = useState('todos');
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const projetos = [
    {
      id: 1,
      nome: 'Tabela de Usuários',
      descricao: 'Este projeto é uma aplicação React que exibe uma tabela interativa de usuários. Ele permite que os usuários visualizem, pesquisem, ordenem e adicionem novos registros à tabela. A interface é simples e responsiva, com funcionalidades úteis para manipulação de dados.',
      tecnologias: ['JavaScript', 'React', 'Html', 'Css'],
      imagem: '/imagens/projetos/projeto_tabela.png',
      link: 'https://github.com/Breno674/Tabela',
      demo: 'https://tabela-ordenavel-six.vercel.app/',
      categoria: 'web',
      destaque: true,
    },
    {
      id: 2,
      nome: 'Calculadora de IMC',
      descricao: 'A Calculadora de IMC é uma aplicação web desenvolvida para calcular o Índice de Massa Corporal (IMC) de forma simples, rápida e intuitiva. O usuário informa sua altura e peso, e o sistema retorna o valor do IMC junto com a classificação correspondente (abaixo do peso, normal, sobrepeso ou obesidade). O projeto possui uma interface moderna, responsiva e acessível, podendo ser utilizada em diferentes dispositivos, como computadores, tablets e smartphones.',
      tecnologias: ['Html', 'Css', 'JavaScript'],
      imagem: '/imagens/projetos/calculadora_IMC.png',
      link: 'https://github.com/Breno674/Calculadora-IMC',
      demo: 'https://breno674.github.io/Calculadora-IMC/',
      categoria: 'web',
      destaque: false,
    },
    {
      id: 3,
      nome: 'HelpDesk',
      descricao: 'O Helpdesk é um aplicativo de gerenciamento de tickets desenvolvido para otimizar as operações de suporte técnico. Ela permite que os usuários abram e fechem chamados, acompanhem instalações de equipamentos em condomínios e registrem os responsáveis por cada operação. Além disso, o sistema coleta dados essenciais que alimentam uma plataforma de Big Data, contribuindo para a análise e aprimoramente contímuo dos serviços prestados, Este foi um Projeto de extensão no qual fui responsável pelo desenvolvimento do Front-end da aplicação. ',
      tecnologias: ['Python', 'HTML', 'CSS', 'Bootstrap', 'SQL-Server'],
      imagem: '/imagens/projetos/projeto_HelpDesk.png',
      link: 'https://github.com/kemuelkesley/helpdesk-faculdade',
      demo: 'https://helpdesk-libk.onrender.com/login/',
      categoria: 'web',
      destaque: true,
    },
    {
      id: 4,
      nome: 'Calculadora',
      descricao: 'Este projeto é uma calculadora web desenvolvida com HTML, CSS e JavaScript. Ela permite realizar operações matemáticas básicas em uma interface moderna, responsiva e fácil de usar.',
      tecnologias: [ 'HTML', 'CSS', 'JavaScript'],
      imagem: '/imagens/projetos/calculadora.png',
      link: 'https://github.com/Breno674/Calculadora',
      demo: 'https://breno674.github.io/Calculadora/',
      categoria: 'web',
      destaque: false,

    }
  ];

  const categorias = ['todos', 'web', 'mobile'];

  const projetosFiltrados = filtro === 'todos' 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === filtro);

  return (
    <section id="projetos" className="py-5">
      <div className="container">
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Meus Projetos
        </motion.h2>

        <div className="filtros mb-4">
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            {categorias.map((categoria) => (
              <motion.button
                key={categoria}
                className={`btn ${filtro === categoria ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setFiltro(categoria)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {projetosFiltrados.map((projeto, index) => (
            <motion.div 
              className="col-md-4 d-flex justify-content-center mb-4" 
              key={projeto.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <motion.div 
                className="card h-100 w-100 shadow-sm"
                whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.2 }}
                onClick={() => setProjetoSelecionado(projeto)}
              >
                <div className="position-relative">
                  <img 
                    src={projeto.imagem} 
                    className="card-img-top" 
                    alt={projeto.nome}
                    style={{ 
                      height: '200px', 
                      objectFit: 'cover',
                      backgroundColor: '#f8f9fa'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml,${encodeURIComponent(`
                        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                          <rect width="400" height="200" fill="#f8f9fa"/>
                          <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#6c757d" text-anchor="middle" dy=".3em">
                            Imagem não encontrada
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  {projeto.destaque && (
                    <span className="position-absolute top-0 end-0 badge bg-warning m-2">
                      Destaque
                    </span>
                  )}
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{projeto.nome}</h5>
                  <p className="card-text flex-grow-1">{projeto.descricao}</p>
                  
                  <div className="tecnologias mb-3">
                    {projeto.tecnologias.map((tech, i) => (
                      <span key={i} className="badge bg-primary me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {projeto.stats && (
                    <div className="d-flex gap-3 mb-3 text-muted">
                      <small><FaStar /> {projeto.stats.stars}</small>
                      <small><FaCodeBranch /> {projeto.stats.forks}</small>
                    </div>
                  )}

                  <div className="d-flex gap-2 mt-auto">
                    <motion.a 
                      href={projeto.link}
                      className="btn btn-primary flex-grow-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="me-1" />
                      Código
                    </motion.a>
                    <motion.a 
                      href={projeto.demo}
                      className="btn btn-outline-primary flex-grow-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;