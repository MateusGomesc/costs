import { useLocation } from "react-router-dom"

import Message from "../layout/Message"
import styles from './Project.module.css'
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton"

function Projects(){
    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.projectsContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus projetos</h1>
                <LinkButton 
                    to='/NewProjects' 
                    text='Criar Projeto'
                />
            </div>
            {message && (
                <Message 
                    type='sucess'
                    text={message}
                />
            )}
            <Container customClass='start'>
                projetos...
            </Container>
        </div>
    )
}

export default Projects