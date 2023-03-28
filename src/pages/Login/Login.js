// Meu CSS
import styles from './Login.module.css'

import { useAuthentication } from '../../hooks/useAuthentication';
import { useState, useEffect } from 'react'
import { async } from '@firebase/util';
import { redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    const user = {
      email,
      password
    };
    const res = await login(user);

  }

  return (
    <section>
        <h2>Entrar</h2>
        <p>Faça o login para utilizar o sistema</p>
        <hr />
        <form onSubmit={handleSubmit}>
            <label>
                <span>E-mail</span>
                <input type="email" name='email' required placeholder='Digite seu email'onChange={(e)=> setEmail(e.target.value)} />
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name='password' required placeholder='Insira sua senha' onChange={(e)=> setPassword(e.target.value)} value={password}/>
            </label>
            { !loading && <button className='btn btn-success my-4' type='submit'>Entrar</button>}
            { loading && <button className='btn btn-success my-4'disabled type='submit'>Aguarde...</button>}
            {error && <p className={`text-danger ${styles.error}`}>{error}</p>}
        </form>
    </section>
  )
}

export default Login