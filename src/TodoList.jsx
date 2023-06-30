import { List } from '@mui/material'
import React from 'react'

export const TodoList = (props) => {
  return (
    <List sx={{ width: '100%', maxWidth: 400 }}>
      {props.children}
    </List>
    
  )
}
