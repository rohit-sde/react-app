import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

// import Todo from "./models/todo";
// import "./App.css";

function App() {
    // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;
