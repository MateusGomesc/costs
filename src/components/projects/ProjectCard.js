import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import styles from './ProjectCard.module.css'

function ProjectCard({ id, name, budget, category, handleRemove }){
    function formatPrice(value) {
        return "R$ " + value.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.projectCard}>
            <div>
                <h4>{name}</h4>
                <p>
                    <span>Orçamento:</span> {formatPrice(parseFloat(budget))}
                </p>
                <p className={styles.categoryText}>
                    <span className={`${styles[category?.toLowerCase()]}`}></span> {category}
                </p>
            </div>
            <div className={styles.projectCardActions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard