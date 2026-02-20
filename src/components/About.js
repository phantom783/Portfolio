import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div className="glass-panel" style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.text}>
          I am a passionate Full Stack Developer with a deep interest in building
          <span className="text-gradient"> real-time applications</span> and
          <span className="text-gradient"> interactive UI systems</span>.
          My journey involves mastering the Full stack to create scalable backend architectures
          while pushing the boundaries of frontend design with modern CSS techniques.
        </p>
        <p style={styles.text}>
          Whether it's a high-performance chat application or a WebRTC video calling platform,
          I focus on performance, security, and user experience.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: '800px',
    padding: '40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: 'var(--text-primary)',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: 'var(--text-secondary)',
    marginBottom: '20px',
  },
};

export default About;
