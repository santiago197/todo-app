import { create } from 'zustand';

export const useStoreTodos = create((set) => ({
	todos: [{ text: 'Tarea 1', completed: false }],

	addTodo: (tarea) =>
		set((state) => ({
			todos: [...state.todos, { text: tarea, completed: false }],
		})),

	deleteTodo: (tarea) =>
		set((state) => ({
			todos: state.todos.filter((todo) => todo.text !== tarea),
		})),
}));
