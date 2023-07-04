import React from 'react'
import {Typography} from '@mui/material'
import { confettiFireworks } from './utils/fireworks'

export const TodoCounter = ({total, completed}) => {
  let mensaje = `Has completado ${completed} de ${total} TODOS`;
  if(completed===total){
    mensaje = `¡Felicitaciones!, completaste todas las tareas`;
    confettiFireworks();
  }
  return (
    <Typography variant="body2" color="white" align="center">
      {mensaje}
    </Typography>
  )
}
