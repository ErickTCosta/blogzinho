import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

import { useAuthentication  } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {
  const { user } = useAuthValue()
  const { logout } = useAuthentication();

  return (
    <nav className={`${styles.navbar} d-flex justify-content-between aling-items-center p-4 `}>
        <NavLink to = '/ ' className={styles.brand}>
            <span> Blogzinho </span>
        </NavLink>
        <ul className={styles.link_list}>
            <li > <NavLink to="/"className={({ isActive }) => (isActive ? styles.active : " ")}>Home</NavLink> </li>
            { !user && (
                <>
                  <li > <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : " ")}>Registre-se</NavLink> </li>
                  <li > <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : " ")}>Entrar</NavLink> </li>
                </>
            )}
             { user && (
                <>
                  <li > <NavLink to="/post/create" className={({ isActive }) => (isActive ? styles.active : " ")}>Criar poste</NavLink> </li>
                  <li > <NavLink to="/dash" className={({ isActive }) => (isActive ? styles.active : " ")}>Dashboard</NavLink> </li>
                </>
            )}
            <li > <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : " ")}>About</NavLink> </li> 
            {user &&(
              <li className='btn cursor-pointer p-0' onClick={logout}>Sair</li>
            )}  
        </ul>
    </nav>
  )
}

export default NavBar