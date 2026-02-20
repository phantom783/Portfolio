import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={styles.hero}>
      <div className="glass-panel" style={styles.card}>
        <div>
          <h2 style={styles.greeting}><span className="text-gradient">Tushar Bheda</span></h2>
          <h3 style={styles.role}>Full Stack Developer</h3>
          <p style={styles.description}>
            I build scalable real-time applications with modern UI.
            Tools i used like React, Node.js, Express, MongoDB, Socket.io, WebRTC, CSS3 & Animations, Git & GitHub.
          </p>
          <div style={styles.buttons}>
            <a href="#contact" style={styles.buttonSecondary}>Contact Me</a>
          </div>
        </div>
        <div style={styles.glow} />
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  },
  card: {
    width: '100%',
    maxWidth: '600px',
    padding: '50px',
    textAlign: 'center',
    position: 'relative',
  },
  greeting: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: '700',
  },
  role: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: 'var(--text-secondary)',
  },
  description: {
    marginBottom: '30px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  buttonPrimary: {
    padding: '12px 30px',
    background: 'linear-gradient(90deg, #00f2ff, #8a2be2)',
    color: 'white',
    borderRadius: '50px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    textDecoration: 'none',
  },
  buttonSecondary: {
    padding: '12px 30px',
    background: 'transparent',
    border: '2px solid #00f2ff',
    color: '#00f2ff',
    borderRadius: '50px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s, color 0.3s',
    textDecoration: 'none',
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent)',
    pointerEvents: 'none',
    zIndex: -1,
    borderRadius: '16px',
  }
};

export default Hero;
