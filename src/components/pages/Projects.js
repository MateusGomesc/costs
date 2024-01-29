import { useLocation } from "react-router-dom"

import { useEffect, useState } from "react"

import Message from "../layout/Message"
import styles from './Project.module.css'
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../projects/ProjectCard"

function Projects(){
    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.log(error))
    }, [])

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
                {projects.length > 0 && projects.map(project => (
                    <ProjectCard 
                        id={project?.id}
                        name={project?.name}
                        budget={project?.budget}
                        category={project?.category?.name}
                        key={project?.id}
                    />
                ))}
            </Container>
        </div>
    )
}

export default Projects