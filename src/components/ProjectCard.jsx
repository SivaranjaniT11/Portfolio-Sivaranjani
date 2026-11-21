/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import styles from './Projects.module.scss';

export default function ProjectCard({ project, index, onViewDetails }) {
  const coverImage = project.images?.length ? project.images[0] : project.image;

  return (
    <motion.div
      className="col-lg-4 col-md-6"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      layout
    >
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={coverImage}
            alt={project.title}
            className={styles.projectImage}
            loading="lazy"
          />

          {project.featured && (
            <div className={styles.featuredBadge}>Featured</div>
          )}

          {project.images?.length > 1 && (
            <div className={styles.imageCount}>
              <i className="bi bi-images" /> {project.images.length}
            </div>
          )}
        </div>

        <div className={styles.cardBody}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDesc}>{project.description}</p>

          <div className={styles.techTags}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>

          <button
            type="button"
            className={styles.viewDetailsBtn}
            onClick={() => onViewDetails(project)}
          >
            View Details <i className="bi bi-arrow-right" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}