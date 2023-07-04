import React, { useState } from 'react';

// import logoAddNotes from './imgs/addNotes.jpg';

import {Box,Paper,Stack,Typography} from '@mui/material';


import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';


// const defaultTodos = [
//   {text: 'Cortar cebolla', completed:true},
//   {text: 'Terminar curso de react', completed:false},
//   {text: 'Desarrollar esta opción', completed:true},
//   {text: 'Agregarle estilos css',  completed:false},
//   {text: 'Llorar con la llorona',  completed:true},
// ]

// localStorage.setItem('TODOS',JSON.stringify(defaultTodos));

const App = ()=> {
  const localStorageTodos = localStorage.getItem('TODOS');

  let parsedTodos;
  if(!localStorageTodos){
    localStorage.setItem('TODOS','[]');
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(parsedTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });


  const saveTodos = (newTodos) =>{
    localStorage.setItem('TODOS', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
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
              {
                searchedTodos.length>0 ? 
                (
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
                  )
                  :(
                    <Box>
                      <Typography variant="h6">Comienza a crear tus tareas</Typography>
                      <img src={process.env.PUBLIC_URL+"/imgs/addNote.jpg"} alt="logo" width={255} height={255} fit="contain" />
                      <Typography variant="body2">Image by <a href="https://www.freepik.com/free-vector/flat-hand-drawn-time-management-concept_13560988.htm#page=2&query=new%20task&position=0&from_view=search&track=ais">Freepik</a></Typography>
                    </Box>
                  )
                }
                  </Paper>
          </Box>
        </Stack>
      </Stack>
         
    </Box>
      
  );
}

export default App;
