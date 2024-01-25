import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value }){
    return(
        <div className={styles.select}>
            <label htmlFor={name}>{text}:</label>
            <select 
                name={name} 
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option selected disabled>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select