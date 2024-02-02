import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../projects/ProjectsForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }){
    const [service, setService] = useState()

    function handleChange(event){
        setService({...service, [event.target.name]: event.target.value})
    }

    function submit(event){
        event.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
            <Input
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira o valor'
                handleOnChange={handleChange}
            />
            <Input
                type='text'
                text='Descrição'
                name='description'
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm