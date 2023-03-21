import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to = '/ ' className={styles.brand}>
            <span> Blogzinho </span>
        </NavLink>
        <ul className={styles.link_list}>
            <li > <NavLink to="/"className={({ isActive }) => (isActive ? styles.active : " ")}>Home</NavLink> </li>
            <li > <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : " ")}>Registre-se</NavLink> </li>
            <li > <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : " ")}>Entrar</NavLink> </li>
            <li > <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : " ")}>About</NavLink> </li>   
        </ul>
    </nav>
  )
}

export default NavBar