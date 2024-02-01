import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Loading from "../layout/Loading"
import Container from "../layout/Container"
import { formatPrice } from "../projects/ProjectCard"
import styles from './Project.module.css'
import ProjectForm from '../projects/ProjectsForm'
import Message from "../layout/Message"

function Project(){
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjetcForm] = useState(false)
    const [message, setMessage] = useState()
    const [typeMessage, setTypeMessage] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setProject(data))
            .catch(error => console.log(error))
    }, [id])

    function toggleProjectForm(){
        setShowProjetcForm(!showProjectForm)
    }

    function editPost(project){
        //budget validation
        if(project.budget < project.cost){
            setMessage('Orçamento não pode ser menor do que o custo do projeto!')
            setTypeMessage('error')
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(response => response.json())
            .then(data => {
                setProject(data)
                setShowProjetcForm(false)
                setMessage('Projeto atualizado!')
                setTypeMessage('sucess')
            })
            .catch(error => console.log(error))
        
            setMessage()
    }

    return(
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass='column'>
                        {message && <Message type={typeMessage} text={message}/>}
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {showProjectForm ? 'Fechar' : 'Editar Projeto'}
                            </button>
                            {showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <ProjectForm 
                                        handleSubmit={editPost}
                                        btnText='Salvar'
                                        projectData={project}
                                    />
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Orçamento:</span> {formatPrice(parseFloat(project.budget))}
                                    </p>
                                    <p>
                                        <span>Total utilizado:</span> {formatPrice(parseFloat(project.cost))}
                                    </p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : <Loading/>}
        </>
    )
}

export default Project