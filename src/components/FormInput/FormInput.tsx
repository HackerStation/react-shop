import { FormEvent } from 'react';
import styles from './FormInput.module.scss';

type FormInputProps = {
  type: string;
  name: string;
  value: string;
  label?: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, handleChange, ...props }: FormInputProps) => {
  return (
    <div className={styles.group}>
      {label ? (
        <label 
          className={`${styles.formInputLabel} ${props.value.length ? styles.shrink : ''}`}
        >{label}</label>
      ): null}
      <input
        className={styles.formInput} 
        onChange={handleChange}
        { ...props }
      />
    </div>
  )
}

export default FormInput;