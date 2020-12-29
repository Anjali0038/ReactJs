import React,{useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos]= useState([
    {
      id:1,
      title:"Draw",
      isCompleted: false,
    },
    {
      id:2,
      title:"Read",
      isCompleted: true,
    },
  ]);
  const deleteTodo =(id)=>{
    setTodos (todos.filter(todo=>todo.id=! id));
  };
  const addTodo =(text) => {
    const newTodo = {
      id:3,
      title:text,
      isCompleted:false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;
