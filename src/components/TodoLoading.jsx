import { Box, Skeleton } from '@mui/material'
import React from 'react'

export const TodoLoading = () => {
  return (
    <Box>
      <Skeleton variant='text' width={350} height={40}  />
      <Skeleton variant='text' width={350} height={40}  />
      <Skeleton variant='text' width={350} height={40}  />
      <Skeleton variant='text' width={350} height={40}  />
    </Box>
   
  )
}
