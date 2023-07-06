import React, { useContext } from 'react'
import '../index.css';

import {Paper,TextField,Stack} from '@mui/material'

import { CreateTodoButton } from './CreateButton';
import { TodoContext } from '../context/TodoProvider';

export const TodoSearch = () => {

  const {searchValue,setSearchValue} = useContext(TodoContext);
 
  return (
    <Stack className="contentAlign" >
      <Paper className="contentAlign" sx={{width:350, height:110,mt:1, pl:5,pr:5}}>
        <TextField 
          fullWidth  
          id="add-todo" 
          label="Buscar a agregar nueva tarea" 
          variant="standard" 
          sx={{mt:1}} 
          onChange={(event) => {
            setSearchValue(event.target.value);
          }} 
          value={searchValue} 
        />
        <CreateTodoButton/>
      </Paper>
    </Stack>
  )
}
