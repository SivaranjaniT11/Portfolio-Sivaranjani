import { motion } from 'framer-motion';
import { services } from '../data';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <section id="services" className={styles.section}>
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
            What I Offer
            <div className={styles.line} />
          </div>
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">
            Comprehensive development services tailored to your project needs
          </p>
        </motion.div>

        <div className="row g-4">
          {services.map((service, i) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className={styles.card}
                  style={{ '--card-color': service.color }}
                >
                  <div
                    className={styles.icon}
                    style={{
                      background: `rgba(${hexToRgb(service.color)}, 0.1)`,
                      color: service.color,
                    }}
                  >
                    <i className={`bi ${service.icon}`} />
                  </div>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.desc}>{service.description}</p>
                  <a
                    href="#contact"
                    className={styles.learnMore}
                    style={{ color: service.color }}
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  >
                    Get in touch <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '228, 177, 90';
}
