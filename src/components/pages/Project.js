import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { parse, v4 as uuidv4 } from "uuid"

import Loading from "../layout/Loading"
import Container from "../layout/Container"
import { formatPrice } from "../projects/ProjectCard"
import styles from './Project.module.css'
import ProjectForm from '../projects/ProjectsForm'
import Message from "../layout/Message"
import ServiceForm from "../Services/ServiceForm"

function Project(){
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjetcForm] = useState(false)
    const [message, setMessage] = useState()
    const [typeMessage, setTypeMessage] = useState()
    const [showServiceForm, setShowServiceForm] = useState(false)

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

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function editPost(project){
        //budget validation
        if(project.budget < project.cost){
            setMessage('Orçamento não pode ser menor do que o custo do projeto!')
            setTypeMessage('error')
            return false
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

    function createService(){
        setMessage()
        //last service
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()
        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //maximum value validation
        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
            setTypeMessage('error')
            project.services.pop()
            return false
        }

        //add service cost
        project.cost = newCost

        //update project
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
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
                            <div className={styles.projectInfo}>
                                {showProjectForm ? (
                                        <ProjectForm 
                                            handleSubmit={editPost}
                                            btnText='Salvar'
                                            projectData={project}
                                        />
                                ) : (
                                    <>
                                        <p>
                                            <span>Categoria:</span> {project.category.name}
                                        </p>
                                        <p>
                                            <span>Orçamento:</span> {formatPrice(parseFloat(project.budget))}
                                        </p>
                                        <p>
                                            <span>Total utilizado:</span> {formatPrice(parseFloat(project.cost))}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.serviceFormContainer}>
                            <h2>Adicione um serviço:</h2>
                            <button onClick={toggleServiceForm} className={styles.btn}>
                                {showServiceForm ? 'Fechar' : 'Adicionar'}
                            </button>
                            <div className={styles.projectInfo}>
                                    {showServiceForm && (
                                        <ServiceForm 
                                            handleSubmit={createService}
                                            btnText='Adicionar serviço'
                                            projectData={project}
                                        />
                                    )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass='start'>
                            <p>qualer</p>
                        </Container>
                    </Container>
                </div>
            ) : <Loading/>}
        </>
    )
}

export default Project