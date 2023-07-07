import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = [];
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(error);
      setLoading(false);
    }

  }, [])


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return {
    item,
    saveItem,
    loading,
    error
  };
}

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed:true},
//   {text: 'Terminar curso de react', completed:false},
//   {text: 'Desarrollar esta opción', completed:true},
//   {text: 'Agregarle estilos css',  completed:false},
//   {text: 'Llorar con la llorona',  completed:true},
// ]

// localStorage.setItem('TODOS',JSON.stringify(defaultTodos));
