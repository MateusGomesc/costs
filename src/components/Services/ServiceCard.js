import styles from '../projects/ProjectCard.module.css'
import { formatPrice } from '../projects/ProjectCard'
import { BsFillTrashFill } from 'react-icons/bs'

export function ServiceCard({ id, name, description, handleRemove, cost }){
    function remove(event){
        event.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Custo Total:</span> {formatPrice(parseFloat(cost))}
            </p>
            <p>{description}</p>
            <div className={styles.projectCardActions}>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard