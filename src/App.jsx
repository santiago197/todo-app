import React from 'react';

import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'Terminar curso de react', completed:true},
  {text: 'Desarrollar esta opción', completed:true},
  {text: 'Agregarle estilos css',  completed:false},
  
]
const App = ()=> {
  return (
    <div className="App">
      <TodoCounter completed={4} total={5} />
      <TodoSearch/>
      <TodoList>
        {
          defaultTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} />
          ))
        }
      </TodoList>

      <CreateTodoButton/>
  
     
    </div>
  );
}

export default App;
