import styles from './projectCard.module.css'
import Link from 'next/link';
import CollaboratorButton from './CollaboratorButton';

export default function ProjectCard({ project }) {
  const { name, date, description, note, url, image, collaborators } = project;

  return (
    <Link href={url} className={styles.card} target='_blank' rel='noopener noreferrer'>
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
              <CollaboratorButton 
                key={`collaborator-${name}-${index}`} 
                collaborator={collaborator} 
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )

}