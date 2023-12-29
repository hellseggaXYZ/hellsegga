'use client'

import styles from './projectCard.module.css'

export default function ProjectCard({ project }) {
  const { name, date, description, note, url, image, collaborators } = project;

  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <div className={styles.image}>
        {image}
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h2>{name}</h2>
            <h3>{date}</h3>
          </div>
          {description && 
            <div className={styles.description}>
              <p>{description}</p>
            </div>
          }
          {note && 
            <div className={styles.note}>
              <p>{note}</p>
            </div>
          }
        </div>
        <div className={styles.footer}>
          <div className={styles.collaborators}>
            {collaborators.map((collaborator, index) => (
              <a key={`collaborator-${index}`} href={collaborator.url} className={styles.collaborator} target="_blank" rel="noopener noreferrer">
                {collaborator.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

}