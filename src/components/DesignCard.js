import React from 'react'
import styles from './DesignCard.module.css'
import CollaboratorButton from './collaboratorButton';

export default function DesignCard({ design }) {

  const { name, category, media, collaborators, color } = design;


  return (
    <div className={styles.card}>
      <div className={styles.media}>
        {media}
      </div>
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