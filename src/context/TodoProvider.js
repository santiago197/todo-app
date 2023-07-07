import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../utils/local-storage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS', []);
  const [searchValue, setSearchValue] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const saveTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false })
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      saveTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }