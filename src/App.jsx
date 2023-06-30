import React from 'react';

import {Box,Paper,Stack,Typography} from '@mui/material';


import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';


const defaultTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'Terminar curso de react', completed:true},
  {text: 'Desarrollar esta opción', completed:true},
  {text: 'Agregarle estilos css',  completed:false},
  
]
const App = ()=> {
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

      <Stack sx={{backgroundColor:'#F1F0EE', borderTopLeftRadius:20,borderTopRightRadius:20,height:500}}>
        <Stack sx={{width:500,height:'auto'}}>
          <Box sx={{height:100 ,borderTopLeftRadius:20,borderTopRightRadius:20, backgroundColor:'blue'}}>
            <Typography variant="h6" color="white" textAlign="center">¿Qué quieres hacer?</Typography>
            <TodoCounter completed={4} total={5} />
            <TodoSearch/>
            <Paper elevation={3} className="contentAlign" sx={{width:431,mt:1, ml:4.5}}>
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
            </Paper>
          </Box>
        </Stack>
      </Stack>
         
    </Box>
      
  );
}

export default App;
