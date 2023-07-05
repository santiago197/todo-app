import { Stack, Typography } from '@mui/material'
import React from 'react'

export const EmptyTodos = () => {
  return (
    <Stack alignItems='center'>
      <Typography variant="h6">Comienza a crear tus tareas</Typography>
      <img src={process.env.PUBLIC_URL+"/imgs/addNote.jpg"} alt="logo" width={255} height={255} fit="contain" />
      <Typography variant="body2">Image by <a href="https://www.freepik.com/free-vector/flat-hand-drawn-time-management-concept_13560988.htm#page=2&query=new%20task&position=0&from_view=search&track=ais">Freepik</a></Typography>
    </Stack>
  )
}
