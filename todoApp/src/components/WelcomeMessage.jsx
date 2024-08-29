import { useContext } from 'react';
import styles from './WelcomeMessage.module.css'
import { TodoItemsContext } from '../store/todo_itemsStore';



const WelcomeMessage = () => {

    const {todoItems} = useContext(TodoItemsContext);

    return (
        todoItems.length === 0 && <p className={styles.WelcomeMessage}>No Tasks for the day.</p>
    )
}

export default WelcomeMessage; 
