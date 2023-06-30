import React from 'react'
import './index.css';

import {Paper,TextField,Stack} from '@mui/material'

import { CreateTodoButton } from './CreateTodoButton';

export const TodoSearch = () => {
  return (
    <Stack className="contentAlign" >
      <Paper className="contentAlign" sx={{width:350, height:110,mt:1, pl:5,pr:5}}>
        <TextField fullWidth  id="add-todo" label="Agregar nueva tarea" variant="standard" sx={{mt:1}} />
        <CreateTodoButton/>
      </Paper>
    </Stack>
  )
}
