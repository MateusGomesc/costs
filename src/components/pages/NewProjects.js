import { useNavigate } from 'react-router-dom'

import ProjectsForm from '../projects/ProjectsForm'
import styles from './NewProjects.module.css'

function NewProjects(){
    const navigate = useNavigate()

    function createPost(project){
        //initialize cost and service
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(response => response.json())
            .then(data => navigate('/projects', {state: {message: 'Projeto criado com sucesso!'}}))
            .catch(error => console.log(error))
    }

    return(
        <div className={styles.newProjectContainer}>
            <h1>Adicionar Projeto</h1>
            <p>Crie aqui seus projetos para gerenciá-los posteriormente!</p>
            <ProjectsForm handleSubmit={createPost} btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProjects