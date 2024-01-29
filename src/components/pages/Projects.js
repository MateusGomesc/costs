import { useLocation } from "react-router-dom"

import { useEffect, useState } from "react"

import Message from "../layout/Message"
import styles from './Project.module.css'
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../projects/ProjectCard"
import Loading from '../layout/Loading'

function Projects(){
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleteMessage, setDeleteMessage] = useState('')

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
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(() => {
                setProjects(projects.filter(project => project.id !== id))
                setDeleteMessage('Projeto excluído com sucesso!')
            })
            .catch(error => console.log(error))
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
            {deleteMessage && (
                <Message 
                    type='error'
                    text={deleteMessage}
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
                        handleRemove={removeProject}
                    />
                ))}
                {loading && <Loading/>}
                {!loading && projects?.length === 0 && <p>Não foram encontrados projetos cadastrados!</p>}
            </Container>
        </div>
    )
}

export default Projects