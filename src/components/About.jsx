import { motion } from 'framer-motion';
import { personalInfo, careerJourney } from '../data';
import styles from './About.module.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">

        <div className="row align-items-center g-5 mb-2">
          <div className="col-lg-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className={styles.label} variants={fadeUp} custom={0}>
                <div className={styles.line} />
                About Me
              </motion.div>

              <motion.h2 className={styles.title} variants={fadeUp} custom={1}>
                Crafting Enterprise{' '}
                <span className="gradient-text">Solutions</span> with Purpose
              </motion.h2>

              <motion.p className={styles.bio} variants={fadeUp} custom={2}>
                {personalInfo.about}
              </motion.p>

              <motion.div variants={fadeUp} custom={3}>
                <div className={styles.socialRow}>
                  {/* <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                  >
                    <i className="bi bi-github" />
                  </a> */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className={styles.socialBtn}>
                    <i className="bi bi-envelope-fill" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>{personalInfo.experience}</div>
                  <div className={styles.statLabel}>Experience</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { icon: 'bi-building', text: `Currently at ${personalInfo.company} as Full Stack Developer` },
                  { icon: 'bi-layers', text: 'React, Next.js, Node.js, PostgreSQL, and Prisma' },
                  { icon: 'bi-diagram-3', text: 'Built CRM systems, job portals, and learning pages' },
                  { icon: 'bi-lightning-charge', text: 'Focus on performance, scalability, and clean architecture' },
                ].map((h) => (
                  <div
                    key={h.text}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: 'rgba(108, 98, 255,0.35)',
                      border: '1px solid rgba(108, 98, 255,0.28)',
                    }}
                  >
                    <i className={`bi ${h.icon}`} style={{ color: '#6C62FF', fontSize: '1rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: '#F4F2FF' }}>{h.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Career Journey ── */}
        <div className={styles.journeySection}>
          <motion.div
            className={styles.journeyHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.label} style={{ justifyContent: 'center' }}>
              <div className={styles.line} />
              Career Path
              <div className={styles.line} />
            </div>
            <h3 className={styles.title} style={{ marginBottom: '0.5rem' }}>
              My <span className="gradient-text">Growth Journey</span>
            </h3>
            <p className={styles.journeySubtitle}>
              From writing my first HTML tag to architecting enterprise full-stack systems
            </p>
          </motion.div>

          <div className={styles.journeyTrack}>
            {careerJourney.map((step, i) => (
              <motion.div
                key={step.id}
                className={styles.journeyStep}
                style={{ '--dot-color': step.color }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className={styles.stepDot} style={{ background: '#6C62FF', boxShadow: '0 0 0 4px rgba(108, 98, 255,0.85)' }} />

                <div className={styles.stepCard}>
                  <div
                    className={styles.stepIconWrap}
                    style={{ background: `${step.color}18`, color: step.color }}
                  >
                    <i className={`bi ${step.icon}`} />
                  </div>

                  {step.current && (
                    <div className={styles.currentPill}>Current</div>
                  )}

                  <div className={styles.stepRole}>{step.role}</div>
                  {step.period && <div className={styles.stepPeriod}>{step.period}</div>}

                  <ul className={styles.stepHighlights}>
                    {step.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
