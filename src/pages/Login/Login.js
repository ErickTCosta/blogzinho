// Meu CSS
import styles from './Login.module.css'

const Login = () => {
  return (
    <div>
        <h2>Login</h2>
        <form >
            <label>
                <span>E-mail</span>
                <input type="email" name='email  ' required placeholder='Digite seu email' />
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name='password' required placeholder='Insira sua senha' />
            </label>
            <button className='btn' type='submit'>Entrar</button>
        </form>
    </div>
  )
}

export default Login