import React from 'react'
import {Typography} from '@mui/material'
import { confettiFireworks } from './utils/fireworks'

export const TodoCounter = ({total, completed}) => {
  if(completed===total){
    confettiFireworks();
  }
  return (
    <Typography variant="body2" color="white" align="center">
      Has completado {completed} de {total} TODOS
    </Typography>
  )
}
