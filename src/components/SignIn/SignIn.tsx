import { FormEvent, useState } from 'react';
import Button from '../Button/Button';
import FormInput from "../FormInput/FormInput"
import styles from './SignIn.module.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  }
  
  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleFormSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          label='Email'
          handleChange={e => setEmail(e.currentTarget.value)}
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          label='Password'
          handleChange={e => setPassword(e.currentTarget.value)}
        />
        <Button type='submit'>Sign in</Button>
      </form>
    </div>
  )
}

export default SignIn;