import { ButtonHTMLAttributes, ReactChildren } from 'react';
import styles from './Button.module.scss';


const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button 
      className={styles.customButton}
      { ...props }
    >
      { children }
    </button>
  )
}

export default Button;