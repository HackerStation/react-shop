import React, { useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';

import styles from './Directory.module.scss';

import initialData from './directory.data.json';

const Directory = () => {
  const [sections, setSections] = useState(initialData)

  return (
    <div className={styles.directoryMenu}>
      {
        sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem 
            key={id} 
            title={title} 
            imageUrl={imageUrl}
            size={size} />
        ))
      }
    </div>
  )
}

export default Directory;

