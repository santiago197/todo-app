import { Paper, Stack } from '@mui/material';
import { TodoList } from '../components/TodoList';
import { TodoContext } from '../context/TodoProvider';
import { useContext } from 'react';
import { useStoreTodos } from '../store/todo';
import { TodoLoading } from '../components/TodoLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoItem } from '../components/TodoItem';

export const ListTodos = () => {
	const { loading, error, searchedTodos, completeTodo, openModal } =
		useContext(TodoContext);
	const { count, inc, dec, todos, deleteTodo } = useStoreTodos();
	return (
		<Stack sx={{ flexGrow: 1 }}>
			<Paper
				elevation={3}
				className="contentAlign"
				sx={{ width: 431, mt: 1, ml: 4.5 }}
			>
				<TodoList>
					{loading && <TodoLoading />}
					{error && <p>Error</p>}
					{!loading && searchedTodos.length === 0 && <EmptyTodos />}
					{todos.map((todo) => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => completeTodo(todo.text)}
							onDelete={() => deleteTodo(todo.text)}
						/>
					))}
				</TodoList>
			</Paper>
		</Stack>
	);
};
