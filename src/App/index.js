import React from 'react';
import AppUI from "./AppUI";
import { TodoProvider } from '../context/TodoProvider';

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}
export default App;