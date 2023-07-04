import React, { useState } from 'react';

import {Box,Paper,Stack,Typography} from '@mui/material';


import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';


const defaultTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'Terminar curso de react', completed:false},
  {text: 'Desarrollar esta opción', completed:true},
  {text: 'Agregarle estilos css',  completed:false},
  {text: 'Llorar con la llorona',  completed:true},
]
const App = ()=> {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    setTodos(newTodos);
  }
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }
  
  return (
     <Box
        sx={{
          display: 'flex',
          alignItems:'center',
          flexDirection:'column',
          width:'100wv',
          height:'95vh',
          pt:5
        }}
      >
      <Stack sx={{
          backgroundColor:'#F1F0EE',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
          height:500
        }}>
        <Stack sx={{width:500,height:'auto'}}>
          <Box sx={{height:100 ,borderTopLeftRadius:20,borderTopRightRadius:20, backgroundColor:'blue'}}>
            <Typography variant="h6" color="white" textAlign="center">¿Qué quieres hacer?</Typography>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <Paper elevation={3} className="contentAlign" sx={{width:431,mt:1, ml:4.5}}>
              <TodoList>
                {
                  searchedTodos.map(todo => (
                    <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed}
                      onComplete={()=> completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                      ))
                    }
              </TodoList>
            </Paper>
          </Box>
        </Stack>
      </Stack>
         
    </Box>
      
  );
}

export default App;
