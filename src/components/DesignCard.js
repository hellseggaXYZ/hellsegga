'use client'

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
            <>
              { collaborator.url ?
                (
                  <a key={`collaborator-${index}`} href={collaborator.url} className={styles.collaborator} target="_blank" rel="noopener noreferrer">
                    {collaborator.name}
                  </a>
                ) : (
                  <div key={`collaborator-${index}`}>
                    {collaborator.name}
                  </div>
                )
              }
            </>
          ))}
        </div>
      </div>
    </div>
  )

}