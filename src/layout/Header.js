import { Link } from "react-router-dom"
import Home from "../pages/Home"
import Logo from '../img/costs_logo.png'
import Company from "../pages/Company"
import NewProjects from "../pages/NewProjects"
import Contact from "../pages/Contact"

function Header(){
    return(
        <div>
            <Link to={Home}>
                <img src={Logo} alt="Logo" />
            </Link>
            <Link to='/'>Home</Link>
            <Link to='/Company'>Empresa</Link>
            <Link to='/NewProjects'>Projetos</Link>
            <Link to='Contact'>Contatos</Link>
        </div>
    )
}

export default Header