/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.scss';

export default function ProjectModal({ project, onClose }) {
  // project can be null (modal closed) — never read project.images directly, always optional-chain
  const images = project?.images?.length ? project.images : project ? [project.image] : [];
  const hasCarousel = images.length > 1;
  const [current, setCurrent] = useState(0);

  // Reset to first image whenever a new project is opened
  useEffect(() => {
    setCurrent(0);
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const goNext = () => setCurrent((c) => (c + 1) % images.length);
  const goPrev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalBox}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar: private badge + close button */}
            <div className={styles.modalTopBar}>
              <span className={styles.privatePill}>
                <i className="bi bi-lock-fill" /> Code Private
              </span>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={onClose}
                aria-label="Close"
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>

            <div className={styles.modalBody}>
              {/* Left: carousel / image */}
              <div className={styles.modalImageSide}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[current]}
                    src={images[current]}
                    alt={`${project.title} screenshot ${current + 1}`}
                    className={styles.modalImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {hasCarousel && (
                  <>
                    <button
                      type="button"
                      className={`${styles.carouselArrow} ${styles.arrowLeft}`}
                      onClick={goPrev}
                      aria-label="Previous image"
                    >
                      <i className="bi bi-chevron-left" />
                    </button>
                    <button
                      type="button"
                      className={`${styles.carouselArrow} ${styles.arrowRight}`}
                      onClick={goNext}
                      aria-label="Next image"
                    >
                      <i className="bi bi-chevron-right" />
                    </button>
                    <div className={styles.carouselDots}>
                      {images.map((_, i) => (
                        <span
                          key={i}
                          className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                          onClick={() => setCurrent(i)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Right: project explanation */}
              <div className={styles.modalDetailsSide}>
                {project.featured && (
                  <span className={styles.modalFeaturedTag}>Featured</span>
                )}
                <h3 className={styles.modalTitle}>{project.title}</h3>
                <p className={styles.modalDesc}>{project.description}</p>

                <h4 className={styles.modalSubHeading}>Key Features</h4>
                <div className={styles.featureList}>
                  {project.features.map((f) => (
                    <span key={f} className={styles.featureTag}>{f}</span>
                  ))}
                </div>

                <h4 className={styles.modalSubHeading}>Tech Stack</h4>
                <div className={styles.techTags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}