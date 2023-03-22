// Meu CSS
import styles from './Register.module.css'

// MEUS Importe
import { useState, useEffect } from 'react'

const Register = () => {
    const [ displayName, setDisplayName ] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ error, setError ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        
        const user = { displayName, email, password}

        if (password !== confirmPassword) {
            setError ("As senhas precisam ser identicas")
            return
        }
        console.log(user);
    }

  return (
    <div className={`${styles.register} container`}>
        <h2>Registre-se para postar seu conteúdo</h2>
        <p>Crie seu Usuário e compartilhe suas histórias.</p>
        <form onSubmit={ handleSubmit }>
            <label>
                <span>Nome do Usuário</span>
                <input type="text" name='displayName' required placeholder='Nome do Usuário' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>E-mail</span>
                <input type="email" name='email' required placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name='password' required placeholder='Insira sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirme sua senha</span>
                <input type="password" name='confirmPassword' required placeholder='Confirme sua sua senha'value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <button className='btn btn-success my-4' type='submit'>Cadastrar</button>
            {error && <p className={`text-danger ${styles.error}`}>{error}</p>}
        </form>

    </div>
  )
}

export default Register