import { makeAutoObservable } from "mobx";

class Todo {
  constructor() {
    makeAutoObservable(this);
  }

  todos = [
    {id: 1, title: '1-st task', completed: false},
    {id: 2, title: '2-nd task', completed: true},
    {id: 3, title: '3-rd task', completed: false},
  ];

  addTodo = (data) => {
    this.todoList.push(data);
  }

  removeTodo = (id) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo = (id) => {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      this.todos = [...this.todos, json];
    })
  }
}

export default new Todo();
