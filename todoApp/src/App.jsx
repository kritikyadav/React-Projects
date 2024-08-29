import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContestProvider from "./store/todo_itemsStore";
import "./App.css";

function App() {

  return <>
    <TodoItemsContestProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems ></TodoItems>
      </center>
    </TodoItemsContestProvider>
  </>
}

export default App;

/**
 * learnt useState, useContext, useRef and finaly used useReducer. 
 * always try to use useState or useRef at first. If code is getting more complex then use useContext or useReducer if it is very complex. 
 * react\hooks.txt
 * above file contains notes for all the hooks that are majorly used in any projects. 
 */
