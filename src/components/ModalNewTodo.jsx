import React, { useContext, useState } from 'react'
import {Dialog, DialogTitle,DialogContent, DialogContentText, TextField, DialogActions, Button} from '@mui/material';
import { TodoContext } from '../context/TodoProvider';


export const ModalNewTodo = () => {
  const {searchValue,setSearchValue,openModal, setOpenModal,saveTodo} = useContext(TodoContext);
  const [tareaValue, setTarea] = useState(searchValue);
  const handleCancel = () => {
    setOpenModal(!openModal);
    setSearchValue('');
  }
  const handleAccept = () => {
    saveTodo(tareaValue);
    setOpenModal(!openModal);
  }
  return (
    <>
      <Dialog open={openModal} onClose={handleCancel} fullWidth>
        <DialogTitle>Nueva tarea</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {searchValue ? ' ¿Está seguro que quiere registar esta tarea?' : '  Escribe la tarea que deseas realizar'}
          </DialogContentText>
          <TextField 
            autoFocus
            margin="dense"
            id="txt_tarea"
            label="Descripción"
            type="text"
            fullWidth
            variant="standard"
            value={tareaValue}
            onChange={(event) => {
              setTarea(event.target.value);
            }} 
            onKeyUp={event => {
              console.log(event.key);
              if (event.key === 'Enter') {
                handleAccept();
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button onClick={handleAccept}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
