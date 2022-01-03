import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
                <p>Rodapé show!</p>
            </ul>
        </footer>
    )
}

export default Footer