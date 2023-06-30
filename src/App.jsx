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
      <Stack sx={{width:500,height:'auto'}}>
        <Box sx={{height:100 ,borderTopLeftRadius:20,borderTopRightRadius:20, backgroundColor:'blue'}}>
          <Typography variant="h6" color="white" textAlign="center">¿Qué quieres hacer?</Typography>
          <TodoCounter completed={4} total={5} />
          <TodoSearch/>

        </Box>
      </Stack>
          {/* <Paper elevation={3}   >
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
         
          </Paper> */}
    </Box>
      
  );
}

export default App;
