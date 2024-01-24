import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectsForm.module.css'

function ProjectsForm({ btnText }){
    const [categories, setCategories] = useState([])

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

    return(
        <form className={styles.form}>
            <Input 
                text='Nome do projeto'
                type='text'
                name='name'
                placeholder='Insira o nome'
            />
            <Input 
                text='Orçamento'
                type='number'
                name='budget'
                placeholder='Insira o orçamento'
            />
            <Select 
                name='categoryID'
                text='Selecione a categoria'
                options={categories}
            />
            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}

export default ProjectsForm