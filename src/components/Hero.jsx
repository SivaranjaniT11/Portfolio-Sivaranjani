import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { personalInfo } from '../data';
import styles from './Hero.module.scss';

const typingWords = [
  'Full Stack Developer',
  'React JS Engineer',
  'CRM Builder',
  'Node.js Developer',
];

function useTypingEffect(words, speed = 75, pause = 2200) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const word = words[wordIdx];
    if (typing) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, wordIdx, words, speed, pause]);

  return display;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const typingText = useTypingEffect(typingWords);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: -18,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    const handleParallax = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      gsap.to('.gsap-parallax-slow', { x: x * 0.35, y: y * 0.35, duration: 1, ease: 'power1.out' });
      gsap.to('.gsap-parallax-fast', { x: x * 0.7, y: y * 0.7, duration: 1, ease: 'power1.out' });
    };

    window.addEventListener('mousemove', handleParallax);
    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={`${styles.gradientOrb} ${styles.orb1} gsap-parallax-slow`} />
      <div className={`${styles.gradientOrb} ${styles.orb2} gsap-parallax-slow`} />
      <div className={`${styles.gradientOrb} ${styles.orb3} gsap-parallax-fast`} />
      <div className={styles.grid} />

      <div className="container">
        <div className="row align-items-center g-5">
          {/* ── Left col ── */}
          <div className="col-lg-7">
            <motion.div
              className={styles.content}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className={styles.greeting} variants={itemVariants}>
                <div className={styles.dot} />
                Open to Opportunities
              </motion.div>

              <motion.h1 className={styles.name} variants={itemVariants}>
                Hi, I&apos;m{' '}
                <span className={styles.accent}>Sivaranjani</span>
              </motion.h1>

              <motion.div variants={itemVariants}>
                <div className={styles.companyBadge}>
                  <i className="bi bi-building" />
                  Currently @ {personalInfo.company} &nbsp;·&nbsp;
                  {personalInfo.experience}
                </div>
              </motion.div>

              <motion.div className={styles.roleWrapper} variants={itemVariants}>
                <span className={styles.typingText}>{typingText}</span>
                <span className={styles.cursor} />
              </motion.div>

              <motion.p className={styles.description} variants={itemVariants}>
                {personalInfo.heroSubtitle}
              </motion.p>

              <motion.div className={styles.ctaGroup} variants={itemVariants}>
                <motion.button
                  className="btn-primary-custom"
                  onClick={() => scrollTo('projects')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="bi bi-grid-fill" /> View Projects
                </motion.button>
             <motion.a
  href="/assets/Sivaranjani_Thiyagarajan_Resume.pdf"
  className="btn-outline-custom"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  download="Sivaranjani_Thiyagarajan_Resume.pdf"
>
  <i className="bi bi-download" /> Download Resume
</motion.a>
                <motion.button
                  className="btn-outline-custom"
                  onClick={() => scrollTo('contact')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="bi bi-chat-dots" /> Contact Me
                </motion.button>
              </motion.div>

              <motion.div className={styles.statBar} variants={itemVariants}>
                {/* {personalInfo.stats.map((s) => (
                  <div className={styles.stat} key={s.label}>
                    <div className={styles.statValue}>
                      {s.text ?? <>{s.value}<span>{s.suffix}</span></>}
                    </div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))} */}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Right col ── */}
          <div className="col-lg-5 text-center">
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
            >
              <div className={`${styles.imageRing} gsap-parallax-slow`} ref={imageRef}>
                <div className={styles.profilePlaceholder}>
                  <i className="bi bi-person-fill" />
                  <span>Sivaranjani</span>
                </div>
              </div>

              <motion.div
                className={`${styles.floatingBadge} ${styles.badge1}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.55 }}
              >
                <div className={styles.badgeIcon} style={{ background: 'rgba(108, 98, 255,0.1)', color: '#6C62FF' }}>
                  <i className="bi bi-lightning-charge-fill" />
                </div>
                <div className={styles.badgeText}>
                  <div className={styles.badgeTitle}>React & Next.js</div>
                  <div className={styles.badgeSub}>Frontend</div>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.floatingBadge} ${styles.badge2}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.55 }}
              >
                <div className={styles.badgeIcon} style={{ background: 'rgba(108, 98, 255,0.1)', color: '#6C62FF' }}>
                  <i className="bi bi-server" />
                </div>
                <div className={styles.badgeText}>
                  <div className={styles.badgeTitle}>Node.js & MySQL</div>
                  <div className={styles.badgeSub}>Backend</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
