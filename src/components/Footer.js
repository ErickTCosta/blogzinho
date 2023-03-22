import Styles from './Footer.module.css'


const Footer = () => {
  return (
        <footer className= {`d-flex flex-column align-items-center py-2 ${Styles.footer}`}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Blogzinho &copy; 2023</p>
    </footer>
  )
}

export default Footer