import React, { useContext } from 'react'

import {Button,Stack} from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutline';
import { TodoContext } from '../context/TodoProvider';

export const CreateTodoButton = () => {
  const {setOpenModal,openModal} = useContext(TodoContext);

  const handleClickAdd = () =>{
    setOpenModal(!openModal);
  }
  return (
    <Stack sx={{width:100, mt:1}}>
      <Button variant="contained" startIcon={<AddIcon />} size="small" onClick={handleClickAdd}>Agregar</Button>
    </Stack>
  )
}
