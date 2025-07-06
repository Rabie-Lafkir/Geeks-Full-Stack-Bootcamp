import { TodoList } from './todo.js';

const todos = new TodoList();
todos.add('Learn ES6 modules', true);
todos.add('Build a todo app', true);
todos.add('Run a todo app');
todos.add('Test a todo app');
todos.complete(0);
todos.complete(1);
console.log(todos.list());
