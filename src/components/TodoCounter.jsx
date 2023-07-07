import React, { useContext } from 'react'
import {Typography} from '@mui/material'
import { confettiFireworks } from '../utils/fireworks'
import { TodoContext } from '../context/TodoProvider';

export const TodoCounter = () => {

  const { 
    completedTodos:completed,
    totalTodos:total,
  } = useContext(TodoContext);

  let mensaje = `Has completado ${completed} de ${total} TODOS`;
  if(completed===0 && total===0){
    mensaje='Agrega tus tareas y logra tus objetivos';
  }else  if(completed===total){
    mensaje = `¡Felicitaciones!, completaste todas las tareas`;
    confettiFireworks();
  }
  return (
    <Typography variant="body2" color="white" align="center">
      {mensaje}
    </Typography>
  )
}
