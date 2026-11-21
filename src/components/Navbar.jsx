import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.scss';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((n) => n.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className={styles.brand} onClick={() => scrollTo('#home')}>
            <span>&lt;</span>
            <span>Sivaranjani</span>
            <span>/&gt;</span>
          </div>

          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  className={`${styles.navLink} ${activeSection === item.href.replace('#', '') ? styles.active : ''}`}
                  onClick={() => scrollTo(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button className={`${styles.navLink} ${styles.ctaBtn}`} onClick={() => scrollTo('#contact')}>
                Contact
              </button>
            </li>
          </ul>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  className={`${styles.mobileNavLink} ${activeSection === item.href.replace('#', '') ? styles.active : ''}`}
                  onClick={() => scrollTo(item.href)}
                >
                  {item.label}
                </button>
              ))}
              <button
                className={`${styles.mobileNavLink} ${styles.mobileCta}`}
                onClick={() => scrollTo('#contact')}
              >
                Contact Me
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
