import { Box, Button, Paper, Stack, Typography } from '@mui/material';

import { createPortal } from 'react-dom';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoLoading } from '../components/TodoLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../context/TodoProvider';
import { useContext } from 'react';
import { ModalNewTodo } from '../components/ModalNewTodo';
import { useStoreTodos } from '../store/todo';
import { ListTodos } from './ListTodos';

const AppUI = () => {
	const { loading, error, searchedTodos, completeTodo, openModal } =
		useContext(TodoContext);

	const { count, inc, dec, todos, deleteTodo } = useStoreTodos();
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					width: '100wv',
					height: '95vh',
					pt: 5,
				}}
			>
				<Stack
					sx={{
						backgroundColor: '#F1F0EE',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,

						minHeight: 700,
						maxHeight: 900,
					}}
				>
					<Stack sx={{ width: 500, height: 'auto' }}>
						<Box
							sx={{
								height: 100,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								backgroundColor: 'blue',
							}}
						>
							<Typography
								variant="h6"
								color="white"
								textAlign="center"
							>
								¿Qué quieres hacer?
							</Typography>
							<TodoCounter />
							<TodoSearch />
							<ListTodos />
							<Button onClick={inc}>One</Button>
							<Button onClick={dec}>-</Button>
							<Typography>{count}</Typography>
						</Box>
					</Stack>
				</Stack>
			</Box>
			{openModal &&
				createPortal(<ModalNewTodo openModal={openModal} />, document.body)}
		</>
	);
};

export default AppUI;
