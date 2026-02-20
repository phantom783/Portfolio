import React from 'react';

const projects = [
  {
    title: "MERN Real-Time ChatApp",
    description: "Full-scale chat application with Socket.io, JWT authentication, and MongoDB.",
    tech: ["React", "Express", "Socket.io", "MongoDB"],
    color: "#00f2ff",
    link: "https://github.com/phantom783/Real-time-ChatAPP"
  },
  {
    title: "Payroll Management System",
    description: "Specially for new employees, New Registration, New login, and also can manage Salary count with salaryMaster.",
    tech: ["Socket.io", "Node.js", "React", "Express", "MongoDB"],
    color: "#8a2be2",
    link: "https://github.com/phantom783/Tushar-form"
  },
  {
    title: "Invoice Generator",
    description: "New and easy way to generate invoices, user can register with mobile no and GST no and can generate invoice by just entering mobile no.",
    tech: ["HTML", "CSS3", "Node", "React", "MongoDB"],
    color: "#ff0099",
    link: "https://github.com/phantom783/Tushar-invoice"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel project-card"
      style={styles.card}
      aria-label={`Open ${project.title} project`}
    >
      <div style={{ ...styles.accentLine, background: project.color }}></div>
      <h3 style={styles.title}>{project.title}</h3>
      <p style={styles.description}>{project.description}</p>
      <div style={styles.tags}>
        {project.tech.map((t, i) => (
          <span key={i} style={styles.tag}>{t}</span>
        ))}
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>

      <style jsx>{`
                .project-card {
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.27),
                                box-shadow 0.4s ease;
                }
                .project-card:hover {
                    transform: translateY(-15px) rotateX(5deg) rotateY(-5deg);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                    z-index: 10;
                }
            `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    perspective: '1500px', // Adds depth for 3D rotation
  },
  heading: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '60px',
    color: 'var(--text-primary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  card: {
    padding: '30px',
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
    textDecoration: 'none',
    color: 'inherit',
  },
  accentLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '4px',
    width: '100%',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    marginTop: '10px',
    color: 'var(--text-primary)',
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  tags: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  tag: {
    background: 'var(--tag-bg)',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: 'var(--neon-cyan)',
  },
};

export default Projects;
