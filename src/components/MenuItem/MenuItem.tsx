import { useHistory, useRouteMatch } from 'react-router-dom';
import styles from './MenuItem.module.scss';

type MenuItemProps = {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
};

const MenuItem = ({ title, imageUrl, size, linkUrl }: MenuItemProps) => {
  let history = useHistory();
  let match = useRouteMatch();

  return (
    <div
      className={`${styles.menuItem} ${size ? styles[size] : ''}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toLocaleUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
