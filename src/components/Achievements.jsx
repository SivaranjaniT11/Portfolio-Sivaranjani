import { motion } from 'framer-motion';
import { achievements } from '../data';
import styles from './Achievements.module.scss';

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)}, ${parseInt(r[2],16)}, ${parseInt(r[3],16)}` : '228,177,90';
}

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
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
            Recognition
            <div className={styles.line} />
          </div>
          <h2 className="section-title">
            Milestones &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Key accomplishments, domains of expertise, and projects delivered since 19 Jun 2023
          </p>
        </motion.div>

        <div className="row g-4">
          {achievements.map((item, i) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                style={{ height: '100%' }}
              >
                <div
                  className={styles.card}
                  style={{ '--card-color': item.color }}
                >
                  <div
                    className={styles.iconWrapper}
                    style={{
                      background: `rgba(${hexToRgb(item.color)}, 0.12)`,
                      color: item.color,
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <span
                        className={styles.category}
                        style={{
                          background: `rgba(${hexToRgb(item.color)}, 0.1)`,
                          color: item.color,
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.issuer}>
                      <i className="bi bi-building" style={{ color: item.color }} />
                      {item.issuer}
                    </p>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
