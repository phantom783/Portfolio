import React from 'react';

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <div className="glass-panel" style={styles.card}>
        <h2 style={styles.heading}>Let's Connect</h2>
        <p style={styles.text}>
          Interested in working together or just want to say hi?
          Drop me an email or find me on social platforms.
        </p>
        <p style={styles.phone}>
          Mobile: <a href="tel:+918591733184" style={styles.phoneLink}>+91 8591733184</a>
        </p>
        <div style={styles.links}>
          <a href="https://mail.google.com/mail/?view=cm&to=bhedatushar5@gmail.com" target="_blank" rel="noreferrer" className="contact-btn">
            <EmailIcon />
          </a>
          <a href="https://github.com/phantom783?tab=repositories" target="_blank" rel="noreferrer" className="contact-btn-outline">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/tushar-bheda-1b7605366" target="_blank" rel="noreferrer" className="contact-btn-outline">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <footer style={styles.footer}>
        <p>&copy; 2026 Tushar Bheda. Built with React & Pure CSS.</p>
      </footer>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    maxWidth: '600px',
    width: '100%',
    padding: '50px',
    textAlign: 'center',
    marginBottom: '80px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: 'var(--text-primary)',
  },
  text: {
    color: 'var(--text-secondary)',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  phone: {
    color: 'var(--text-primary)',
    marginBottom: '24px',
    fontWeight: '600',
  },
  phoneLink: {
    color: '#00f2ff',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },

  footer: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  },
};

export default Contact;
