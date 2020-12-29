import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos,deleteTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <Todo 
                key={todo.id}
                title={todo.title}
                deleteTodo ={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
