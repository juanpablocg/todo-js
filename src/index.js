import './styles.css';
import { crearTodoHtml } from './js/componentes.js';

//Con esta linea ya me reconoce el archivo index.js
import { Todo, TodoList } from './classes'

export const todoList = new TodoList();

// todoList.todos.forEach(todo =>  crearTodoHtml(todo));
//Es lo mismo que la imstruccion de arriba solo con un argumento
todoList.todos.forEach(crearTodoHtml);

todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);
