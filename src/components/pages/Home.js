import Savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home(){
    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Bem-vindo ao <span className={styles.emphasis}>Costs!</span></h1>
            <h3 className={styles.subtitle}>Gerencie seus projetos agora mesmo!</h3>
            <LinkButton 
                to='/NewProjects' 
                text='Criar Projeto'
            />
            <img src={Savings} alt="Imagem Promocional" className={styles.image}/>
        </section>
    )
}

export default Home