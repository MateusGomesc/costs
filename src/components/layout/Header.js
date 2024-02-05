import { Link } from "react-router-dom"
import Logo from '../../img/costs_logo.png'
import Container from './Container'
import styles from "./Header.module.css"

function Header(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={Logo} alt="Logo" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Projects'>Projetos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Header