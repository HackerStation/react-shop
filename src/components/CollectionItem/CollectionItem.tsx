import { MouseEvent } from 'react';
// import { useHistory, useRouteMatch } from 'react-router-dom';
import styles from './CollectionItem.module.scss';

type CollectionItemProps = {
  name: string;
  imageUrl: string;
  price: number;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
};

const CollectionItem = ({
  name,
  imageUrl,
  price,
  onClick,
}: CollectionItemProps) => {
  return (
    <div className={`${styles.collectionItem}`} onClick={onClick}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.collectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
