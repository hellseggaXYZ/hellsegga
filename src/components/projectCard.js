'use client'
import { useState } from 'react';

import styles from './projectCard.module.css'
import Link from 'next/link';
import CollaboratorButton from './CollaboratorButton';

export default function ProjectCard({ project }) {
  const { name, date, description, note, url, logo, hoverLogo, collaborators } = project;

  const [showHover, setShowHover] = useState(false);


  return (
    <Link href={url} className={styles.card} target='_blank' rel='noopener noreferrer' onMouseEnter={() => setShowHover(true)} onMouseLeave={() => setShowHover(false)}>
      <div className={styles.image}>
      <div className={hoverLogo && showHover ? styles.hide : ''}>
        {logo}
      </div>
      {hoverLogo && 
        <div className={styles.imageHover}>
          {showHover && hoverLogo}
        </div>
      }
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h2>{name}</h2>
            <h3>{date}</h3>
          </div>
          {description && 
            <div className={styles.description}>
              <div>{description}</div>
            </div>
          }
          {note && 
            <div className={styles.note}>
              <div>{note}</div>
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