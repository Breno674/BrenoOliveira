import React from 'react';
import { motion } from 'framer-motion';

function Loading() {
  const textVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const text = "Front-end Developer";

  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--background-light)',
        zIndex: 9999,
        gap: '1rem',
        padding: '1rem'
      }}
    >
      <motion.div
        className="code-symbol"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.2, 1],
          opacity: 1,
          rotate: [0, 360]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          fontSize: 'clamp(2rem, 8vw, 4rem)',
          fontWeight: 'bold',
          color: 'var(--primary-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <motion.span
          animate={{
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;
        </motion.span>
        <motion.span
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          /
        </motion.span>
        <motion.span
          animate={{
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &gt;
        </motion.span>
      </motion.div>
      
      <motion.div
        className="text-container"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          fontSize: 'clamp(1rem, 5vw, 2rem)',
          fontWeight: 'bold',
          color: 'var(--primary-color)',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: '100%'
        }}
      >
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{
              display: 'inline-block',
              margin: '0 1px'
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Loading; 