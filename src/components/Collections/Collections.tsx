import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import styles from './Collections.module.scss';

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

type CollectionsProp = {
  title: string;
  routeName: string;
  items: Item[];
};

const Collections = ({ title, routeName, items }: CollectionsProp) => {
  let history = useHistory();
  const match = useRouteMatch();

  return (
    <div className={styles.collectionPreview}>
      <Link to={`${match.url}/${routeName}`}>
        <h2 className={styles.title}>{title.toUpperCase()}</h2>
      </Link>
      <div className={styles.preview}>
        {items.slice(0, 4).map(({ id, ...props }) => (
          <CollectionItem
            key={`collection-${id}`}
            {...props}
            onClick={() => history.push(`${match.url}/${routeName}/${id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
