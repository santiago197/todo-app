import React, { useContext } from 'react';

import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import { TodoContext } from '../context/TodoProvider';
import { useStoreTodos } from '../store/todo';

export const CreateTodoButton = () => {
	const { setOpenModal, openModal } = useContext(TodoContext);
	const { addTodo } = useStoreTodos();

	const handleClickAdd = () => {
		setOpenModal(!openModal);
		addTodo();
	};
	return (
		<Stack sx={{ width: 100, mt: 1 }}>
			<Button
				variant="contained"
				startIcon={<AddIcon />}
				size="small"
				onClick={handleClickAdd}
			>
				Agregar
			</Button>
		</Stack>
	);
};
