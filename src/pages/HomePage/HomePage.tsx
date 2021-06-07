import Directory from '../../components/Directory/Directory';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
};

export default HomePage;
