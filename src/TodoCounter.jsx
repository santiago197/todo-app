import React from 'react'
import {Typography} from '@mui/material'

export const TodoCounter = ({total, completed}) => {
  return (
    <Typography variant="body2" color="white" align="center">
      Has completado {completed} de {total} TODOS
    </Typography>
  )
}
