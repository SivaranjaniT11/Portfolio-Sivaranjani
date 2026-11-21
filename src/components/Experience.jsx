import { motion } from 'framer-motion';
import { experience } from '../data';
import styles from './Experience.module.scss';

export default function Experience() {
  const company = experience[0];

  return (
    <section id="experience" className={styles.section}>
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
            Work History
            <div className={styles.line} />
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            The same Taizo.in path as My Growth Journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.mainCard}>
            <div className={styles.companyRow}>
              <div>
                <div className={styles.companyName}>{company.company}</div>
                <div className={styles.metaLine}>
                  {company.location} · Jun 2023 — Present
                </div>
              </div>
            </div>

            <div className={styles.roles}>
              {experience.map((role) => (
                <div key={role.id} className={styles.roleBlock}>
                  <div className={styles.roleHead}>
                    <div className={styles.roleName}>
                      {role.role}
                      {role.current && <span className={styles.now}>Current</span>}
                    </div>
                    <div className={styles.duration}>
                      {role.period} · {role.duration}
                    </div>
                  </div>
                  <ul className={styles.responsibilities}>
                    {role.responsibilities.map((item) => (
                      <li key={item} className={styles.responsibility}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
