import React from 'react'
import styles from './DesignCard.module.css'
import CollaboratorButton from './CollaboratorButton';
import Link from 'next/link';

export default function DesignCard({ design }) {

  const { name, category, media, collaborators, color, url } = design;


  return (
    <div className={styles.card}>
      <Link href={url} className={styles.media} target='_blank' rel='noopener noreferrer'>
        {media}
      </Link>
      <div className={styles.designInfo}>
        <div className={styles.text} style={{color: color}}>
          <h2>{name}</h2>
          <h2>{category}</h2>
        </div>
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
  )
}