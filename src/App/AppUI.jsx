
import {Box,Paper,Stack,Typography} from '@mui/material';

import { createPortal } from 'react-dom';


import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoLoading } from '../components/TodoLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import {TodoContext} from '../context/TodoProvider'
import { useContext } from 'react';
import { ModalNewTodo } from '../components/ModalNewTodo';

const AppUI = ()=> {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal
  } = useContext(TodoContext);
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
      <Stack sx={{
          backgroundColor:'#F1F0EE',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
          height:500
        }}>
        <Stack sx={{width:500,height:'auto'}}>
          <Box sx={{height:100 ,borderTopLeftRadius:20,borderTopRightRadius:20, backgroundColor:'blue'}}>
            <Typography variant="h6" color="white" textAlign="center">¿Qué quieres hacer?</Typography>
            <TodoCounter />
            <TodoSearch  />
            <Paper elevation={3} className="contentAlign" sx={{width:431,mt:1, ml:4.5}}>
              <TodoList>
                {loading && <TodoLoading />}
                {error && <p>Error</p>}
                {(!loading && searchedTodos.length===0 ) && <EmptyTodos />}
                {
                  searchedTodos.map(todo => (
                    <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed}
                      onComplete={()=> completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                    ))
                }
              </TodoList>
            </Paper>
          </Box>
        </Stack>
      </Stack>
      {openModal && createPortal(
        <ModalNewTodo openModal={openModal} />,
        document.body
      )}
      
    </Box>


  );
}

export default AppUI;
