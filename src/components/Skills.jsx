import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data';
import styles from './Skills.module.scss';

function ProgressBar({ level, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className={styles.progressTrack} ref={ref}>
      <motion.div
        className={styles.progressFill}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.3, delay, ease: 'easeOut' }}
      />
    </div>
  );
}

function NextLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#F4F2FF"
        d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
      />
    </svg>
  );
}

function SkillCategory({ title, icon, items, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{ height: '100%' }}
    >
      <div className={styles.categoryCard}>
        <div className={styles.categoryTitle}>
          <div className={styles.icon}><i className={`bi ${icon}`} /></div>
          <h3>{title}</h3>
        </div>
        {items.map((skill, i) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <div className={styles.skillName}>
                {skill.name === 'Next.js' ? (
                  <NextLogo className={styles.skillLogo} />
                ) : (
                  <i className={`bi ${skill.icon}`} />
                )}
                {skill.name}
              </div>
              <div className={styles.skillLevel}>{skill.level}%</div>
            </div>
            <ProgressBar level={skill.level} delay={delay + i * 0.07} />
            {skill.note && <p className={styles.skillNote}>{skill.note}</p>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const highlightStack = [
  { name: 'HTML5',       icon: 'bi-filetype-html',  color: '#E34F26' },
  { name: 'CSS3',        icon: 'bi-filetype-css',   color: '#1572B6' },
  { name: 'JavaScript',  icon: 'bi-filetype-js',    color: '#F7DF1E' },
  { name: 'React JS',    icon: 'bi-filetype-jsx',   color: '#61DAFB' },
  { name: 'TypeScript',  icon: 'bi-filetype-tsx',   color: '#3178C2' },
  { name: 'Next.js',     icon: 'bi-layers',         color: '#F4F2FF' },
  { name: 'Node.js',     icon: 'bi-server',         color: '#68A063' },
  { name: 'Express.js',  icon: 'bi-boxes',          color: '#9a9a9a' },
  { name: 'REST APIs',   icon: 'bi-arrow-left-right', color: '#6C62FF' },
  { name: 'PostgreSQL',  icon: 'bi-database',       color: '#336791' },
  { name: 'Prisma',      icon: 'bi-diagram-3',      color: '#2D3748' },
  { name: 'MySQL',       icon: 'bi-database',       color: '#00758F' },
  { name: 'Bootstrap',   icon: 'bi-bootstrap',      color: '#7952B3' },
  { name: 'Tailwind',    icon: 'bi-palette',        color: '#38BDF8' },
  { name: 'SCSS',        icon: 'bi-filetype-scss',  color: '#CC6699' },
  { name: 'Git',         icon: 'bi-git',            color: '#F05032' },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>
            <div className={styles.line} />
            Technical Skills
            <div className={styles.line} />
          </div>
          <h2 className="section-title">My <span className="gradient-text">Tech Stack</span></h2>
          <p className="section-subtitle">
            The tools and technologies I use to build scalable enterprise applications
          </p>
        </motion.div>

        {/* Progress bar skill cards */}
        <div className="row g-4">
          <div className="col-lg-6">
            <SkillCategory title="Frontend" icon="bi-window" items={skills.frontend} delay={0} />
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4 h-100">
              <SkillCategory title="Backend & APIs" icon="bi-server" items={skills.backend} delay={0.1} />
              <SkillCategory title="Database" icon="bi-database" items={skills.database} delay={0.2} />
              <SkillCategory title="Tools & Version Control" icon="bi-tools" items={skills.other} delay={0.25} />
            </div>
          </div>
        </div>

        {/* Highlighted tech grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.highlightGrid}>
            {highlightStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                className={styles.highlightTile}
                style={{ '--tile-color': tech.color }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                {tech.name === 'Next.js' ? (
                  <NextLogo className={styles.tileIcon} />
                ) : (
                  <i
                    className={`bi ${tech.icon} ${styles.tileIcon}`}
                    style={{ color: tech.color }}
                  />
                )}
                <div className={styles.tileName}>{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
