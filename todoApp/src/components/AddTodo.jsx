import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo_itemsStore";


function AddTodo() {

  /**
   * useRef allows access to DOM elements and retains mutable values without re-renders. 
   * used with the ref attribute for direct DOM interactions. 
   * can hold previous state or prop values. 
   * Not limited to DOM referances: can hold any value. 
   * Refs can be passed as porps also.
   * 
   */
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const {addNewItem} = useContext(TodoItemsContext);


  const addTodoClicked = () => {
    event.preventDefault();

    const itemName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = '';
    dueDateElement.current.value = '';

    addNewItem(itemName, dueDate);
  }


  return (
    <div className="container text-center">
      <form action="" onSubmit={addTodoClicked} className="row kg-row">
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
            id="inputToDoName" />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            type="date"
            id="inputDueDate" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <BiMessageAdd></BiMessageAdd>
          </button>

        </div>
      </form>
    </div>
  );
}

export default AddTodo;
