import React from 'react';

const skills = [
  { name: "React", level: "Basic" },
  { name: "Node.js", level: "Basic" },
  { name: "MongoDB", level: "Basic" },
  { name: "Express", level: "Basic" },
  { name: "Socket.io", level: "Basic" },
  { name: "WebRTC", level: "Intermediate" },
  { name: "HTML5", level: "Intermediate" },
  { name: "JavaScript (ES6+)", level: "Intermediate" },
  { name: "CSS3 & Animations", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Technical Skills</h2>
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className="glass-panel skill-card" style={styles.card}>
            <h3 style={styles.skillName}>{skill.name}</h3>
            <p style={styles.skillLevel}>{skill.level}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
                .skill-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .skill-card:hover {
                    transform: translateY(-10px) translateZ(20px);
                    box-shadow: 0 15px 35px rgba(0, 242, 255, 0.2);
                    border-color: rgba(0, 242, 255, 0.4);
                }
            `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    textAlign: 'center',
    perspective: '1000px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '50px',
    color: 'var(--text-primary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    padding: '30px 20px',
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
  },
  skillName: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: 'var(--text-primary)',
  },
  skillLevel: {
    color: 'var(--neon-cyan)',
    fontSize: '0.9rem',
  },
};

export default Skills;
