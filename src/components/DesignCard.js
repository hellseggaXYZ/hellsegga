'use client'
import React from 'react'
import styles from './DesignCard.module.css'

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
            <React.Fragment key={`d-collaborator-${name}-${index}`}>
              { collaborator.url ?
                (
                  <a  href={collaborator.url} className={styles.collaborator} target="_blank" rel="noopener noreferrer">
                    {collaborator.name}
                  </a>
                ) : (
                  <div>
                    {collaborator.name}
                  </div>
                )
              }
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )

}