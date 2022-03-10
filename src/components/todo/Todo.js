import './Todo.css';
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';
import { useState } from 'react';

const Todo = () => {
	const [getTodos, setTodos] = useState([
		{ id: 1, title: 'Study' },
		{ id: 2, title: 'Gaming' },
		{ id: 3, title: 'NSFW' },
	]);

	const eventCreateTodo = (todo) => {
		setTodos(getTodos.concat(todo));
		console.log(getTodos);
	}

	return (
		<div>
			<h3>Todo List</h3>
			<TodoCreate onCreateTodo={eventCreateTodo} />
			<TodoList dataTodos={getTodos} />
		</div>
	)
}

export default Todo;