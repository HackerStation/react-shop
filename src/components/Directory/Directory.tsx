import { useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';

import styles from './Directory.module.scss';

import initialData from './directory.data.json';

const Directory = () => {
  const [sections, setSections] = useState(initialData);

  return (
    <div className={styles.directoryMenu}>
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
};

export default Directory;
