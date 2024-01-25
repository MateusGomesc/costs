import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectsForm.module.css'

function ProjectsForm({ btnText, handleSubmit, projectData }){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    const Submit = (event) => {
        event.preventDefault()
        handleSubmit(project)
    }

    function handleChange(event){
        setProject({ ...project, [event.target.name]: event.target.value})
    }

    function handleCategory(event){
        setProject({ ...project, category: {
            id: event.target.value,
            name: event.target.options[event.target.selectedIndex].text
        }})
    }

    return(
        <form onSubmit={Submit} className={styles.form}>
            <Input 
                text='Nome do projeto'
                type='text'
                name='name'
                placeholder='Insira o nome'
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                text='Orçamento'
                type='number'
                name='budget'
                placeholder='Insira o orçamento'
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name='categoryID'
                text='Selecione a categoria'
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}

export default ProjectsForm