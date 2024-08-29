import styles from './Display.module.css'

const Display = ({calValue})=> {
    return<> 
        <input type="text" key='inputField' className={`${styles.display}`} value={calValue} readOnly/>
    </>
}

export default Display; 
