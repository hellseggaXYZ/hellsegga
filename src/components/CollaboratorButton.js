'use client'

import styles from './CollaboratorButton.module.css'
import React, { Fragment } from 'react'

export default function CollaboratorButton({ collaborator }) {

  const { name, url } = collaborator;

  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <Fragment>
      { url ?
        (
          <div className={styles.collaborator} onClick={handleOnClick}>
            {name}
          </div>
        ) : (
          <div>
            {name}
          </div>
        )
      }
    </Fragment>
  )
}