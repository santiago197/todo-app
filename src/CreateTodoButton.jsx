import React from 'react'

import {Button,Stack} from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutline';

export const CreateTodoButton = () => {
  return (
    <Stack sx={{width:100, mt:1}}>
      <Button variant="contained" startIcon={<AddIcon />} size="small" >Agregar</Button>
    </Stack>
  )
}
