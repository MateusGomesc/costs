import ProjectsForm from '../projects/ProjectsForm'
import styles from './NewProjects.module.css'

function NewProjects(){
    return(
        <div className={styles.newProjectContainer}>
            <h1>Adicionar Projeto</h1>
            <p>Crie aqui seus projetos para gerenciá-los posteriormente!</p>
            <ProjectsForm btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProjects