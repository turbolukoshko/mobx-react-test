import { observer } from 'mobx-react-lite';
import React from 'react';
import todoList from '../../store/todo.js';

const Todo = observer(() => {
  return(
    <div>
      <h1>Todo list</h1>

      <button onClick={() => todoList.fetchData()}>Add new task</button>

      <ul>
        {todoList.todos.map((todo, index) => {
          return(
            <li key={todo.id + index}>
              <input type="checkbox" checked={todo.completed} onChange={() => todoList.completeTodo(todo.id)} />
              {todo.title}
              <button onClick={() => todoList.removeTodo(todo.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Todo;
