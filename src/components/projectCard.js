import styles from './projectCard.module.css'
import GithubIcon from '@/svg/github';
import BrowserIcon from '@/svg/browser';

export default function ProjectCard({ project }) {
  const { name, date, description, note, external_url, github_url, image, collaborators } = project;

  return (
    <div className={styles.card}>
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
              <a key={`collaborator-${index}`} href={collaborator.url} target="_blank" rel="noopener noreferrer">
                {collaborator.name}
              </a>
            ))}
          </div>
          <div className={styles.links}>
            {github_url && 
              <a href={github_url}>
                <GithubIcon />
              </a>
            }
            {external_url && 
              <a href={external_url}>
                <BrowserIcon />
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  )

}