import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import styles from './Footer.module.scss';

const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Services', 'Achievements', 'Contact'];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className={styles.brand}>
              <span>&lt;</span>
              <span>Sivaranjani</span>
              <span>/&gt;</span>
            </div>
            <p className={styles.tagline}>
              Full Stack Developer crafting modern, scalable, and beautiful web experiences.
            </p>
            <div className={styles.socialLinks}>
              {/* <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <i className="bi bi-github" />
              </a> */}
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <i className="bi bi-linkedin" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className={styles.socialBtn}>
                <i className="bi bi-envelope-fill" />
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <p className={styles.sectionTitle}>Quick Links</p>
            {quickLinks.slice(0, 4).map((link) => (
              <button key={link} className={styles.link} onClick={() => scrollTo(link)}>
                {link}
              </button>
            ))}
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <p className={styles.sectionTitle}>&nbsp;</p>
            {quickLinks.slice(4).map((link) => (
              <button key={link} className={styles.link} onClick={() => scrollTo(link)}>
                {link}
              </button>
            ))}
          </div>

          <div className="col-lg-4 col-md-6">
            <p className={styles.sectionTitle}>Contact Info</p>
            <div className={styles.socialRow}>
                  {/* <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                    <i className="bi bi-github" />
                  </a> */}
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className={styles.socialBtn}>
                    <i className="bi bi-envelope-fill" />
                  </a>
                  {/* <a href="#" className={styles.socialBtn}>
                    <i className="bi bi-twitter-x" />
                  </a> */}
                </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Sivaranjani. Designed &amp; Built with{' '}
            <span style={{ color: '#6C62FF' }}>&#10084;</span>
          </p>
          <motion.button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <i className="bi bi-arrow-up" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
