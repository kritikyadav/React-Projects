import { createContext, useReducer } from "react"

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
});

const todoItemsReducer = (currentTodoItems, action) => {

    var newTodoItem = currentTodoItems;
    if (action.type === 'NEW_ITEM') {
        newTodoItem = [
            ...currentTodoItems, {
                name: action.payload.itemName,
                dueDate: action.payload.dueDate
            }
        ]
    } else if (action.type === 'DELETE') {
        newTodoItem = currentTodoItems.filter((item) => item.name !== action.payload.todoName)
    }
    return newTodoItem;
}

const TodoItemsContestProvider = ({ children }) => {

    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    const addNewItem = (itemName, dueDate) => {
        const newItemAction = {
            type: 'NEW_ITEM',
            payload: {
                itemName, dueDate
            }
        }
        if (itemName != '') { dispatchTodoItems(newItemAction) };
    }

    const deleteItem = (todoName) => {

        const newItemAction = {
            type: 'DELETE',
            payload: { todoName }
        }
        dispatchTodoItems(newItemAction);

    }

    return <TodoItemsContext.Provider
        value={{
            todoItems,
            addNewItem,
            deleteItem
        }}>
        {children}
    </TodoItemsContext.Provider>
}
export default TodoItemsContestProvider; 
