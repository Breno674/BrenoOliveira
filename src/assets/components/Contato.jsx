import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Componente de seção "Contato"
function Contato() {
  const form = useRef();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando mensagem...' });

    try {
      // Inicializa o EmailJS
      emailjs.init('_E-dUH1qfI_5mw24x');

      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        message: formData.mensagem,
        to_name: 'Breno Oliveira',
      };

      console.log('Configurações do EmailJS:', {
        serviceID: 'service_xymrcyf',
        templateID: 'template_h53lkwa',
        publicKey: '_E-dUH1qfI_5mw24x'
      });
      console.log('Parâmetros do template:', templateParams);

      const result = await emailjs.send(
        'service_xymrcyf',
        'template_h53lkwa',
        templateParams,
        '_E-dUH1qfI_5mw24x'
      );

      console.log('E-mail enviado com sucesso:', result);
      
      setStatus({ 
        type: 'success', 
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
      });
      setFormData({ nome: '', email: '', mensagem: '' });
    } catch (error) {
      console.error('Erro detalhado ao enviar mensagem:', error);
      console.error('Detalhes do erro:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      
      let errorMessage = 'Erro ao enviar mensagem. ';
      
      if (error.text?.includes('template ID not found')) {
        errorMessage += 'Erro de configuração: Template ID não encontrado. Por favor, verifique as configurações.';
      } else if (error.text?.includes('service ID not found')) {
        errorMessage += 'Erro de configuração: Service ID não encontrado. Por favor, verifique as configurações.';
      } else {
        errorMessage += 'Por favor, tente novamente mais tarde ou entre em contato por e-mail.';
      }
      
      setStatus({ 
        type: 'error', 
        message: errorMessage
      });
    }
  };

  return (
    <section id="contato" className="py-5">
      <div className="container">
        <motion.h2 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fale Comigo
        </motion.h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <motion.div 
              className="card shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card-body p-4">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label">Mensagem</label>
                    <textarea
                      className="form-control"
                      id="mensagem"
                      name="mensagem"
                      rows="4"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary w-100"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status.type === 'loading'}
                  >
                    {status.type === 'loading' ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </motion.button>

                  {status.message && (
                    <div 
                      className={`alert alert-${status.type === 'error' ? 'danger' : 'success'} mt-3`}
                      role="alert"
                    >
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            <div className="text-center mt-4">
              <p className="lead mb-4">Ou entre em contato através das redes sociais:</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <motion.a 
                  href="mailto:Brenooliveira674.bo@gmail.com" 
                  className="btn btn-outline-dark"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Enviar e-mail"
                >
                  📧 E-mail
                </motion.a>

                <motion.a 
                  href="https://www.linkedin.com/in/breno-oliveira-635518203/" 
                  className="btn btn-outline-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visitar LinkedIn"
                >
                  💼 LinkedIn
                </motion.a>

                <motion.a 
                  href="https://github.com/Breno674" 
                  className="btn btn-outline-dark"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visitar GitHub"
                >
                  💻 GitHub
                </motion.a>

                <motion.a 
                  href="https://wa.me/82993354117" 
                  className="btn btn-outline-success"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Enviar mensagem no WhatsApp"
                >
                  <FaWhatsapp className="me-2" /> WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
