import React from 'react'

export const TodoCounter = ({total, completed}) => {
  return (
    <h1>Has completado {completed} de {total} TODOS</h1>
  )
}
