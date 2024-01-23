import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value }){
    return(
        <div className={styles.input}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type}
                placeholder={placeholder}
                id={name}
                value={value}
                onChange={handleOnChange} 
            />
        </div>
    )
}

export default Input