import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectsForm.module.css'

function ProjectsForm({ btnText }){
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

            />
            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}

export default ProjectsForm